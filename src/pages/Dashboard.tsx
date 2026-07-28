import { useMemo, useState } from 'react'
import ChapterCard from '../components/ChapterCard'
import SemesterPillNav from '../components/SemesterPillNav'
import { getSubjects } from '../lib/contentLoader'
import {
  CN_NUMERALS,
  SUBJECT_EN,
  semesterFullLabel,
  subjectVars,
} from '../lib/constants'
import type { Grade, Subject, SubjectId } from '../types'

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
      <header className="border-b border-line pb-5 pt-4 md:pt-7">
        <div className="text-[13px] font-bold tracking-[0.24em] text-gold">
          北京 · 初高中学习资料
        </div>
        <h1 className="mb-[0.2em] mt-[0.24em] font-serif text-[clamp(30px,6vw,44px)] font-bold leading-[1.15] tracking-[0.02em]">
          北京初高中图文讲义
        </h1>
        <p className="mt-0 max-w-[52ch] text-[14.5px] text-ink-soft">
          把课本核心考点，配上精要的笔记、公式、例题和真题，方便看图记知识。
        </p>
      </header>

      {/* 学期快捷入口 */}
      <div className="mt-4 border-b border-line pb-4">
        <div className="mb-2.5 flex items-baseline gap-2">
          <span className="text-[12px] font-bold tracking-[0.18em] text-gold">
            按学期
          </span>
          <span className="text-[12px] text-ink-faint">
            选择学期，查看该学期全部科目目录
          </span>
        </div>
        <SemesterPillNav />
      </div>

      {/* 科目选择栏 */}
      <div className="mt-4 border-b border-line pb-4">
        <div className="mb-2.5 flex items-baseline gap-2">
          <span className="text-[12px] font-bold tracking-[0.18em] text-gold">
            按科目
          </span>
          <span className="text-[12px] text-ink-faint">
            选择科目，浏览各学期教材目录
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

/** 选中科目的教材目录树：学期（可折叠）→ 章节（可折叠）→ 知识点 */
function SubjectToc({
  subject,
  subjectIndex,
}: {
  subject: Subject
  subjectIndex: number
}) {
  // 默认只展开有内容的学期，空学期收起
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {}
    for (const grade of subject.grades) {
      init[grade.id] = grade.chapters.length > 0
    }
    return init
  })

  const toggle = (gradeId: string) =>
    setExpanded((prev) => ({ ...prev, [gradeId]: !prev[gradeId] }))

  return (
    <div style={subjectVars(subject.id as SubjectId)}>
      {/* 学科大标题（subject-head 风格）+ 渐变色条 */}
      <div className="subject-head mt-10">
        <span className="num">{CN_NUMERALS[subjectIndex] ?? '1'}</span>
        <div>
          <h2 className="name">{subject.name}</h2>
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
  const chapterCount = grade.chapters.length

  return (
    <section className="mt-2 first:mt-3">
      {/* 学期标题（整行可点击折叠） */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group -mx-2 flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-[var(--s-soft)]"
      >
        <span className={`unit-badge ${hasContent ? '' : 'opacity-40 saturate-0'}`}>
          {gradeNum}
        </span>
        <span
          className={`font-sans text-[16.5px] font-extrabold tracking-normal ${
            hasContent ? 'text-ink' : 'text-ink-faint'
          }`}
        >
          {semesterFullLabel(grade.id)}
        </span>
        {hasContent ? (
          <span className="text-[12px] tabular-nums text-ink-faint">
            {chapterCount} 章
            {grade.textbook && (
              <span className="hidden sm:inline"> · {grade.textbook}</span>
            )}
          </span>
        ) : (
          <span className="text-[12px] text-ink-faint">暂无内容</span>
        )}
        <span
          className={`ml-auto text-[11px] leading-none text-ink-faint transition-transform duration-200 group-hover:text-[var(--s)] ${
            open ? '' : '-rotate-90'
          }`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {/* 章节列表 */}
      {open && hasContent && (
        <div className="ml-0 mb-5 mt-1.5 sm:ml-[42px]">
          {grade.chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      )}
      {open && !hasContent && (
        <div className="mb-5 ml-0 mt-1.5 rounded-xl border border-dashed border-line px-4 py-3 text-[13.5px] text-ink-faint sm:ml-[42px]">
          本学期内容整理中，敬请期待。
        </div>
      )}
    </section>
  )
}
