import { useMemo } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Reveal from '../components/Reveal'
import Mascot from '../components/Mascot'
import { getSubject, getSubjects, isDraftTopic, countRealInGrade } from '../lib/contentLoader'
import {
  CN_NUMERALS,
  CURRENT_GRADE_IDS,
  SUBJECT_EN,
  isCurrentGrade,
  subjectVars,
  semesterFullLabel,
} from '../lib/constants'
import { useReadingProgress } from '../lib/useReadingProgress'
import type { Chapter, Topic, Grade } from '../types'
import type { SubjectId } from '../types'

/**
 * 学科详情页（多邻国学习路径风格）：
 * 学期切换胶囊 + 蜿蜒精灵球路径节点（替代传统章节列表）。
 */
export default function SubjectDetail() {
  const { id } = useParams<{ id: string }>()
  const [params, setParams] = useSearchParams()
  const subject = id ? getSubject(id) : undefined
  const { readTopics } = useReadingProgress()
  const readSet = useMemo(() => new Set(readTopics), [readTopics])

  const gradesWithContent = useMemo(
    () => subject?.grades.filter((g) => g.chapters.length > 0) ?? [],
    [subject],
  )
  const paramGradeId = params.get('grade')

  if (!subject) {
    return <div className="card text-ink-soft">未找到该学科。</div>
  }

  const subjectIndex = getSubjects().findIndex((s) => s.id === subject.id)
  const defaultCurrentGrade = gradesWithContent.find((g) => CURRENT_GRADE_IDS.includes(g.id))
  const currentGradeId =
    (paramGradeId && gradesWithContent.some((g) => g.id === paramGradeId)
      ? paramGradeId
      : null) ??
    defaultCurrentGrade?.id ??
    gradesWithContent[0]?.id ??
    null
  const currentGrade =
    gradesWithContent.find((g) => g.id === currentGradeId) ?? null
  const setActiveGradeId = (gradeId: string) =>
    setParams({ grade: gradeId }, { replace: true })
  const currentStageGrades = subject.grades.filter((grade) => isCurrentGrade(grade.id))
  const futureGrades = subject.grades.filter((grade) => !isCurrentGrade(grade.id))
  const activeInFuture = futureGrades.some((grade) => grade.id === currentGradeId)

  return (
    <div style={subjectVars(subject.id as SubjectId)}>
      <Breadcrumb items={[{ label: '首页', to: '/' }, { label: subject.name }]} />

      {/* subject-head */}
      <Reveal>
        <div className="flex items-end justify-between mt-6 mb-1">
          <div className="subject-head mt-0 mb-0">
            <span className="num">{CN_NUMERALS[subjectIndex] ?? '1'}</span>
            <div>
              <h1 className="name">{subject.name}</h1>
              <div className="en">{SUBJECT_EN[subject.id as SubjectId]}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="hidden sm:block rounded-xl rounded-tr-none bg-[var(--s-soft)] border border-line px-3 py-2 text-[13px] font-bold text-[var(--s-deep)] shadow-sm relative mt-2">
              准备好探索 {subject.name} 的奥秘了吗？
              <div className="absolute -right-[5px] top-3 w-2 h-2 bg-[var(--s-soft)] border-r border-t border-line rotate-45" />
            </div>
            <Mascot subject={subject.id} size={90} state="enter" className="mb-2" />
          </div>
        </div>
        <div className="rule rule-grow" />
      </Reveal>

      {gradesWithContent.length === 0 ? (
        <div className="card mt-8 text-ink-soft">
          该学科的知识树正在搭建中，敬请期待。
        </div>
      ) : (
        <>
          {/* 学期切换胶囊 */}
          <Reveal delay={120}>
            <div className="mt-7">
              <div className="mb-2 text-[12px] font-bold tracking-[0.18em] text-gold">
                当前学习
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStageGrades.map((grade) => (
                  <GradeSwitchButton
                    key={grade.id}
                    grade={grade}
                    active={grade.id === currentGradeId}
                    onClick={setActiveGradeId}
                  />
                ))}
              </div>
              {futureGrades.length > 0 && (
                <details className="mt-3" open={activeInFuture}>
                  <summary className="cursor-pointer list-none text-[12.5px] font-semibold text-ink-faint transition-colors hover:text-ink">
                    以后会学的学期
                    <span className="ml-1 text-[11px]" aria-hidden>▾</span>
                  </summary>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {futureGrades.map((grade) => (
                      <GradeSwitchButton
                        key={grade.id}
                        grade={grade}
                        active={grade.id === currentGradeId}
                        onClick={setActiveGradeId}
                      />
                    ))}
                  </div>
                </details>
              )}
            </div>
          </Reveal>

          {/* 学习路径图 */}
          {currentGrade && (
            <Reveal delay={180}>
              <GradeLearningPath grade={currentGrade} readSet={readSet} />
            </Reveal>
          )}
        </>
      )}
    </div>
  )
}

function GradeSwitchButton({
  grade,
  active,
  onClick,
}: {
  grade: Grade
  active: boolean
  onClick: (gradeId: string) => void
}) {
  const hasContent = grade.chapters.length > 0
  const real = countRealInGrade(grade)

  return (
    <button
      type="button"
      disabled={!hasContent}
      onClick={() => onClick(grade.id)}
      className={`rounded-full border px-4 py-1.5 text-[14px] font-semibold transition-all duration-200 active:scale-95 ${
        active
          ? 'border-transparent bg-[var(--s)] text-white dark:text-panel'
          : hasContent
            ? 'border-line bg-panel text-ink-soft hover:border-[var(--s)] hover:text-[var(--s-deep)]'
            : 'cursor-not-allowed border-line bg-paper text-ink-faint'
      }`}
    >
      {grade.title}
      {hasContent && real > 0 && (
        <span className="ml-1.5 text-[11px] opacity-70">{real}篇</span>
      )}
    </button>
  )
}

/* -------------------------------------------------------------------------- */
/* 学习路径图：章节 banner + 蜿蜒精灵球节点                                     */
/* -------------------------------------------------------------------------- */

function GradeLearningPath({
  grade,
  readSet,
}: {
  grade: Grade
  readSet: Set<string>
}) {
  const realCount = countRealInGrade(grade)
  const readCount = grade.chapters.reduce((n, ch) => {
    return n + ch.topics.filter((t) => !isDraftTopic(t) && readSet.has(t.id)).length
  }, 0)
  const pct = realCount > 0 ? Math.round((readCount / realCount) * 100) : 0

  return (
    <div className="mt-6 pb-10">
      {/* 学期进度条 */}
      <div className="mb-6 rounded-2xl border border-line bg-panel px-5 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[13px] font-bold text-[var(--s-deep)]">
            {semesterFullLabel(grade.id)} · {grade.title}
          </span>
          <span className="text-[13px] font-bold tabular-nums text-[var(--s)]">
            {readCount}/{realCount} 篇
          </span>
        </div>
        <div className="h-3 rounded-full bg-[var(--s-soft)] overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${pct}%`,
              background: 'linear-gradient(90deg, var(--s), var(--s-deep))',
            }}
          />
        </div>
        {pct === 100 && (
          <div className="mt-2 text-center text-[12px] font-bold text-[var(--s)]">
            🎉 本学期全部完成！
          </div>
        )}
      </div>

      {/* 各章节路径 */}
      {grade.chapters.map((chapter, ci) => (
        <ChapterPath
          key={chapter.id}
          chapter={chapter}
          readSet={readSet}
          isFirst={ci === 0}
        />
      ))}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* 单章节路径                                                                   */
/* -------------------------------------------------------------------------- */

const NODE_R = 28
const NODE_STEP = 104
const PATH_W = 320
const LEFT_X = 88
const RIGHT_X = 232

function getNodeX(i: number) {
  return i % 2 === 0 ? LEFT_X : RIGHT_X
}
function getNodeY(i: number) {
  return NODE_R + 10 + i * NODE_STEP
}

function ChapterPath({
  chapter,
  readSet,
  isFirst,
}: {
  chapter: Chapter
  readSet: Set<string>
  isFirst: boolean
}) {
  const realTopics = chapter.topics.filter((t) => !isDraftTopic(t))
  if (chapter.topics.length === 0 && realTopics.length === 0) return null

  return (
    <div className={isFirst ? '' : 'mt-8'}>
      <ChapterBanner chapter={chapter} readSet={readSet} />
      {realTopics.length === 0 ? (
        <div className="mt-3 mb-4 text-center text-[13px] text-ink-faint">
          本章节内容整理中…
        </div>
      ) : (
        <PathNodes topics={realTopics} readSet={readSet} />
      )}
    </div>
  )
}

function ChapterBanner({
  chapter,
  readSet,
}: {
  chapter: Chapter
  readSet: Set<string>
}) {
  const realTopics = chapter.topics.filter((t) => !isDraftTopic(t))
  const readCount = realTopics.filter((t) => readSet.has(t.id)).length
  const total = realTopics.length

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-[var(--s)] bg-[var(--s-soft)] px-4 py-3">
      <div className="shrink-0 pokeball" style={{ width: 32, height: 32 }}>
        <div className="pokeball-btn" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-[14px] font-extrabold text-[var(--s-deep)] leading-snug truncate">
          {chapter.title}
        </div>
        {total > 0 && (
          <div className="text-[11px] text-[var(--s)] mt-0.5">
            {readCount}/{total} 个知识点
          </div>
        )}
      </div>
      {readCount === total && total > 0 && (
        <span className="shrink-0 text-lg">✅</span>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* 蜿蜒节点区域                                                                 */
/* -------------------------------------------------------------------------- */

function PathNodes({ topics, readSet }: { topics: Topic[]; readSet: Set<string> }) {
  const n = topics.length
  const svgH = n * NODE_STEP + NODE_R * 2 + 20
  const firstUnreadIdx = topics.findIndex((t) => !readSet.has(t.id))

  const pathD = topics.reduce((d, _, i) => {
    const x = getNodeX(i)
    const y = getNodeY(i)
    if (i === 0) return `M ${x} ${y}`
    const px = getNodeX(i - 1)
    const py = getNodeY(i - 1)
    return d + ` C ${px} ${py + NODE_STEP * 0.55} ${x} ${y - NODE_STEP * 0.55} ${x} ${y}`
  }, '')

  const readEndIdx = firstUnreadIdx === -1 ? n - 1 : firstUnreadIdx - 1
  const readPathD = topics.slice(0, readEndIdx + 1).reduce((d, _, i) => {
    const x = getNodeX(i)
    const y = getNodeY(i)
    if (i === 0) return `M ${x} ${y}`
    const px = getNodeX(i - 1)
    const py = getNodeY(i - 1)
    return d + ` C ${px} ${py + NODE_STEP * 0.55} ${x} ${y - NODE_STEP * 0.55} ${x} ${y}`
  }, '')

  return (
    <div className="overflow-x-auto">
      <div
        className="relative mx-auto mt-4 overflow-visible"
        style={{ width: PATH_W, height: svgH }}
      >
      <svg
        className="absolute inset-0 pointer-events-none"
        width={PATH_W}
        height={svgH}
        aria-hidden
      >
        {n > 1 && (
          <path
            d={pathD}
            fill="none"
            stroke="var(--line)"
            strokeWidth="7"
            strokeLinecap="round"
          />
        )}
        {n > 1 && readEndIdx >= 0 && (
          <path
            d={readPathD}
            fill="none"
            stroke="var(--s)"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.55"
          />
        )}
      </svg>

      {topics.map((topic, i) => (
        <PathNodeItem
          key={topic.id}
          topic={topic}
          x={getNodeX(i)}
          y={getNodeY(i)}
          isRead={readSet.has(topic.id)}
          isCurrent={i === firstUnreadIdx}
        />
      ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* 单个节点                                                                     */
/* -------------------------------------------------------------------------- */

function PathNodeItem({
  topic,
  x,
  y,
  isRead,
  isCurrent,
}: {
  topic: Topic
  x: number
  y: number
  isRead: boolean
  isCurrent: boolean
}) {
  const labelOnRight = x < PATH_W / 2

  return (
    <Link
      to={`/topic/${topic.id}`}
      className="absolute group"
      style={{
        left: x - NODE_R,
        top: y - NODE_R,
        width: NODE_R * 2,
        height: NODE_R * 2,
      }}
      title={topic.title}
    >
      {/* 精灵球外壳（overflow hidden） */}
      <div
        className={`relative w-full h-full rounded-full border-[3px] overflow-hidden transition-transform duration-200 group-hover:scale-110 active:scale-95 ${
          isCurrent
            ? 'border-[var(--s-deep)] shadow-[0_0_0_5px_color-mix(in_srgb,var(--s)_25%,transparent)] animate-pulse'
            : isRead
              ? 'border-[#2e7d32]'
              : 'border-[#9e9e9e]'
        }`}
      >
        <div
          className={`absolute top-0 left-0 right-0 h-[46%] ${
            isRead ? 'bg-[#4caf50]' : isCurrent ? 'bg-[var(--s)]' : 'bg-[#bdbdbd]'
          }`}
        />
        <div className="absolute top-[44%] left-0 right-0 h-[12%] bg-[#2a2a2a]" />
        <div
          className={`absolute bottom-0 left-0 right-0 h-[44%] ${
            isRead ? 'bg-[#c8e6c9]' : isCurrent ? 'bg-[#f8f8f8]' : 'bg-[#eeeeee]'
          }`}
        />
      </div>

      {/* 中心按钮（在 overflow:hidden 父级外层，绝对于 Link 容器） */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#2a2a2a] z-10 pointer-events-none"
        style={{
          width: NODE_R * 0.55,
          height: NODE_R * 0.55,
          background: '#ffffff',
        }}
      />

      {/* 状态图标 */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        {isRead ? (
          <span
            className="font-black text-white"
            style={{ fontSize: NODE_R * 0.7, textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
          >
            ✓
          </span>
        ) : isCurrent ? (
          <span
            className="font-black text-white"
            style={{ fontSize: NODE_R * 0.55, textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
          >
            ▶
          </span>
        ) : null}
      </div>

      {/* 标题标签 */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-[72px] pointer-events-none ${
          labelOnRight
            ? 'left-[calc(100%+8px)] text-left'
            : 'right-[calc(100%+8px)] text-right'
        }`}
      >
        <span
          className={`text-[11px] leading-tight block line-clamp-2 ${
            isRead
              ? 'font-semibold text-[var(--s)]'
              : isCurrent
                ? 'font-extrabold text-[var(--s-deep)]'
                : 'font-medium text-ink-faint'
          }`}
        >
          {topic.title}
        </span>
      </div>
    </Link>
  )
}
