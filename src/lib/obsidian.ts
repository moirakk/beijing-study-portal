/**
 * Obsidian 兼容层：
 * - content/ 目录可直接作为 Obsidian vault 打开；
 * - Markdown 中的双向链接 [[知识点名]] / [[知识点名|显示文本]]
 *   在网站渲染前被替换为站内路由链接（HashRouter → #/topic/:id）；
 * - #标签 语法与全局标签体系一致，渲染层可据此高亮。
 */
import { getAllTopics } from './contentLoader'

let titleIndexCache: Map<string, string> | null = null

/** 知识点标题 → topicId 索引（惰性构建） */
function buildTitleIndex(): Map<string, string> {
  if (titleIndexCache) return titleIndexCache
  const index = new Map<string, string>()
  for (const { topic } of getAllTopics()) {
    index.set(topic.title, topic.id)
  }
  titleIndexCache = index
  return index
}

/** 按标题查找知识点 id（供联想、补全使用） */
export function resolveTopicIdByTitle(title: string): string | undefined {
  return buildTitleIndex().get(title.trim())
}

const WIKILINK_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g

/**
 * 把 Obsidian 双向链接转换为标准 Markdown 链接：
 * - [[有理数的加减法]]        → [有理数的加减法](#/topic/math-7a-1-3)
 * - [[有理数的加减法|加减法]] → [加减法](#/topic/math-7a-1-3)
 * - 未找到对应知识点时保留纯文本（不产生死链）。
 */
export function transformWikilinks(markdown: string): string {
  return markdown.replace(WIKILINK_RE, (_match, target: string, alias?: string) => {
    const label = (alias ?? target).trim()
    const topicId = resolveTopicIdByTitle(target)
    if (!topicId) return label
    return `[${label}](#/topic/${topicId})`
  })
}

/** 提取正文中出现的 #标签（与全局标签体系配合，用于搜索/筛选） */
export function extractHashTags(markdown: string): string[] {
  const tags = new Set<string>()
  const re = /(^|\s)(#[\u4e00-\u9fa5\w]+)/g
  let m: RegExpExecArray | null
  while ((m = re.exec(markdown)) !== null) {
    tags.add(m[2])
  }
  return Array.from(tags)
}
