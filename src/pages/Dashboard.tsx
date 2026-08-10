import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import ChapterCard from '../components/ChapterCard'
import Reveal from '../components/Reveal'
import SemesterPillNav from '../components/SemesterPillNav'
import Mascot from '../components/Mascot'
import { countRealInGrade, getSubjects } from '../lib/contentLoader'
import { useQuizProgress } from '../lib/useQuizProgress'
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

  // 默认选中第一个有真内容的科目
  const defaultSubjectId =
    subjects.find((s) => s.grades.some((g) => countRealInGrade(g) > 0))?.id ??
    subjects[0]?.id ??
    null
  const [activeSubjectId, setActiveSubjectId] = useState<string | null>(
    defaultSubjectId,
  )

  const activeSubject = subjects.find((s) => s.id === activeSubjectId) ?? null
  const { answers, wrong, bookmarks, flashcards, pokedex } = useQuizProgress()

  const dueCards = flashcards.filter((f) => f.due <= Date.now()).length
  const caughtCount = pokedex.reduce((n, p) => n + p.caught, 0)

  return (
    <div>
      {/* 顶部（hero：眉题 / 标题 / 副文案 依次渐入） */}
      <header className="border-b border-line pb-5 pt-4 md:pt-7">
        <Reveal>
          <div className="text-[13px] font-bold tracking-[0.24em] text-gold">
            北京 · 初高中学习资料
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mb-[0.2em] mt-[0.24em] font-serif text-[clamp(30px,6vw,44px)] font-bold leading-[1.15] tracking-[0.02em]">
            北京初高中图文讲义
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-0 max-w-[52ch] text-[14.5px] text-ink-soft">
            把课本核心考点，配上精要的笔记、公式、例题和真题，方便看图记知识。
          </p>
        </Reveal>
      </header>

      {/* 我的学习概览（可爱化：皮卡丘向导 + 进度/错题/卡片/图鉴） */}
      <Reveal delay={120}>
        <div className="card card-lift mt-4 flex flex-wrap items-center gap-4">
          <Mascot pokemon="pikachu" size={52} />
          <div className="min-w-0 flex-1">
            <div className="text-[12px] font-bold tracking-[0.18em] text-gold">我的学习</div>
            <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-[13.5px] text-ink-soft">
              <span>已答 <b className="text-[var(--s-deep)]">{answers.length}</b> 题</span>
              <span>错题 <b className="text-red-500">{wrong.length}</b></span>
              <span>重点 <b className="text-[var(--s-deep)]">{bookmarks.length}</b></span>
              <span>待复习 <b className="text-[var(--s-deep)]">{dueCards}</b></span>
              <span>捕获 <b className="text-[var(--s-deep)]">{caughtCount}</b></span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              to="/wrongbook"
              className="rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:border-[var(--s)] hover:text-[var(--s-deep)]"
            >
              错题本
            </Link>
            <Link
              to="/flashcards"
              className="rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:border-[var(--s)] hover:text-[var(--s-deep)]"
            >
              记忆卡片
            </Link>
          </div>
        </div>
      </Reveal>

      {/* 学期快捷入口 */}
      <Reveal delay={120}>
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
      </Reveal>

      {/* 科目选择栏 */}
      <Reveal delay={200}>
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
                  className={`shrink-0 rounded-full border px-4 py-1.5 text-[13.5px] font-semibold transition-[color,background-color,border-color,transform] duration-200 active:scale-95 ${
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
      </Reveal>

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
  // 默认只展开有真内容的学期，空学期/全 draft 学期收起
  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const init: Record<string, boolean> = {}
    for (const grade of subject.grades) {
      init[grade.id] = countRealInGrade(grade) > 0
    }
    return init
  })

  const toggle = (gradeId: string) =>
    setExpanded((prev) => ({ ...prev, [gradeId]: !prev[gradeId] }))

  return (
    <div style={subjectVars(subject.id as SubjectId)}>
      {/* 学科大标题（subject-head 风格）+ 渐变色条 */}
      <Reveal>
        <div className="subject-head mt-10">
          <span className="num">{CN_NUMERALS[subjectIndex] ?? '1'}</span>
          <div>
            <h2 className="name">{subject.name}</h2>
            <div className="en">{SUBJECT_EN[subject.id as SubjectId]}</div>
          </div>
        </div>
        <div className="rule rule-grow" />
      </Reveal>

      {/* 学期列表 */}
      <div className="mt-4">
        {subject.grades.map((grade, i) => (
          <Reveal key={grade.id} delay={Math.min(i, 4) * 60} className="mt-2 first:mt-3">
            <SemesterSection
              grade={grade}
              open={!!expanded[grade.id]}
              onToggle={() => toggle(grade.id)}
            />
          </Reveal>
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
  const hasChapters = grade.chapters.length > 0
  const realCount = countRealInGrade(grade)
  const hasReal = realCount > 0
  const chapterCount = grade.chapters.length

  return (
    <section>
      {/* 学期标题（整行可点击折叠） */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="group -mx-2 flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left transition-colors hover:bg-[var(--s-soft)]"
      >
        <span className={`unit-badge ${hasReal ? '' : 'opacity-40 saturate-0'}`}>
          {gradeNum}
        </span>
        <span
          className={`font-sans text-[16.5px] font-extrabold tracking-normal ${
            hasReal ? 'text-ink' : 'text-ink-faint'
          }`}
        >
          {semesterFullLabel(grade.id)}
        </span>
        {hasReal ? (
          <span className="text-[12px] tabular-nums text-ink-faint">
            {chapterCount} 章 · {realCount} 篇
            {grade.textbook && (
              <span className="hidden sm:inline"> · {grade.textbook}</span>
            )}
          </span>
        ) : (
          <span className="text-[12px] text-ink-faint">
            {hasChapters ? '待补充' : '暂无内容'}
          </span>
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

      {/* 章节列表（有章节即可浏览，draft 行由 ChapterCard 弱化显示） */}
      {open && hasChapters && (
        <div className="fold-in ml-0 mb-5 mt-1.5 sm:ml-[42px]">
          {grade.chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      )}
      {open && !hasChapters && (
        <div className="mb-5 ml-0 mt-1.5 rounded-xl border border-dashed border-line px-4 py-3 text-[13.5px] text-ink-faint sm:ml-[42px]">
          本学期内容整理中，敬请期待。
        </div>
      )}
    </section>
  )
}
