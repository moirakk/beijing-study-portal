import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ChapterCard from '../components/ChapterCard'
import Reveal from '../components/Reveal'
import SemesterPillNav from '../components/SemesterPillNav'
import { countRealInGrade, getSubjects } from '../lib/contentLoader'
import {
  ALL_GRADE_IDS,
  CN_NUMERALS,
  SUBJECT_EN,
  isCurrentGrade,
  isJuniorGrade,
  semesterFullLabel,
  subjectVars,
} from '../lib/constants'
import type { Chapter, GradeId, Subject, SubjectId } from '../types'

/** 某学科在指定学期的目录数据 */
interface SubjectSemesterEntry {
  subject: Subject
  chapters: Chapter[]
  textbook?: string
  /** 真内容（非 draft）知识点数量 */
  realCount: number
}

/**
 * 学期专页：/semester/:id（如 /semester/7a）
 * 按学科分段展示该学期所有科目的章节与知识点目录（学科分段可折叠）。
 * 有内容的学科完整展示，暂无内容的学科集中收进底部一行胶囊，避免空段落刷屏。
 */
export default function Semester() {
  const { id } = useParams<{ id: string }>()
  const gradeId = (id ?? '') as GradeId
  const valid = ALL_GRADE_IDS.includes(gradeId)

  const { withContent, empty } = useMemo(() => {
    if (!valid)
      return { withContent: [] as SubjectSemesterEntry[], empty: [] as SubjectSemesterEntry[] }
    const list = getSubjects()
      .filter((s) => s.id !== 'misc')
      .map((subject) => {
        const grade = subject.grades.find((g) => g.id === gradeId)
        return {
          subject,
          chapters: grade?.chapters ?? [],
          textbook: grade?.textbook,
          realCount: grade ? countRealInGrade(grade) : 0,
        }
      })
    return {
      // 全 draft / 无章节的学科按"空学科"处理，收进底部胶囊
      withContent: list.filter((e) => e.realCount > 0),
      empty: list.filter((e) => e.realCount === 0),
    }
  }, [gradeId, valid])

  if (!valid) {
    return (
      <div className="py-20 text-center">
        <div className="text-[15px] text-ink-soft">未找到该学期。</div>
        <Link
          to="/"
          className="mt-4 inline-block rounded-full border border-line bg-panel px-4 py-1.5 text-[13.5px] font-semibold text-ink-soft transition-colors hover:border-gold hover:text-ink"
        >
          ← 返回首页
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Breadcrumb
        items={[
          { label: '首页', to: '/' },
          { label: semesterFullLabel(gradeId) },
        ]}
      />

      {/* 学期大标题 + 金色渐变分隔线 */}
      <header className="mt-6">
        <Reveal>
          <div className="text-[13px] font-bold tracking-[0.24em] text-gold">
            按学期 · 系统学习
          </div>
          <h1 className="mb-0 mt-[0.28em] font-serif text-[clamp(34px,7vw,54px)] font-bold leading-[1.15] tracking-[0.02em]">
            {semesterFullLabel(gradeId)}
          </h1>
          <div
            className="rule-grow mt-4 h-1 rounded-sm"
            style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
          />
        </Reveal>
        {/* 学期切换胶囊 */}
        <Reveal delay={140}>
          <div className="mt-5">
            <SemesterPillNav
              current={gradeId}
              scope={isCurrentGrade(gradeId) ? 'current' : isJuniorGrade(gradeId) ? 'junior' : 'all'}
            />
          </div>
        </Reveal>
        {withContent.length > 1 && (
          <Reveal delay={200}>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 sm:hidden">
              {withContent.map(({ subject }) => (
                <a
                  key={subject.id}
                  href={`#subject-${subject.id}`}
                  style={subjectVars(subject.id as SubjectId)}
                  className="shrink-0 rounded-full border border-line bg-panel px-3 py-1.5 text-[12.5px] font-semibold text-[var(--s-deep)]"
                >
                  {subject.name}
                </a>
              ))}
            </div>
          </Reveal>
        )}
      </header>

      {/* 有内容的学科分段（可折叠） */}
      {withContent.length === 0 ? (
        <div className="mt-12 rounded-xl border border-dashed border-line px-5 py-8 text-center text-[14px] text-ink-soft">
          本学期各科内容整理中，敬请期待。
        </div>
      ) : (
        withContent.map((entry, i) => (
          <Reveal
            key={entry.subject.id}
            delay={Math.min(i, 3) * 60}
            className={i === 0 ? 'mt-10' : 'mt-[52px]'}
          >
            <SubjectSection entry={entry} index={i} gradeId={gradeId} />
          </Reveal>
        ))
      )}

      {/* 暂无内容的学科：集中收纳，不占大版面 */}
      {empty.length > 0 && (
        <div className="mt-14 border-t border-line pt-5">
          <div className="mb-2.5 text-[12px] font-bold tracking-[0.18em] text-ink-faint">
            以下科目本学期内容整理中
          </div>
          <div className="flex flex-wrap gap-2">
            {empty.map(({ subject }) => (
              <span
                key={subject.id}
                className="rounded-full border border-dashed border-line px-3.5 py-1 text-[12.5px] text-ink-faint"
              >
                {subject.name}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

/** 一个学科分段：subject-head 大标题（整行可点击折叠）+ 学科色渐变线 + 章节目录 */
function SubjectSection({
  entry,
  index,
  gradeId,
}: {
  entry: SubjectSemesterEntry
  index: number
  gradeId: GradeId
}) {
  const { subject, chapters, textbook } = entry
  const [open, setOpen] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia('(max-width: 640px)').matches || index === 0
  })

  return (
    <section id={`subject-${subject.id}`} style={subjectVars(subject.id as SubjectId)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group block w-full text-left"
      >
        <div className="subject-head">
          <span className="num">{CN_NUMERALS[index] ?? '1'}</span>
          <div>
            <h2 className="name">{subject.name}</h2>
            <div className="en">{SUBJECT_EN[subject.id as SubjectId]}</div>
          </div>
          <span className="mb-1 ml-auto flex items-center gap-3">
            {textbook && (
              <span className="hidden text-[12.5px] text-ink-soft sm:inline">
                {textbook}
              </span>
            )}
            <span
              className={`text-[12px] leading-none text-ink-faint transition-transform duration-200 group-hover:text-[var(--s)] ${
                open ? '' : '-rotate-90'
              }`}
              aria-hidden
            >
              ▾
            </span>
          </span>
        </div>
        <div className="rule" />
      </button>

      {open && (
        <div className="fold-in">
          <div className="mt-4">
            {chapters.map((chapter) => (
              <ChapterCard key={chapter.id} chapter={chapter} />
            ))}
          </div>
          <div className="mt-3 text-right">
            <Link
              to={`/subject/${subject.id}?grade=${gradeId}`}
              className="text-[13px] font-semibold text-[var(--s-deep)] transition-opacity hover:opacity-75"
            >
              查看{subject.name}全部学期 →
            </Link>
          </div>
        </div>
      )}
    </section>
  )
}
