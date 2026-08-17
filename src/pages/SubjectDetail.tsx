import { useMemo } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import ChapterCard from '../components/ChapterCard'
import Reveal from '../components/Reveal'
import Mascot from '../components/Mascot'
import { getSubject, getSubjects } from '../lib/contentLoader'
import { CN_NUMERALS, SUBJECT_EN, subjectVars } from '../lib/constants'
import type { SubjectId } from '../types'

/**
 * 学科详情页：subject-head（大宋体数字 + 学科名 + 英文 + 渐变色条）
 * + 学期切换 + 可折叠章节卡片（与首页/学期页共用 ChapterCard 风格）。
 * 学期选中状态存于 ?grade= 查询参数，便于外部链接直达并保持返回定位。
 */
export default function SubjectDetail() {
  const { id } = useParams<{ id: string }>()
  const [params, setParams] = useSearchParams()
  const subject = id ? getSubject(id) : undefined

  const gradesWithContent = useMemo(
    () => subject?.grades.filter((g) => g.chapters.length > 0) ?? [],
    [subject],
  )
  const paramGradeId = params.get('grade')

  if (!subject) {
    return <div className="card text-ink-soft">未找到该学科。</div>
  }

  const subjectIndex = getSubjects().findIndex((s) => s.id === subject.id)
  const currentGradeId =
    (paramGradeId && gradesWithContent.some((g) => g.id === paramGradeId)
      ? paramGradeId
      : null) ??
    gradesWithContent[0]?.id ??
    null
  const currentGrade = gradesWithContent.find((g) => g.id === currentGradeId) ?? null
  const setActiveGradeId = (gradeId: string) =>
    setParams({ grade: gradeId }, { replace: true })

  return (
    <div style={subjectVars(subject.id as SubjectId)}>
      <Breadcrumb items={[{ label: '首页', to: '/' }, { label: subject.name }]} />

      {/* subject-head：大号宋体数字 + 学科名 + 英文小字 + 渐变色条 */}
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
              <div className="absolute -right-[5px] top-3 w-2 h-2 bg-[var(--s-soft)] border-r border-t border-line rotate-45"></div>
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
          {/* 学期切换（胶囊） */}
          <Reveal delay={120}>
            <div className="mt-7 flex flex-wrap gap-2">
              {subject.grades.map((grade) => {
                const hasContent = grade.chapters.length > 0
                const active = grade.id === currentGradeId
                return (
                  <button
                    key={grade.id}
                    type="button"
                    disabled={!hasContent}
                    onClick={() => setActiveGradeId(grade.id)}
                    className={`rounded-full border px-3.5 py-1 text-[13px] font-semibold transition-[color,background-color,border-color,transform] duration-200 active:scale-95 ${
                      active
                        ? 'border-transparent bg-[var(--s)] text-white dark:text-panel'
                        : hasContent
                          ? 'border-line bg-panel text-ink-soft hover:border-[var(--s)] hover:text-[var(--s-deep)]'
                          : 'cursor-not-allowed border-line bg-paper text-ink-faint'
                    }`}
                  >
                    {grade.title}
                  </button>
                )
              })}
            </div>
          </Reveal>

          {/* 章节卡片列表（与首页/学期页统一的可折叠 ChapterCard，含知识点元信息） */}
          {currentGrade && (
            <div className="mt-6">
              {currentGrade.textbook && (
                <div className="mb-4 text-[13px] text-ink-soft">
                  {currentGrade.title} · {currentGrade.textbook}
                </div>
              )}
              {currentGrade.chapters.map((chapter, i) => (
                <Reveal
                  key={`${currentGrade.id}-${chapter.id}`}
                  delay={Math.min(i, 4) * 50}
                  className="mt-3 first:mt-0"
                >
                  <ChapterCard chapter={chapter} showMeta />
                </Reveal>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
