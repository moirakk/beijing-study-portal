import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Markdown from '../components/Markdown'
import { MasteryDot } from '../components/ui'
import { findTopic, getAllTopics, loadTopicContent } from '../lib/contentLoader'
import {
  MASTERY_COLORS,
  MASTERY_CYCLE,
  MASTERY_LABELS,
  SUBJECT_COLORS,
  difficultyStars,
} from '../lib/constants'
import { masteryOf, useProgress } from '../lib/useProgress'
import type { SubjectId, TopicContent } from '../types'

interface Section {
  key: string
  anchor: string
  icon: string
  title: string
}

const SECTIONS: Section[] = [
  { key: 'note', anchor: 'sec-note', icon: '📒', title: '笔记' },
  { key: 'formulas', anchor: 'sec-formulas', icon: '🧮', title: '公式' },
  { key: 'examples', anchor: 'sec-examples', icon: '✏️', title: '例题' },
  { key: 'exams', anchor: 'sec-exams', icon: '📄', title: '真题' },
  { key: 'mindmap', anchor: 'sec-mindmap', icon: '🧠', title: '导图' },
]

/** 把例题/真题 Markdown 按 `## ` 标题拆分为独立题块 */
function splitProblems(md: string): { heading: string; body: string }[] {
  const stripped = md.replace(/^#\s+.*\n+/, '')
  const parts = stripped.split(/\n(?=##\s)/)
  return parts
    .map((part) => {
      const m = part.match(/^##\s+(.*)\n?/)
      if (!m) return null
      return {
        heading: m[1].trim(),
        body: part.slice(m[0].length).replace(/\n---\s*$/g, '').trim(),
      }
    })
    .filter((x): x is { heading: string; body: string } => x !== null)
}

/** 单个题块：题目常显，解析默认折叠 */
function ProblemCard({ heading, body, color }: { heading: string; body: string; color: string }) {
  const [open, setOpen] = useState(false)
  const idx = body.search(/###\s+解析/)
  const question = idx === -1 ? body : body.slice(0, idx).replace(/###\s+题目\n?/, '').trim()
  const solution = idx === -1 ? null : body.slice(idx).replace(/###\s+解析\n?/, '').trim()

  return (
    <div className="rounded-card border border-line bg-paper/60 p-4 md:p-5 dark:border-neutral-700 dark:bg-neutral-900/40">
      <div className="mb-2 font-serif text-base font-bold" style={{ color }}>
        {heading}
      </div>
      <Markdown markdown={question} />
      {solution && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center gap-2 rounded-lg border border-gold-light bg-gold-light/20 px-4 py-2.5 text-sm font-semibold text-gold-dark transition-colors hover:bg-gold-light/40 dark:border-gold-dark dark:bg-gold-dark/15 dark:text-gold-light"
          >
            <span className={`text-xs transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
            {open ? '收起解析' : '展开解析'}
          </button>
          {open && (
            <div className="mt-3 border-l-2 pl-4" style={{ borderColor: color }}>
              <Markdown markdown={solution} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/** 知识点详情页：单页瀑布流 + 顶部锚点电梯导航 */
export default function TopicDetail() {
  const { id } = useParams<{ id: string }>()
  const loc = id ? findTopic(id) : undefined
  const { state, cycleMastery, toggleFavorite, addRecent } = useProgress()
  const [content, setContent] = useState<TopicContent | null>(null)

  useEffect(() => {
    if (!loc) return
    setContent(null)
    let cancelled = false
    loadTopicContent(loc.topic).then((c) => {
      if (!cancelled) setContent(c)
    })
    addRecent(loc.topic.id, 'note')
    window.scrollTo(0, 0)
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  /** 下一步学什么：把当前知识点列为前置的其他知识点 */
  const nextTopics = useMemo(() => {
    if (!loc) return []
    return getAllTopics()
      .filter((t) => t.topic.prerequisites.includes(loc.topic.id))
      .slice(0, 6)
  }, [loc])

  if (!loc || !id) {
    return <div className="card">未找到该知识点。</div>
  }

  const { subject, grade, chapter, topic } = loc
  const color = SUBJECT_COLORS[subject.id as SubjectId]
  const mastery = masteryOf(state, id)
  const favorite = state.favorites.includes(id)
  const nextMastery = MASTERY_CYCLE[(MASTERY_CYCLE.indexOf(mastery) + 1) % MASTERY_CYCLE.length]

  const availableSections = SECTIONS.filter(
    (s) => content && (content as Record<string, string | undefined>)[s.key],
  )

  const prereqTopics = topic.prerequisites
    .map((pid) => findTopic(pid))
    .filter((x) => x != null)
  const relatedTopics = topic.related
    .map((rid) => findTopic(rid))
    .filter((x) => x != null)

  return (
    <div>
      <Breadcrumb
        items={[
          { label: '首页', to: '/' },
          { label: subject.name, to: `/subject/${subject.id}` },
          { label: grade.title, to: `/subject/${subject.id}` },
          { label: chapter.title, to: `/subject/${subject.id}/tree` },
          { label: topic.title },
        ]}
      />

      {/* 顶部信息卡 */}
      <section className="card" style={{ borderTopWidth: 4, borderTopColor: color }}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">{topic.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gold" title={`难度 ${topic.difficulty}/5`}>
                {difficultyStars(topic.difficulty)}
              </span>
              <span className="tag">{topic.importance}</span>
              {topic.tags.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => toggleFavorite(id)}
              aria-label={favorite ? '取消收藏' : '收藏'}
              title={favorite ? '取消收藏' : '收藏'}
              className={`flex h-11 w-11 items-center justify-center rounded-full border text-xl transition-colors ${
                favorite
                  ? 'border-gold bg-gold-light/30 dark:bg-gold-dark/20'
                  : 'border-line hover:border-gold dark:border-neutral-600'
              }`}
            >
              {favorite ? '⭐' : '☆'}
            </button>
            <button
              type="button"
              onClick={() => cycleMastery(id)}
              title={`点击切换为「${MASTERY_LABELS[nextMastery]}」`}
              className="flex h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: MASTERY_COLORS[mastery] }}
            >
              <MasteryDot status={mastery} size={8} />
              {MASTERY_LABELS[mastery]}
              <span className="text-white/70">→ {MASTERY_LABELS[nextMastery]}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 锚点电梯导航 */}
      {availableSections.length > 0 && (
        <nav className="sticky top-14 z-[5] mt-4 flex gap-2 overflow-x-auto rounded-card border border-line bg-card/95 p-2 backdrop-blur dark:border-neutral-700 dark:bg-neutral-800/95">
          {availableSections.map((s) => (
            <a
              key={s.key}
              href={`#/topic/${id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(s.anchor)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-paper hover:text-ink dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
            >
              {s.icon} {s.title}
            </a>
          ))}
        </nav>
      )}

      {/* 瀑布流内容区 */}
      <div className="mt-4 space-y-5">
        {content === null && topic.materials.length > 0 && (
          <div className="card text-center text-sm text-ink-faint dark:text-neutral-500">
            资料加载中…
          </div>
        )}

        {content !== null && availableSections.length === 0 && (
          <div className="card text-center text-ink-soft dark:text-neutral-400">
            该知识点的学习资料还在整理中，敬请期待。
          </div>
        )}

        {content?.note && (
          <section id="sec-note" className="card scroll-mt-32">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold" style={{ color }}>
              📒 笔记
            </h2>
            <Markdown markdown={content.note} stripH1 />
          </section>
        )}

        {content?.formulas && (
          <section id="sec-formulas" className="card scroll-mt-32">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold" style={{ color }}>
              🧮 公式
            </h2>
            <Markdown markdown={content.formulas} stripH1 />
          </section>
        )}

        {content?.examples && (
          <section id="sec-examples" className="card scroll-mt-32">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold" style={{ color }}>
              ✏️ 例题
            </h2>
            <div className="space-y-4">
              {splitProblems(content.examples).map((p, i) => (
                <ProblemCard key={i} heading={p.heading} body={p.body} color={color} />
              ))}
            </div>
          </section>
        )}

        {content?.exams && (
          <section id="sec-exams" className="card scroll-mt-32">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold" style={{ color }}>
              📄 真题
            </h2>
            <div className="space-y-4">
              {splitProblems(content.exams).map((p, i) => (
                <ProblemCard key={i} heading={p.heading} body={p.body} color={color} />
              ))}
            </div>
          </section>
        )}

        {content?.mindmap && (
          <section id="sec-mindmap" className="card scroll-mt-32">
            <h2 className="mb-3 flex items-center gap-2 text-xl font-bold" style={{ color }}>
              🧠 导图
            </h2>
            <Markdown markdown={content.mindmap} stripH1 />
          </section>
        )}
      </div>

      {/* 底部：前置知识 & 下一步学什么 */}
      {(prereqTopics.length > 0 || nextTopics.length > 0 || relatedTopics.length > 0) && (
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {prereqTopics.length > 0 && (
            <section className="card">
              <h2 className="mb-3 text-base font-bold text-ink-soft dark:text-neutral-400">
                ⬅️ 前置知识（建议先掌握）
              </h2>
              <ul className="space-y-1">
                {prereqTopics.map((p) => (
                  <li key={p!.topic.id}>
                    <Link
                      to={`/topic/${p!.topic.id}`}
                      className="flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-paper dark:hover:bg-neutral-700/50"
                    >
                      <MasteryDot status={masteryOf(state, p!.topic.id)} />
                      <span className="text-[15px]">{p!.topic.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(nextTopics.length > 0 || relatedTopics.length > 0) && (
            <section className="card">
              <h2 className="mb-3 text-base font-bold text-ink-soft dark:text-neutral-400">
                ➡️ 下一步学什么
              </h2>
              <ul className="space-y-1">
                {nextTopics.map((n) => (
                  <li key={n.topic.id}>
                    <Link
                      to={`/topic/${n.topic.id}`}
                      className="flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-paper dark:hover:bg-neutral-700/50"
                    >
                      <MasteryDot status={masteryOf(state, n.topic.id)} />
                      <span className="text-[15px]">{n.topic.title}</span>
                    </Link>
                  </li>
                ))}
                {relatedTopics.map((r) => (
                  <li key={r!.topic.id}>
                    <Link
                      to={`/topic/${r!.topic.id}`}
                      className="flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-paper dark:hover:bg-neutral-700/50"
                    >
                      <MasteryDot status={masteryOf(state, r!.topic.id)} />
                      <span className="text-[15px]">{r!.topic.title}</span>
                      <span className="tag">关联</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  )
}
