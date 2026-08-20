import { useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import { findTopic, getSubjects } from '../lib/contentLoader'
import type { TopicLocation } from '../lib/contentLoader'
import { searchAll, encodeCJK, ensureEngine } from '../lib/searchEngine'
import type { SearchHit } from '../lib/searchEngine'
import {
  ALL_GRADE_IDS,
  GRADE_SCOPE_LABELS,
  GRADE_TITLES,
  MATERIAL_LABELS,
  gradeIdsForScope,
  subjectVars,
} from '../lib/constants'
import type { GradeScope } from '../lib/constants'
import type { GradeId, MaterialType, SubjectId, TopicTag } from '../types'

const ALL_TAGS: TopicTag[] = [
  '#中考必考', '#中考高频', '#高考高频', '#了解即可',
  '#易错', '#需背诵', '#需大量练习', '#基础', '#提高', '#拔高',
]
const MATERIAL_TYPES: MaterialType[] = ['note', 'formula', 'example', 'exam', 'mindmap']

/** 渐进披露：结果先展示前 8 条，点击"展开更多"每次多显示 8 条 */
const PAGE_SIZE = 8

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

/** 搜索页：大搜索框居中 + FlexSearch 全文检索，支持学科/年级/资料类型/标签筛选 */
export default function Search() {
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const [input, setInput] = useState(query)
  const inputRef = useRef<HTMLInputElement>(null)

  const [fSubject, setFSubject] = useState<SubjectId | ''>('')
  const [fGrade, setFGrade] = useState<GradeId | ''>('')
  const [scope, setScope] = useState<GradeScope>('current')
  const [fMaterial, setFMaterial] = useState<MaterialType | ''>('')
  const [fTag, setFTag] = useState<TopicTag | ''>('')
  const [hits, setHits] = useState<SearchHit[]>([])
  const [searching, setSearching] = useState(false)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  useEffect(() => {
    setInput(query)
  }, [query])

  useEffect(() => {
    inputRef.current?.focus()
    const warmup = () => {
      ensureEngine().catch(() => {
        // 搜索页仍会在正式查询时重试；预热失败不打断用户。
      })
    }
    const idle = window.requestIdleCallback?.(warmup, { timeout: 1800 })
    const timer = !window.requestIdleCallback ? window.setTimeout(warmup, 400) : null
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== '/') return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      e.preventDefault()
      inputRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (idle != null) window.cancelIdleCallback?.(idle)
      if (timer != null) window.clearTimeout(timer)
    }
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
    const scopedGradeIds = new Set(gradeIdsForScope(scope))
    return hits
      .map((hit) => ({ hit, loc: findTopic(hit.topicId) }))
      .filter((row): row is ResultRow => row.loc != null)
      .filter(({ hit, loc }) => {
        if (fSubject && loc.subject.id !== fSubject) return false
        if (fGrade && loc.grade.id !== fGrade) return false
        if (!fGrade && !scopedGradeIds.has(loc.grade.id)) return false
        if (fMaterial && !(hit.materialType === fMaterial || loc.topic.materials.includes(fMaterial))) return false
        if (fTag && !loc.topic.tags.includes(fTag)) return false
        return true
      })
  }, [hits, fSubject, fGrade, scope, fMaterial, fTag])

  // 查询或筛选变化时重置渐进披露条数
  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [query, fSubject, fGrade, scope, fMaterial, fTag])

  const visibleResults = results.slice(0, visibleCount)
  const remaining = results.length - visibleResults.length

  const submit = () => {
    const q = input.trim()
    setParams(q ? { q } : {})
  }

  const selectCls =
    'rounded-full border border-line bg-panel px-3 py-1 text-[13px] text-ink-soft outline-none focus:border-gold'

  return (
    <div>
      {/* 大搜索框居中 */}
      <header className="mx-auto max-w-xl pt-8 text-center md:pt-14">
        <div className="text-[13px] font-bold tracking-[0.24em] text-gold">全文检索</div>
        <h1 className="mb-5 mt-2 font-serif text-[clamp(26px,5vw,36px)] font-bold">
          搜索知识点
        </h1>
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            placeholder="输入关键词，如「绝对值」「有理数」…"
            className="w-full rounded-full border border-line bg-panel px-5 py-2.5 text-base outline-none placeholder:text-ink-faint focus:border-gold"
          />
          <button
            type="button"
            onClick={submit}
            className="shrink-0 rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90 dark:text-panel"
          >
            搜索
          </button>
        </div>

        {/* 筛选器 */}
        <div className="mt-3.5 flex flex-wrap justify-center gap-2">
          <select value={scope} onChange={(e) => setScope(e.target.value as GradeScope)} className={selectCls} aria-label="按学习范围筛选">
            {(Object.keys(GRADE_SCOPE_LABELS) as GradeScope[]).map((key) => (
              <option key={key} value={key}>{GRADE_SCOPE_LABELS[key]}</option>
            ))}
          </select>
          <select value={fSubject} onChange={(e) => setFSubject(e.target.value as SubjectId | '')} className={selectCls} aria-label="按学科筛选">
            <option value="">全部学科</option>
            {getSubjects().map((s) => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
          <select value={fGrade} onChange={(e) => setFGrade(e.target.value as GradeId | '')} className={selectCls} aria-label="按年级筛选">
            <option value="">不指定学期</option>
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
      </header>

      {/* 结果 */}
      <div className="mx-auto mt-8 max-w-2xl">
        {query.trim() === '' ? (
          <p className="text-center text-sm text-ink-faint">
            输入关键词开始搜索（提示：按{' '}
            <kbd className="rounded border border-line bg-panel px-1.5">/</kbd>{' '}
            可快速聚焦搜索框）
          </p>
        ) : searching ? (
          <p className="text-center text-sm text-ink-faint">
            正在准备全站索引，马上就好…
          </p>
        ) : results.length === 0 ? (
          <div className="card text-center">
            <p className="text-sm text-ink-soft">
              没有找到与「{query}」相关的知识点
            </p>
            <p className="mt-1 text-xs text-ink-faint">
              试试更换关键词，或清除上方筛选条件
            </p>
          </div>
        ) : (
          <>
            <p className="mb-3 text-[13px] text-ink-soft">
              共 {results.length} 条结果
              {!fGrade && ` · ${GRADE_SCOPE_LABELS[scope]}`}
              {remaining > 0 && `，先展示前 ${visibleResults.length} 条`}
            </p>
            <ul className="space-y-3.5">
              {visibleResults.map(({ hit, loc }, i) => (
                <li key={hit.topicId} style={subjectVars(loc.subject.id as SubjectId)}>
                  <Reveal delay={Math.min(i, 7) * 45}>
                    <Link
                      to={`/topic/${hit.topicId}`}
                      className="card card-lift block hover:border-[var(--s)]"
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className={`font-serif text-base font-bold text-[var(--s-deep)] ${
                            hit.isDraft ? 'opacity-55' : ''
                          }`}
                        >
                          <Highlight text={loc.topic.title} query={query.trim()} />
                        </span>
                        {hit.isDraft && (
                          <span className="tag opacity-70">待补充</span>
                        )}
                        {hit.materialType && (
                          <span className="tag">{MATERIAL_LABELS[hit.materialType]}</span>
                        )}
                      </div>
                      <div className="mt-1 text-xs text-ink-faint">
                        {loc.subject.name} › {loc.grade.title} › {loc.chapter.title}
                      </div>
                      {hit.snippet && (
                        <p className="mb-0 mt-2 text-sm leading-relaxed text-ink-soft">
                          <Highlight text={hit.snippet} query={query.trim()} />
                        </p>
                      )}
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
            {remaining > 0 && (
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-line bg-panel px-4 py-2 text-[13.5px] font-semibold text-ink-soft transition-colors hover:border-gold hover:text-ink"
              >
                展开更多（还有 {remaining} 条）
                <span className="text-[11px] leading-none" aria-hidden>▾</span>
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
