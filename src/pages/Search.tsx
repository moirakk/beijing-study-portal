import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { MasteryDot } from '../components/ui'
import { findTopic, getSubjects } from '../lib/contentLoader'
import type { TopicLocation } from '../lib/contentLoader'
import { searchAll, encodeCJK } from '../lib/searchEngine'
import type { SearchHit } from '../lib/searchEngine'
import { ALL_GRADE_IDS, GRADE_TITLES, MATERIAL_LABELS } from '../lib/constants'
import { masteryOf, useProgress } from '../lib/useProgress'
import type { GradeId, MaterialType, SubjectId, TopicTag } from '../types'

const ALL_TAGS: TopicTag[] = [
  '#中考必考', '#中考高频', '#高考高频', '#了解即可',
  '#易错', '#需背诵', '#需大量练习', '#基础', '#提高', '#拔高',
]
const MATERIAL_TYPES: MaterialType[] = ['note', 'formula', 'example', 'exam', 'mindmap']

interface ResultRow {
  hit: SearchHit
  loc: TopicLocation
}

/** 高亮命中词：优先整词精确匹配，否则按分词 token 逐个高亮 */
function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim()
  if (!q) return <>{text}</>

  const lower = text.toLowerCase()
  const exactIdx = lower.indexOf(q.toLowerCase())
  if (exactIdx !== -1) {
    return (
      <>
        {text.slice(0, exactIdx)}
        <mark>{text.slice(exactIdx, exactIdx + q.length)}</mark>
        {text.slice(exactIdx + q.length)}
      </>
    )
  }

  // 按 token 高亮（取长 token 优先，避免单字盖住双字）
  const tokens = Array.from(new Set(encodeCJK(q))).sort((a, b) => b.length - a.length)
  if (tokens.length === 0) return <>{text}</>
  const ranges: { start: number; end: number }[] = []
  for (const token of tokens) {
    let from = 0
    while (from < lower.length) {
      const i = lower.indexOf(token, from)
      if (i === -1) break
      const end = i + token.length
      if (!ranges.some((r) => i < r.end && end > r.start)) ranges.push({ start: i, end })
      from = i + 1
    }
  }
  if (ranges.length === 0) return <>{text}</>
  ranges.sort((a, b) => a.start - b.start)
  const parts: ReactNode[] = []
  let cursor = 0
  ranges.forEach((r, i) => {
    if (r.start > cursor) parts.push(text.slice(cursor, r.start))
    parts.push(<mark key={i}>{text.slice(r.start, r.end)}</mark>)
    cursor = r.end
  })
  if (cursor < text.length) parts.push(text.slice(cursor))
  return <>{parts}</>
}

/** 搜索页：FlexSearch 全文检索（标题 + 标签 + 资料正文），支持学科/年级/资料类型/标签筛选 */
export default function Search() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const [input, setInput] = useState(query)
  const inputRef = useRef<HTMLInputElement>(null)
  const { state } = useProgress()

  const [fSubject, setFSubject] = useState<SubjectId | ''>('')
  const [fGrade, setFGrade] = useState<GradeId | ''>('')
  const [fMaterial, setFMaterial] = useState<MaterialType | ''>('')
  const [fTag, setFTag] = useState<TopicTag | ''>('')
  const [hits, setHits] = useState<SearchHit[]>([])
  const [searching, setSearching] = useState(false)

  useEffect(() => {
    setInput(query)
  }, [query])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  // FlexSearch 检索（索引首次搜索时异步构建）
  useEffect(() => {
    const q = query.trim()
    if (!q) {
      setHits([])
      setSearching(false)
      return
    }
    let cancelled = false
    setSearching(true)
    searchAll(q).then((result) => {
      if (cancelled) return
      setHits(result)
      setSearching(false)
    })
    return () => {
      cancelled = true
    }
  }, [query])

  // 附加位置信息，再按筛选器过滤
  const results = useMemo<ResultRow[]>(() => {
    return hits
      .map((hit) => ({ hit, loc: findTopic(hit.topicId) }))
      .filter((row): row is ResultRow => row.loc != null)
      .filter(({ hit, loc }) => {
        if (fSubject && loc.subject.id !== fSubject) return false
        if (fGrade && loc.grade.id !== fGrade) return false
        if (fMaterial && !(hit.materialType === fMaterial || loc.topic.materials.includes(fMaterial))) return false
        if (fTag && !loc.topic.tags.includes(fTag)) return false
        return true
      })
  }, [hits, fSubject, fGrade, fMaterial, fTag])

  const submit = () => {
    const q = input.trim()
    setParams(q ? { q } : {})
  }

  const selectCls =
    'rounded-full border border-line bg-card px-3 py-1.5 text-sm outline-none focus:border-gold dark:border-neutral-600 dark:bg-neutral-800'

  return (
    <div>
      <Breadcrumb items={[{ label: '首页', to: '/' }, { label: '搜索' }]} />

      <h1 className="mb-4 text-2xl font-bold md:text-3xl">🔍 搜索知识点</h1>

      <div className="card">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="输入关键词，如「绝对值」「有理数」…"
            className="w-full rounded-full border border-line bg-paper px-5 py-2.5 text-base outline-none placeholder:text-ink-faint focus:border-gold dark:border-neutral-600 dark:bg-neutral-900 dark:placeholder:text-neutral-500"
          />
          <button
            type="button"
            onClick={submit}
            className="shrink-0 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            搜索
          </button>
        </div>

        {/* 筛选器 */}
        <div className="mt-3 flex flex-wrap gap-2">
          <select value={fSubject} onChange={(e) => setFSubject(e.target.value as SubjectId | '')} className={selectCls} aria-label="按学科筛选">
            <option value="">全部学科</option>
            {getSubjects().map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          <select value={fGrade} onChange={(e) => setFGrade(e.target.value as GradeId | '')} className={selectCls} aria-label="按年级筛选">
            <option value="">全部年级</option>
            {ALL_GRADE_IDS.map((g) => (
              <option key={g} value={g}>{GRADE_TITLES[g]}</option>
            ))}
          </select>
          <select value={fMaterial} onChange={(e) => setFMaterial(e.target.value as MaterialType | '')} className={selectCls} aria-label="按资料类型筛选">
            <option value="">全部资料类型</option>
            {MATERIAL_TYPES.map((m) => (
              <option key={m} value={m}>{MATERIAL_LABELS[m]}</option>
            ))}
          </select>
          <select value={fTag} onChange={(e) => setFTag(e.target.value as TopicTag | '')} className={selectCls} aria-label="按标签筛选">
            <option value="">全部标签</option>
            {ALL_TAGS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* 结果 */}
      <div className="mt-5">
        {query.trim() === '' ? (
          <p className="text-center text-sm text-ink-faint dark:text-neutral-500">
            输入关键词开始搜索（提示：按 <kbd className="rounded border border-line px-1.5 dark:border-neutral-600">/</kbd> 可快速聚焦顶栏搜索框）
          </p>
        ) : searching ? (
          <p className="text-center text-sm text-ink-faint dark:text-neutral-500">
            正在检索…（首次搜索需要构建索引，请稍候）
          </p>
        ) : results.length === 0 ? (
          <div className="card text-center">
            <div className="text-3xl">🍂</div>
            <p className="mt-2 text-sm text-ink-soft dark:text-neutral-400">
              没有找到与「{query}」相关的知识点
            </p>
            <p className="mt-1 text-xs text-ink-faint dark:text-neutral-500">
              试试更换关键词，或清除上方筛选条件
            </p>
          </div>
        ) : (
          <>
            <p className="mb-3 text-sm text-ink-soft dark:text-neutral-400">
              共 {results.length} 条结果
            </p>
            <ul className="space-y-3">
              {results.map(({ hit, loc }) => (
                <li key={hit.topicId}>
                  <Link to={`/topic/${hit.topicId}`} className="card block transition-shadow hover:shadow-lg">
                    <div className="flex items-center gap-2.5">
                      <MasteryDot status={masteryOf(state, hit.topicId)} />
                      <span className="text-base font-semibold">
                        <Highlight text={loc.topic.title} query={query.trim()} />
                      </span>
                      {hit.materialType && (
                        <span className="tag">{MATERIAL_LABELS[hit.materialType]}</span>
                      )}
                    </div>
                    <div className="mt-1 text-xs text-ink-faint dark:text-neutral-500">
                      {loc.subject.name} › {loc.grade.title} › {loc.chapter.title}
                    </div>
                    {hit.snippet && (
                      <p className="mt-2 text-sm text-ink-soft dark:text-neutral-400">
                        <Highlight text={hit.snippet} query={query.trim()} />
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  )
}
