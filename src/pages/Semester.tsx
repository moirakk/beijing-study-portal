import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getSubjects } from '../lib/contentLoader'
import {
  ALL_GRADE_IDS,
  CN_NUMERALS,
  GRADE_TITLES,
  SUBJECT_EN,
  semesterFullLabel,
  subjectVars,
} from '../lib/constants'
import type { Chapter, GradeId, Subject, SubjectId } from '../types'

/** 某学科在指定学期的目录数据 */
interface SubjectSemesterEntry {
  subject: Subject
  chapters: Chapter[]
  textbook?: string
}

/**
 * 学期专页：/semester/:id（如 /semester/7a）
 * 按学科分段展示该学期所有科目的章节与知识点目录，
 * 有内容的学科靠前，空学科排后面（各自保持语数英物化生政史地顺序）。
 */
export default function Semester() {
  const { id } = useParams<{ id: string }>()
  const gradeId = (id ?? '') as GradeId
  const valid = ALL_GRADE_IDS.includes(gradeId)

  const entries = useMemo<SubjectSemesterEntry[]>(() => {
    if (!valid) return []
    const list = getSubjects()
      .filter((s) => s.id !== 'misc')
      .map((subject) => {
        const grade = subject.grades.find((g) => g.id === gradeId)
        return {
          subject,
          chapters: grade?.chapters ?? [],
          textbook: grade?.textbook,
        }
      })
    return [
      ...list.filter((e) => e.chapters.length > 0),
      ...list.filter((e) => e.chapters.length === 0),
    ]
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
      {/* 学期大标题 + 金色渐变分隔线 */}
      <header className="pt-8 md:pt-[56px]">
        <div className="text-[13px] font-bold tracking-[0.24em] text-gold">
          北京 · 初高中学习资料 · 按学期
        </div>
        <h1 className="mb-0 mt-[0.28em] font-serif text-[clamp(34px,7vw,54px)] font-bold leading-[1.15] tracking-[0.02em]">
          {semesterFullLabel(gradeId)}
        </h1>
        <div
          className="mt-4 h-1 rounded-sm"
          style={{ background: 'linear-gradient(90deg, var(--gold), transparent)' }}
        />
        {/* 学期切换胶囊 */}
        <div className="mt-5 flex flex-wrap gap-2">
          {ALL_GRADE_IDS.map((g) => (
            <Link
              key={g}
              to={`/semester/${g}`}
              className={`rounded-full border px-3.5 py-1 text-[12.5px] font-semibold transition-colors ${
                g === gradeId
                  ? 'border-transparent bg-gold text-white dark:text-panel'
                  : 'border-line bg-panel text-ink-soft hover:border-gold hover:text-ink'
              }`}
            >
              {GRADE_TITLES[g]}
            </Link>
          ))}
        </div>
      </header>

      {/* 按学科分段 */}
      {entries.map((entry, i) => (
        <SubjectSection key={entry.subject.id} entry={entry} index={i} />
      ))}
    </div>
  )
}

/** 一个学科分段：subject-head 大标题 + 学科色渐变线 + 章节目录 */
function SubjectSection({
  entry,
  index,
}: {
  entry: SubjectSemesterEntry
  index: number
}) {
  const { subject, chapters, textbook } = entry
  const hasContent = chapters.length > 0

  return (
    <section
      className="mt-[58px] first-of-type:mt-10"
      style={subjectVars(subject.id as SubjectId)}
    >
      <div className="subject-head">
        <span className="num">{CN_NUMERALS[index] ?? '壹'}</span>
        <div>
          <h2 className="name">{subject.name}</h2>
          <div className="en">{SUBJECT_EN[subject.id as SubjectId]}</div>
        </div>
        {textbook && hasContent && (
          <span className="mb-1 ml-auto hidden text-[12.5px] text-ink-soft sm:inline">
            {textbook}
          </span>
        )}
      </div>
      <div className="rule" />

      {!hasContent ? (
        <div className="mt-4 rounded-xl border border-dashed border-line px-4 py-3 text-[13.5px] text-ink-faint">
          暂无内容，敬请期待。
        </div>
      ) : (
        <div className="mt-4">
          {chapters.map((chapter) => (
            <div key={chapter.id} className="card mt-3 first:mt-0">
              <h4 className="m-0 mb-1 flex items-center gap-2.5 font-sans text-[16px] font-extrabold tracking-normal text-ink">
                <span className="tag">
                  {chapter.title.match(/^第.+?[章单元]/)?.[0] ?? '章节'}
                </span>
                {chapter.title.replace(/^第.+?[章单元]\s*/, '')}
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
          ))}
        </div>
      )}
    </section>
  )
}
