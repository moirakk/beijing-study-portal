import { useEffect, useMemo, useState } from 'react'
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
  const [selectedSubjectId, setSelectedSubjectId] = useState<SubjectId | null>(null)

  useEffect(() => {
    setSelectedSubjectId(null)
  }, [gradeId])

  const selectedEntry =
    withContent.find((entry) => entry.subject.id === selectedSubjectId) ?? null

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
      </header>

      {withContent.length === 0 ? (
        <div className="mt-12 rounded-xl border border-dashed border-line px-5 py-8 text-center text-[14px] text-ink-soft">
          暂无内容
        </div>
      ) : (
        <Reveal delay={200}>
          <section className="mt-8">
            <div className="mb-3 text-[12px] font-bold tracking-[0.18em] text-gold">
              选择科目
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {withContent.map((entry, index) => (
                <SubjectPicker
                  key={entry.subject.id}
                  entry={entry}
                  index={index}
                  active={entry.subject.id === selectedSubjectId}
                  onSelect={() => setSelectedSubjectId(entry.subject.id as SubjectId)}
                />
              ))}
            </div>
          </section>

          {selectedEntry ? (
            <SubjectChapters entry={selectedEntry} gradeId={gradeId} />
          ) : (
            <div className="mt-5 rounded-lg border border-dashed border-line bg-panel/55 px-5 py-8 text-center text-[14px] text-ink-faint">
              先选择一个科目
            </div>
          )}
        </Reveal>
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

function SubjectPicker({
  entry,
  index,
  active,
  onSelect,
}: {
  entry: SubjectSemesterEntry
  index: number
  active: boolean
  onSelect: () => void
}) {
  const { subject, chapters, textbook } = entry

  return (
    <button
      type="button"
      onClick={onSelect}
      style={subjectVars(subject.id as SubjectId)}
      className={`group rounded-lg border bg-panel px-4 py-4 text-left transition-all hover:border-[var(--s)] hover:bg-[var(--s-soft)] ${
        active ? 'border-[var(--s)] shadow-sm ring-1 ring-[var(--s)]' : 'border-line'
      }`}
      aria-pressed={active}
    >
      <div className="flex items-start gap-3">
        <span className="font-serif text-[32px] leading-none text-[var(--s-deep)]">
          {CN_NUMERALS[index] ?? '1'}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[16px] font-extrabold text-[var(--s-deep)]">
            {subject.name}
          </span>
          {textbook && (
            <span className="mt-1 block truncate text-[12px] text-ink-faint">
              {textbook}
            </span>
          )}
          <span className="mt-2 block text-[12px] text-ink-faint">
            {chapters.length} 章 · {entry.realCount} 个知识点
          </span>
        </span>
        <span
          className={`mt-1 text-[12px] text-ink-faint transition-transform ${
            active ? 'rotate-90 text-[var(--s)]' : ''
          }`}
          aria-hidden
        >
          →
        </span>
      </div>
    </button>
  )
}

function SubjectChapters({
  entry,
  gradeId,
}: {
  entry: SubjectSemesterEntry
  gradeId: GradeId
}) {
  const { subject, chapters } = entry

  return (
    <section className="mt-5" style={subjectVars(subject.id as SubjectId)}>
      <div>
        <div className="flex items-end gap-3">
          <div>
            <h2 className="m-0 font-serif text-[clamp(26px,5vw,38px)] font-bold leading-tight text-[var(--s-deep)]">
              {subject.name}
            </h2>
            <div className="mt-1 text-[12px] font-bold tracking-[0.24em] text-ink-faint">
              {SUBJECT_EN[subject.id as SubjectId]}
            </div>
          </div>
        </div>
        <div className="rule" />
      </div>

      <div className="fold-in">
        <div className="mt-4">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} defaultOpen={false} />
          ))}
        </div>
        <div className="mt-3 text-right">
          <Link
            to={`/subject/${subject.id}?grade=${gradeId}`}
            className="text-[13px] font-semibold text-[var(--s-deep)] transition-opacity hover:opacity-75"
          >
            查看全部学期 →
          </Link>
        </div>
      </div>
    </section>
  )
}
