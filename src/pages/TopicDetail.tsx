import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Markdown from '../components/Markdown'
import ReadingProgress from '../components/ReadingProgress'
import Reveal from '../components/Reveal'
import { findTopic, getAllTopics, isDraftTopic, loadTopicContent } from '../lib/contentLoader'
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

/** 各内容区的小标签文案 */
const SECTION_BADGES: Record<string, string> = {
  note: '概念讲解',
  formulas: '速查卡片',
  examples: '典型题精讲',
  exams: '北京中高考',
  mindmap: '知识脉络',
}

/**
 * 可折叠内容分区：标题整行可点收起/展开，与目录页折叠交互一致。
 * 由父级受控（锚点导航点击时需强制展开再滚动）。
 */
function CollapsibleSection({
  anchor,
  title,
  badge,
  open,
  onToggle,
  children,
}: {
  anchor: string
  title: string
  badge: string
  open: boolean
  onToggle: () => void
  children: ReactNode
}) {
  return (
    <section id={anchor} className="card scroll-mt-28 overflow-hidden !p-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center gap-2.5 px-4 py-3.5 text-left transition-colors hover:bg-[var(--s-soft)] md:px-[26px]"
      >
        <span className="font-sans text-[16.5px] font-extrabold tracking-normal text-ink">
          {title}
        </span>
        <span className="tag">{badge}</span>
        <span
          className={`ml-auto shrink-0 text-[11px] leading-none text-ink-faint transition-transform duration-200 ${
            open ? '' : '-rotate-90'
          }`}
          aria-hidden
        >
          ▾
        </span>
      </button>
      {open && <div className="fold-in px-4 pb-4 md:px-[26px] md:pb-5">{children}</div>}
    </section>
  )
}

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
            aria-expanded={open}
            className="flex w-full items-center gap-2 rounded-lg bg-[var(--s-soft)] px-4 py-2.5 text-sm font-bold text-[var(--s-deep)] transition-opacity hover:opacity-85"
          >
            <span
              className={`text-[11px] leading-none transition-transform duration-200 ${
                open ? '' : '-rotate-90'
              }`}
              aria-hidden
            >
              ▾
            </span>
            {open ? '收起解析' : '展开解析'}
          </button>
          {open && (
            <div className="fold-in mt-3 border-l-2 border-[var(--s)] pl-4">
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
  // 各内容分区的展开状态（key → open）；换知识点时重置为全展开
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  useEffect(() => {
    if (!loc) return
    setContent(null)
    setOpenSections({})
    let cancelled = false
    loadTopicContent(loc.topic).then((c) => {
      if (!cancelled) setContent(c)
    })
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
    return (
      <div className="py-20 text-center">
        <div className="text-[15px] text-ink-soft">未找到该知识点。</div>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full border border-line bg-panel px-4 py-1.5 text-[13.5px] font-semibold text-ink-soft transition-colors hover:border-gold hover:text-ink"
        >
          ← 返回首页
        </Link>
      </div>
    )
  }

  const { subject, grade, chapter, topic } = loc
  const draft = isDraftTopic(topic)

  const availableSections = SECTIONS.filter(
    (s) => content && (content as Record<string, string | undefined>)[s.key],
  )

  const prereqTopics = topic.prerequisites
    .map((pid) => findTopic(pid))
    .filter((x): x is NonNullable<typeof x> => x != null)
  const relatedTopics = topic.related
    .map((rid) => findTopic(rid))
    .filter((x): x is NonNullable<typeof x> => x != null)

  // 章节内顺序导航：上一个 / 下一个知识点
  const siblings = chapter.topics
  const idx = siblings.findIndex((t) => t.id === topic.id)
  const prevTopic = idx > 0 ? siblings[idx - 1] : null
  const nextInChapter = idx >= 0 && idx < siblings.length - 1 ? siblings[idx + 1] : null

  // draft 骨架页：占位分区默认折叠收起，避免空骨架造成困惑
  const isOpen = (key: string) => openSections[key] ?? !draft
  const toggleSection = (key: string) =>
    setOpenSections((prev) => ({ ...prev, [key]: !(prev[key] ?? !draft) }))
  /** 锚点导航：先确保目标分区展开，再平滑滚动过去 */
  const jumpToSection = (s: Section) => {
    setOpenSections((prev) => ({ ...prev, [s.key]: true }))
    requestAnimationFrame(() => {
      document.getElementById(s.anchor)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <div style={subjectVars(subject.id as SubjectId)}>
      <ReadingProgress />
      <Breadcrumb
        items={[
          { label: '首页', to: '/' },
          { label: subject.name, to: `/subject/${subject.id}` },
          { label: grade.title, to: `/subject/${subject.id}?grade=${grade.id}` },
          { label: chapter.title },
          { label: topic.title },
        ]}
      />

      {/* 标题区：宋体大标题 + 学科色 + 渐变色条 + 元信息（依次渐入） */}
      <header className="mt-6">
        <Reveal>
          <h1 className="m-0 font-serif text-[clamp(26px,5vw,36px)] font-bold leading-tight text-[var(--s-deep)]">
            {topic.title}
          </h1>
          <div className="rule rule-grow mt-2.5" />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-3.5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13.5px]">
            <span className="text-ink-soft">
              {grade.title} · {chapter.title}
            </span>
            <span
              className="text-[var(--s)]"
              title={`难度 ${topic.difficulty}/5`}
            >
              {difficultyStars(topic.difficulty)}
            </span>
            <span className="flex flex-wrap items-center gap-1.5">
              <span className="tag">{topic.importance}</span>
              {topic.tags.map((t) => (
                <span key={t} className="hl">{t.replace(/^#/, '')}</span>
              ))}
            </span>
          </div>
        </Reveal>
      </header>

      {/* draft 骨架页提示条 */}
      {draft && (
        <div className="mt-5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 rounded-xl border border-dashed border-line bg-panel px-4 py-3">
          <span className="tag shrink-0">待补充</span>
          <span className="text-[13.5px] leading-relaxed text-ink-soft">
            这一页还没有内容。你可以在 Obsidian 里打开对应笔记补充，或用 AI
            生成后粘贴进来，保存后这里会自动更新。
          </span>
        </div>
      )}

      {/* 锚点电梯导航（draft 页只有占位骨架，不显示） */}
      {!draft && availableSections.length > 0 && (
        <nav className="nav-blur top-12 z-[5] -mx-1 mt-5 flex gap-1.5 overflow-x-auto rounded-full border border-line px-2 py-1.5">
          {availableSections.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => jumpToSection(s)}
              className="nav-link"
            >
              {s.title}
            </button>
          ))}
        </nav>
      )}

      {/* 内容区（各分区随滚动渐入，留足呼吸感） */}
      <div className="mt-5 space-y-6">
        {content === null && topic.materials.length > 0 && (
          <div className="card text-center text-sm text-ink-faint">资料加载中…</div>
        )}

        {content !== null && availableSections.length === 0 && (
          <div className="card text-center text-ink-soft">
            该知识点的学习资料还在整理中，敬请期待。
          </div>
        )}

        {content?.note && (
          <Reveal>
            <CollapsibleSection
              anchor="sec-note"
              title="笔记"
              badge={SECTION_BADGES.note}
              open={isOpen('note')}
              onToggle={() => toggleSection('note')}
            >
              <Markdown markdown={content.note} stripH1 />
            </CollapsibleSection>
          </Reveal>
        )}

        {content?.formulas && (
          <Reveal>
            <CollapsibleSection
              anchor="sec-formulas"
              title="公式"
              badge={SECTION_BADGES.formulas}
              open={isOpen('formulas')}
              onToggle={() => toggleSection('formulas')}
            >
              <Markdown markdown={content.formulas} stripH1 />
            </CollapsibleSection>
          </Reveal>
        )}

        {content?.examples && (
          <Reveal>
            <CollapsibleSection
              anchor="sec-examples"
              title="例题"
              badge={SECTION_BADGES.examples}
              open={isOpen('examples')}
              onToggle={() => toggleSection('examples')}
            >
              <div className="space-y-4">
                {splitProblems(content.examples).map((p, i) => (
                  <ProblemCard key={`${id}-${i}`} heading={p.heading} body={p.body} />
                ))}
              </div>
            </CollapsibleSection>
          </Reveal>
        )}

        {content?.exams && (
          <Reveal>
            <CollapsibleSection
              anchor="sec-exams"
              title="真题"
              badge={SECTION_BADGES.exams}
              open={isOpen('exams')}
              onToggle={() => toggleSection('exams')}
            >
              <div className="space-y-4">
                {splitProblems(content.exams).map((p, i) => (
                  <ProblemCard key={`${id}-${i}`} heading={p.heading} body={p.body} />
                ))}
              </div>
            </CollapsibleSection>
          </Reveal>
        )}

        {content?.mindmap && (
          <Reveal>
            <CollapsibleSection
              anchor="sec-mindmap"
              title="导图"
              badge={SECTION_BADGES.mindmap}
              open={isOpen('mindmap')}
              onToggle={() => toggleSection('mindmap')}
            >
              <Markdown markdown={content.mindmap} stripH1 />
            </CollapsibleSection>
          </Reveal>
        )}
      </div>

      {/* 章节内顺序导航：上一个 / 下一个 */}
      {(prevTopic || nextInChapter) && (
        <nav className="mt-6 grid gap-3 sm:grid-cols-2">
          {prevTopic ? (
            <Link
              to={`/topic/${prevTopic.id}`}
              className="group card-lift rounded-xl border border-line bg-panel px-4 py-3 hover:border-[var(--s)]"
            >
              <div className="text-[12px] font-bold text-ink-faint">← 上一个</div>
              <div className="mt-0.5 truncate text-[14px] font-semibold text-[var(--s-deep)] group-hover:text-[var(--s)]">
                {prevTopic.title}
              </div>
            </Link>
          ) : (
            <span className="hidden sm:block" />
          )}
          {nextInChapter && (
            <Link
              to={`/topic/${nextInChapter.id}`}
              className="group card-lift rounded-xl border border-line bg-panel px-4 py-3 text-right hover:border-[var(--s)]"
            >
              <div className="text-[12px] font-bold text-ink-faint">下一个 →</div>
              <div className="mt-0.5 truncate text-[14px] font-semibold text-[var(--s-deep)] group-hover:text-[var(--s)]">
                {nextInChapter.title}
              </div>
            </Link>
          )}
        </nav>
      )}

      {/* 底部：前置知识 & 下一步学什么（胶囊链接，紧凑排布） */}
      {(prereqTopics.length > 0 || nextTopics.length > 0 || relatedTopics.length > 0) && (
        <section className="card mt-4">
          <h2 className="m-0 mb-3 font-sans text-[15px] font-extrabold tracking-normal text-[var(--s-deep)]">
            继续学习
          </h2>
          <div className="space-y-3">
            {prereqTopics.length > 0 && (
              <TopicChipRow label="建议先学" topics={prereqTopics.map((p) => p.topic)} />
            )}
            {nextTopics.length > 0 && (
              <TopicChipRow label="进阶" topics={nextTopics.map((n) => n.topic)} />
            )}
            {relatedTopics.length > 0 && (
              <TopicChipRow label="关联" topics={relatedTopics.map((r) => r.topic)} />
            )}
          </div>
        </section>
      )}
    </div>
  )
}

/** 一行推荐：左侧小标签 + 一组知识点胶囊链接 */
function TopicChipRow({
  label,
  topics,
}: {
  label: string
  topics: { id: string; title: string }[]
}) {
  return (
    <div className="flex flex-wrap items-baseline gap-2">
      <span className="shrink-0 text-[12.5px] font-bold text-ink-faint">{label}</span>
      {topics.map((t) => (
        <Link
          key={t.id}
          to={`/topic/${t.id}`}
          className="rounded-full border border-line bg-paper/60 px-3 py-1 text-[13px] font-semibold text-[var(--s-deep)] transition-colors hover:border-[var(--s)] hover:bg-[var(--s-soft)]"
        >
          {t.title}
        </Link>
      ))}
    </div>
  )
}
