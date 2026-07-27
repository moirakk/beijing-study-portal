import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { getSubject, getSubjects } from '../lib/contentLoader'
import { CN_NUMERALS, SUBJECT_EN, subjectVars } from '../lib/constants'
import type { SubjectId } from '../types'

/**
 * 学科详情页：subject-head（大宋体数字 + 学科名 + 英文 + 渐变色条）
 * + 学期切换 + 章节卡片（unit-badge 序号方块 + 知识点列表）。
 */
export default function SubjectDetail() {
  const { id } = useParams<{ id: string }>()
  const subject = id ? getSubject(id) : undefined

  const gradesWithContent = useMemo(
    () => subject?.grades.filter((g) => g.chapters.length > 0) ?? [],
    [subject],
  )
  const [activeGradeId, setActiveGradeId] = useState<string | null>(null)

  if (!subject) {
    return <div className="card text-ink-soft">未找到该学科。</div>
  }

  const subjectIndex = getSubjects().findIndex((s) => s.id === subject.id)
  const currentGradeId = activeGradeId ?? gradesWithContent[0]?.id ?? null
  const currentGrade = gradesWithContent.find((g) => g.id === currentGradeId) ?? null

  return (
    <div style={subjectVars(subject.id as SubjectId)}>
      <Breadcrumb items={[{ label: '首页', to: '/' }, { label: subject.name }]} />

      {/* subject-head：大号宋体数字 + 学科名 + 英文小字 + 渐变色条 */}
      <div className="subject-head mt-6">
        <span className="num">{CN_NUMERALS[subjectIndex] ?? '壹'}</span>
        <div>
          <h1 className="name">{subject.name}</h1>
          <div className="en">{SUBJECT_EN[subject.id as SubjectId]}</div>
        </div>
      </div>
      <div className="rule" />

      {gradesWithContent.length === 0 ? (
        <div className="card mt-8 text-ink-soft">
          该学科的知识树正在搭建中，敬请期待。
        </div>
      ) : (
        <>
          {/* 学期切换（胶囊） */}
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
                  className={`rounded-full border px-3.5 py-1 text-[13px] font-semibold transition-colors ${
                    active
                      ? 'border-transparent bg-[var(--s)] text-white'
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

          {/* 章节卡片列表 */}
          {currentGrade && (
            <div className="mt-6">
              {currentGrade.textbook && (
                <div className="mb-4 text-[13px] text-ink-soft">
                  {currentGrade.title} · {currentGrade.textbook}
                </div>
              )}
              {currentGrade.chapters.map((chapter, ci) => (
                <section key={chapter.id} className="mt-8 first:mt-2">
                  <div className="flex items-center gap-3 text-[19px] font-extrabold">
                    <span className="unit-badge">{ci + 1}</span>
                    <h2 className="m-0 font-sans text-[19px] tracking-normal">
                      {chapter.title}
                    </h2>
                  </div>
                  <p className="mb-1 ml-[42px] mt-0 text-[13px] text-ink-soft">
                    {chapter.topics.length > 0
                      ? `${chapter.topics.length} 个知识点`
                      : '本章内容整理中'}
                  </p>

                  {chapter.topics.map((topic) => (
                    <Link
                      key={topic.id}
                      to={`/topic/${topic.id}`}
                      className="card group my-3.5 block transition-colors hover:border-[var(--s)]"
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h4 className="m-0 font-sans text-[16.5px] font-extrabold tracking-normal">
                          {topic.title}
                        </h4>
                        <span className="tag">{topic.importance}</span>
                        <span
                          className="ml-auto text-xs text-[var(--s)]"
                          title={`难度 ${topic.difficulty}/5`}
                        >
                          {'★'.repeat(topic.difficulty)}
                          {'☆'.repeat(5 - topic.difficulty)}
                        </span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap items-center gap-1.5 text-xs text-ink-soft">
                        {topic.tags.map((t) => (
                          <span key={t} className="hl">{t.replace(/^#/, '')}</span>
                        ))}
                        {topic.materials.length > 0 && (
                          <span className="ml-auto">
                            {topic.materials.length} 类资料
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
