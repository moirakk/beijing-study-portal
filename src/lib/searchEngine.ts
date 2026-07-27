/**
 * FlexSearch 全文搜索引擎封装。
 * - 索引内容：知识点标题、标签、五类 Markdown 资料正文
 * - 中文支持：自定义 encoder 按 CJK 单字 + 相邻双字（bigram）切分，
 *   拉丁字母/数字按词切分并支持前缀匹配
 * - 索引首次搜索时异步构建并缓存（模块级单例），不阻塞首屏
 */
// flexsearch 0.7 的 ESM bundle 只有 default 导出（{ Index, Document, ... }），
// 类型声明却是命名导出，这里做一次桥接。
import FlexSearch from 'flexsearch'
import type { Index as FlexIndex, IndexOptions } from 'flexsearch'
import type { MaterialType } from '../types'
import { getAllTopics, loadMaterial } from './contentLoader'

const { Index } = FlexSearch as {
  Index: new (options?: IndexOptions<string>) => FlexIndex
}

// ---------------------------------------------------------------------------
// 中文分词 encoder
// ---------------------------------------------------------------------------

const CJK_RE = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/
const LATIN_RE = /[a-z0-9]+/g

/**
 * 混合中英文 encoder：
 * - 英文/数字：按连续串切词（小写化）
 * - CJK：逐字切分，并追加相邻双字 bigram 提高短语命中精度
 */
export function encodeCJK(str: string): string[] {
  const text = str.toLowerCase()
  const tokens: string[] = []

  for (const m of text.matchAll(LATIN_RE)) tokens.push(m[0])

  let prev = ''
  for (const ch of text) {
    if (CJK_RE.test(ch)) {
      tokens.push(ch)
      if (prev) tokens.push(prev + ch)
      prev = ch
    } else {
      prev = ''
    }
  }
  return tokens
}

// ---------------------------------------------------------------------------
// 索引构建（惰性单例）
// ---------------------------------------------------------------------------

export interface SearchHit {
  topicId: string
  /** 命中的资料类型（标题/标签命中时为 null） */
  materialType: MaterialType | null
  /** 命中片段（纯文本） */
  snippet: string
  /** 相关度得分：标题 10 > 标签 6 > 正文 3 */
  score: number
}

interface ContentDoc {
  topicId: string
  materialType: MaterialType
  /** 去除 Markdown 语法后的纯文本（用于索引与摘要） */
  text: string
}

/** 粗略去除 Markdown 语法，保留正文纯文本 */
export function stripMarkdown(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>|#-]{1,3}/g, (m) => (m === '-' || m === '>' ? ' ' : ''))
    .replace(/\$\$?/g, '')
    .replace(/\n{2,}/g, '\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim()
}

interface EngineState {
  titleIndex: FlexIndex
  contentIndex: FlexIndex
  /** titleIndex 的 id → topicId */
  titleIds: string[]
  /** contentIndex 的 id → 文档 */
  contentDocs: ContentDoc[]
}

let enginePromise: Promise<EngineState> | null = null

async function buildEngine(): Promise<EngineState> {
  const indexOptions = {
    encode: encodeCJK,
    tokenize: 'forward' as const,
    cache: true,
  }
  const titleIndex = new Index(indexOptions)
  const contentIndex = new Index(indexOptions)

  const titleIds: string[] = []
  const contentDocs: ContentDoc[] = []

  const topics = getAllTopics()

  // 1. 标题 + 标签（同步，量小）
  for (const { topic } of topics) {
    const id = titleIds.length
    titleIds.push(topic.id)
    titleIndex.add(id, `${topic.title} ${topic.tags.join(' ')}`)
  }

  // 2. Markdown 正文（异步懒加载全部资料）
  const tasks: Promise<void>[] = []
  for (const { topic } of topics) {
    if (!topic.contentPath) continue
    for (const type of topic.materials) {
      tasks.push(
        loadMaterial(topic.contentPath, type).then((md) => {
          if (!md) return
          contentDocs.push({ topicId: topic.id, materialType: type, text: stripMarkdown(md) })
        }),
      )
    }
  }
  await Promise.all(tasks)
  contentDocs.forEach((doc, i) => contentIndex.add(i, doc.text))

  return { titleIndex, contentIndex, titleIds, contentDocs }
}

/** 获取（或首次构建）搜索引擎单例 */
export function ensureEngine(): Promise<EngineState> {
  if (!enginePromise) enginePromise = buildEngine()
  return enginePromise
}

// ---------------------------------------------------------------------------
// 搜索
// ---------------------------------------------------------------------------

/** 从纯文本中截取命中片段（优先精确子串，其次首个命中 token 的位置） */
export function makeSnippet(text: string, query: string): string {
  const lower = text.toLowerCase()
  const q = query.toLowerCase().trim()
  let idx = lower.indexOf(q)
  let hitLen = q.length
  if (idx === -1) {
    // 按 token 找第一个出现位置
    idx = -1
    for (const token of encodeCJK(q)) {
      const i = lower.indexOf(token)
      if (i !== -1 && (idx === -1 || i < idx)) {
        idx = i
        hitLen = token.length
      }
    }
    if (idx === -1) {
      return text.slice(0, 80).replace(/\s+/g, ' ') + (text.length > 80 ? '…' : '')
    }
  }
  const start = Math.max(0, idx - 40)
  const end = Math.min(text.length, idx + hitLen + 60)
  return (
    (start > 0 ? '…' : '') +
    text.slice(start, end).replace(/\s+/g, ' ') +
    (end < text.length ? '…' : '')
  )
}

const SEARCH_LIMIT = 100

/**
 * 全文搜索：返回按得分排序、同一知识点去重（保留最高分）的命中列表。
 * 首次调用会异步构建索引。
 */
export async function searchAll(query: string): Promise<SearchHit[]> {
  const q = query.trim()
  if (!q) return []
  const { titleIndex, contentIndex, titleIds, contentDocs } = await ensureEngine()

  const byTopic = new Map<string, SearchHit>()
  const put = (hit: SearchHit) => {
    const prev = byTopic.get(hit.topicId)
    if (!prev) {
      byTopic.set(hit.topicId, hit)
      return
    }
    // 合并：分数取最高，摘要/资料类型取有值的一方（标题命中无摘要）
    byTopic.set(hit.topicId, {
      topicId: hit.topicId,
      score: Math.max(prev.score, hit.score),
      materialType: prev.materialType ?? hit.materialType,
      snippet: prev.snippet || hit.snippet,
    })
  }

  // 标题/标签命中
  for (const id of titleIndex.search(q, SEARCH_LIMIT)) {
    const topicId = titleIds[id as number]
    if (topicId) put({ topicId, materialType: null, snippet: '', score: 10 })
  }

  // 正文命中
  for (const id of contentIndex.search(q, SEARCH_LIMIT)) {
    const doc = contentDocs[id as number]
    if (!doc) continue
    put({
      topicId: doc.topicId,
      materialType: doc.materialType,
      snippet: makeSnippet(doc.text, q),
      score: 3,
    })
  }

  return Array.from(byTopic.values()).sort((a, b) => b.score - a.score)
}
