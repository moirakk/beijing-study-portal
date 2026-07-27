import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Markdown from '../components/Markdown'
import { findTopic, getAllTopics, loadTopicContent } from '../lib/contentLoader'
import { difficultyStars, subjectVars } from '../lib/constants'
import type { SubjectId, TopicContent } from '../types'

interface Section {
  key: string
  anchor: string
  title: string
}

const SECTIONS: Section[] = [
  { key: 'note', anchor: 'sec-note', title: '笔记' },
  { key: 'formulas', anchor: 'sec-formulas', title: '公式' },
  { key: 'examples', anchor: 'sec-examples', title: '例题' },
  { key: 'exams', anchor: 'sec-exams', title: '真题' },
  { key: 'mindmap', anchor: 'sec-mindmap', title: '导图' },
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
function ProblemCard({ heading, body }: { heading: string; body: string }) {
  const [open, setOpen] = useState(false)
  const idx = body.search(/###\s+解析/)
  const question = idx === -1 ? body : body.slice(0, idx).replace(/###\s+题目\n?/, '').trim()
  const solution = idx === -1 ? null : body.slice(idx).replace(/###\s+解析\n?/, '').trim()

  return (
    <div className="rounded-xl border border-line bg-paper/60 p-4 md:p-5">
      <div className="mb-2 font-serif text-base font-bold text-[var(--s-deep)]">
        {heading}
      </div>
      <Markdown markdown={question} />
      {solution && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex w-full items-center gap-2 rounded-lg bg-[var(--s-soft)] px-4 py-2.5 text-sm font-bold text-[var(--s-deep)] transition-opacity hover:opacity-85"
          >
            <span className={`text-xs transition-transform ${open ? 'rotate-90' : ''}`}>▶</span>
            {open ? '收起解析' : '展开解析'}
          </button>
          {open && (
            <div className="mt-3 border-l-2 border-[var(--s)] pl-4">
              <Markdown markdown={solution} />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/** 知识点详情页：讲义排版（学科色标题、KV、标签、要点框、表格） */
export default function TopicDetail() {
  const { id } = useParams<{ id: string }>()
  const loc = id ? findTopic(id) : undefined
  const [content, setContent] = useState<TopicContent | null>(null)

  useEffect(() => {
    if (!loc) return
    setContent(null)
    let cancelled = false
    loadTopicContent(loc.topic).then((c) => {
      if (!cancelled) setContent(c)
    })
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
    return <div className="card text-ink-soft">未找到该知识点。</div>
  }

  const { subject, grade, chapter, topic } = loc

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
    <div style={subjectVars(subject.id as SubjectId)}>
      <Breadcrumb
        items={[
          { label: '首页', to: '/' },
          { label: subject.name, to: `/subject/${subject.id}` },
          { label: grade.title, to: `/subject/${subject.id}` },
          { label: chapter.title, to: `/subject/${subject.id}` },
          { label: topic.title },
        ]}
      />

      {/* 标题区：宋体大标题 + 学科色 + 渐变色条 + 元信息 */}
      <header className="mt-6">
        <h1 className="m-0 font-serif text-[clamp(26px,5vw,36px)] font-bold leading-tight text-[var(--s-deep)]">
          {topic.title}
        </h1>
        <div className="rule mt-2.5" />
        <ul className="kv mt-4">
          <li>
            <span className="k">所属章节</span>
            <span className="v">
              {subject.name} · {grade.title} · {chapter.title}
            </span>
          </li>
          <li>
            <span className="k">难度</span>
            <span className="v text-[var(--s)]">
              {difficultyStars(topic.difficulty)}
            </span>
          </li>
          <li>
            <span className="k">标签</span>
            <span className="v flex flex-wrap items-center gap-1.5">
              <span className="tag">{topic.importance}</span>
              {topic.tags.map((t) => (
                <span key={t} className="tag">{t.replace(/^#/, '')}</span>
              ))}
            </span>
          </li>
        </ul>
      </header>

      {/* 锚点电梯导航 */}
      {availableSections.length > 0 && (
        <nav className="nav-blur top-12 z-[5] -mx-1 mt-5 flex gap-1.5 overflow-x-auto rounded-full border border-line px-2 py-1.5">
          {availableSections.map((s) => (
            <a
              key={s.key}
              href={`#/topic/${id}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(s.anchor)?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="nav-link"
            >
              {s.title}
            </a>
          ))}
        </nav>
      )}

      {/* 内容区 */}
      <div className="mt-5 space-y-5">
        {content === null && topic.materials.length > 0 && (
          <div className="card text-center text-sm text-ink-faint">资料加载中…</div>
        )}

        {content !== null && availableSections.length === 0 && (
          <div className="card text-center text-ink-soft">
            该知识点的学习资料还在整理中，敬请期待。
          </div>
        )}

        {content?.note && (
          <section id="sec-note" className="card scroll-mt-28">
            <h2 className="m-0 mb-3 flex items-center gap-2.5 font-sans text-[16.5px] font-extrabold tracking-normal">
              笔记 <span className="tag">概念讲解</span>
            </h2>
            <Markdown markdown={content.note} stripH1 />
          </section>
        )}

        {content?.formulas && (
          <section id="sec-formulas" className="card scroll-mt-28">
            <h2 className="m-0 mb-3 flex items-center gap-2.5 font-sans text-[16.5px] font-extrabold tracking-normal">
              公式 <span className="tag">速查卡片</span>
            </h2>
            <Markdown markdown={content.formulas} stripH1 />
          </section>
        )}

        {content?.examples && (
          <section id="sec-examples" className="card scroll-mt-28">
            <h2 className="m-0 mb-4 flex items-center gap-2.5 font-sans text-[16.5px] font-extrabold tracking-normal">
              例题 <span className="tag">典型题精讲</span>
            </h2>
            <div className="space-y-4">
              {splitProblems(content.examples).map((p, i) => (
                <ProblemCard key={i} heading={p.heading} body={p.body} />
              ))}
            </div>
          </section>
        )}

        {content?.exams && (
          <section id="sec-exams" className="card scroll-mt-28">
            <h2 className="m-0 mb-4 flex items-center gap-2.5 font-sans text-[16.5px] font-extrabold tracking-normal">
              真题 <span className="tag">北京中高考</span>
            </h2>
            <div className="space-y-4">
              {splitProblems(content.exams).map((p, i) => (
                <ProblemCard key={i} heading={p.heading} body={p.body} />
              ))}
            </div>
          </section>
        )}

        {content?.mindmap && (
          <section id="sec-mindmap" className="card scroll-mt-28">
            <h2 className="m-0 mb-3 flex items-center gap-2.5 font-sans text-[16.5px] font-extrabold tracking-normal">
              导图 <span className="tag">知识脉络</span>
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
              <h2 className="m-0 mb-2.5 font-sans text-[15px] font-extrabold tracking-normal text-[var(--s-deep)]">
                前置知识
              </h2>
              <ul className="kv">
                {prereqTopics.map((p) => (
                  <li key={p!.topic.id}>
                    <span className="k">建议先学</span>
                    <span className="v">
                      <Link
                        to={`/topic/${p!.topic.id}`}
                        className="font-medium text-[var(--s)] hover:underline"
                      >
                        {p!.topic.title}
                      </Link>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(nextTopics.length > 0 || relatedTopics.length > 0) && (
            <section className="card">
              <h2 className="m-0 mb-2.5 font-sans text-[15px] font-extrabold tracking-normal text-[var(--s-deep)]">
                下一步学什么
              </h2>
              <ul className="kv">
                {nextTopics.map((n) => (
                  <li key={n.topic.id}>
                    <span className="k">进阶</span>
                    <span className="v">
                      <Link
                        to={`/topic/${n.topic.id}`}
                        className="font-medium text-[var(--s)] hover:underline"
                      >
                        {n.topic.title}
                      </Link>
                    </span>
                  </li>
                ))}
                {relatedTopics.map((r) => (
                  <li key={r!.topic.id}>
                    <span className="k">关联</span>
                    <span className="v">
                      <Link
                        to={`/topic/${r!.topic.id}`}
                        className="font-medium text-[var(--s)] hover:underline"
                      >
                        {r!.topic.title}
                      </Link>
                    </span>
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
