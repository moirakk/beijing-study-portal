import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getSubjects } from '../lib/contentLoader'
import {
  ALL_GRADE_IDS,
  CN_NUMERALS,
  GRADE_TITLES,
  SUBJECT_EN,
  semesterFullLabel,
  subjectVars,
} from '../lib/constants'
import type { Grade, Subject, SubjectId } from '../types'

/** 当前学期：2-7 月 → 下学期(b)，8-1 月 → 上学期(a) */
function currentSemesterSuffix(): 'a' | 'b' {
  const month = new Date().getMonth() + 1
  return month >= 2 && month <= 7 ? 'b' : 'a'
}

export default function Dashboard() {
  const subjects = useMemo(
    () => getSubjects().filter((s) => s.id !== 'misc'),
    [],
  )

  // 默认选中第一个有内容的科目
  const defaultSubjectId =
    subjects.find((s) => s.grades.some((g) => g.chapters.length > 0))?.id ??
    subjects[0]?.id ??
    null
  const [activeSubjectId, setActiveSubjectId] = useState<string | null>(
    defaultSubjectId,
  )

  const activeSubject = subjects.find((s) => s.id === activeSubjectId) ?? null

  return (
    <div>
      {/* 顶部 */}
      <header className="border-b border-line pb-[30px] pt-8 md:pt-[56px]">
        <div className="text-[13px] font-bold tracking-[0.24em] text-gold">
          北京 · 初高中学习资料
        </div>
        <h1 className="mb-[0.2em] mt-[0.28em] font-serif text-[clamp(34px,7vw,54px)] font-bold leading-[1.15] tracking-[0.02em]">
          北京初高中<br />图文讲义
        </h1>
        <p className="mt-0 max-w-[44ch] text-[15px] text-ink-soft">
          把课本核心考点，配上精要的笔记、公式、例题和真题，方便看图记知识。
        </p>
      </header>

      {/* 学期快捷入口 */}
      <div className="mt-4 border-b border-line pb-4">
        <div className="mb-2 flex items-baseline gap-2">
          <span className="text-[12px] font-bold tracking-[0.18em] text-gold">
            按学期
          </span>
          <span className="text-[12px] text-ink-faint">
            选择学期，查看该学期全部科目目录
          </span>
        </div>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:flex-wrap md:overflow-visible">
          {ALL_GRADE_IDS.map((gradeId) => (
            <Link
              key={gradeId}
              to={`/semester/${gradeId}`}
              className="shrink-0 rounded-full border border-line bg-panel px-3.5 py-1 text-[12.5px] font-semibold text-ink-soft transition-colors hover:border-gold hover:bg-[var(--s-soft,#f2eadc)] hover:text-ink"
            >
              {GRADE_TITLES[gradeId]}
            </Link>
          ))}
        </div>
      </div>

      {/* 科目选择栏 */}
      <div className="mt-4 border-b border-line pb-4">
        <div className="mb-2 flex items-baseline gap-2">
          <span className="text-[12px] font-bold tracking-[0.18em] text-gold">
            按科目
          </span>
        </div>
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:flex-wrap md:overflow-visible">
          {subjects.map((subject) => {
            const active = subject.id === activeSubjectId
            return (
              <button
                key={subject.id}
                type="button"
                onClick={() => setActiveSubjectId(subject.id)}
                style={subjectVars(subject.id as SubjectId)}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-[13.5px] font-semibold transition-colors ${
                  active
                    ? 'border-transparent bg-[var(--s)] text-white dark:text-panel'
                    : 'border-line bg-panel text-ink-soft hover:border-[var(--s)] hover:bg-[var(--s-soft)] hover:text-[var(--s-deep)]'
                }`}
              >
                {subject.name}
              </button>
            )
          })}
        </div>
      </div>

      {/* 教材目录 */}
      {activeSubject ? (
        <SubjectToc
          key={activeSubject.id}
          subject={activeSubject}
          subjectIndex={subjects.findIndex((s) => s.id === activeSubject.id)}
        />
      ) : (
        <div className="mt-10 text-center text-[14px] text-ink-soft">暂无学科数据，请先添加内容。</div>
      )}
    </div>
  )
}

/** 选中科目的教材目录树：学期（可折叠）→ 章节 → 知识点 */
function SubjectToc({
  subject,
  subjectIndex,
}: {
  subject: Subject
  subjectIndex: number
}) {
  // 默认展开当前学期（每个年级的同学期）
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const suffix = currentSemesterSuffix()
    const init: Record<string, boolean> = {}
    for (const grade of subject.grades) {
      init[grade.id] = grade.id.endsWith(suffix)
    }
    return init
  })

  const toggle = (gradeId: string) =>
    setExpanded((prev) => ({ ...prev, [gradeId]: !prev[gradeId] }))

  return (
    <div style={subjectVars(subject.id as SubjectId)}>
      {/* 学科大标题（subject-head 风格）+ 渐变色条 */}
      <div className="subject-head mt-10">
        <span className="num">{CN_NUMERALS[subjectIndex] ?? '壹'}</span>
        <div>
          <h1 className="name">{subject.name}</h1>
          <div className="en">{SUBJECT_EN[subject.id as SubjectId]}</div>
        </div>
      </div>
      <div className="rule" />

      {/* 学期列表 */}
      <div className="mt-4">
        {subject.grades.map((grade) => (
          <SemesterSection
            key={grade.id}
            grade={grade}
            open={!!expanded[grade.id]}
            onToggle={() => toggle(grade.id)}
          />
        ))}
      </div>
    </div>
  )
}

/** 一个学期：可折叠标题（unit-title 风格）+ 章节卡片 */
function SemesterSection({
  grade,
  open,
  onToggle,
}: {
  grade: Grade
  open: boolean
  onToggle: () => void
}) {
  const gradeNum = grade.id.replace(/[ab]$/, '')
  const hasContent = grade.chapters.length > 0

  return (
    <section className="mt-6 first:mt-4">
      {/* 学期标题（可折叠） */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center gap-3 text-left"
      >
        <span className="unit-badge">{gradeNum}</span>
        <span className="font-sans text-[18px] font-extrabold tracking-normal text-ink">
          {semesterFullLabel(grade.id)}
        </span>
        {grade.textbook && hasContent && (
          <span className="hidden text-[12.5px] text-ink-soft sm:inline">
            {grade.textbook}
          </span>
        )}
        {!hasContent && (
          <span className="text-[12.5px] text-ink-faint">暂无内容</span>
        )}
        <span
          className={`ml-auto text-[13px] text-ink-faint transition-transform group-hover:text-[var(--s)] ${
            open ? 'rotate-90' : ''
          }`}
        >
          ▸
        </span>
      </button>

      {/* 章节列表 */}
      {open && (
        <div className="ml-0 mt-3 sm:ml-[42px]">
          {!hasContent ? (
            <div className="rounded-xl border border-dashed border-line px-4 py-3 text-[13.5px] text-ink-faint">
              暂无内容，敬请期待。
            </div>
          ) : (
            grade.chapters.map((chapter) => (
              <div key={chapter.id} className="card mt-3 first:mt-0">
                <h4 className="m-0 mb-1 flex items-center gap-2.5 font-sans text-[16px] font-extrabold tracking-normal text-ink">
                  <span className="tag">{chapter.title.match(/^第.+?章/)?.[0] ?? '章节'}</span>
                  {chapter.title.replace(/^第.+?章\s*/, '')}
                </h4>
                {chapter.topics.length === 0 ? (
                  <div className="pt-1 text-[13.5px] text-ink-faint">
                    本章内容整理中
                  </div>
                ) : (
                  <ul className="kv mt-1">
                    {chapter.topics.map((topic) => (
                      <li key={topic.id} className="!p-0">
                        <Link
                          to={`/topic/${topic.id}`}
                          className="group/t -mx-2 flex w-full items-baseline gap-3 rounded-md px-2 py-[7px] transition-colors hover:bg-[var(--s-soft)]"
                        >
                          <span className="flex-1 text-[14.5px] font-semibold text-[var(--s-deep)]">
                            {topic.title}
                          </span>
                          <span className="text-[13px] text-ink-faint transition-colors group-hover/t:text-[var(--s)]">
                            →
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          )}
        </div>
      )}
    </section>
  )
}
