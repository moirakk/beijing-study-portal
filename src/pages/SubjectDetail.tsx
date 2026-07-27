import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { MasteryDot, ProgressBar } from '../components/ui'
import { getSubject } from '../lib/contentLoader'
import { MASTERY_COLORS, SUBJECT_COLORS } from '../lib/constants'
import { countTopics } from '../lib/stats'
import { masteryOf, useProgress } from '../lib/useProgress'
import type { SubjectId } from '../types'

/** 学科详情页：按学期分栏，展示章节列表 + 知识点数量与完成度 */
export default function SubjectDetail() {
  const { id } = useParams<{ id: string }>()
  const subject = id ? getSubject(id) : undefined
  const { state } = useProgress()

  const gradesWithContent = useMemo(
    () => subject?.grades.filter((g) => g.chapters.length > 0) ?? [],
    [subject],
  )
  const [activeGradeId, setActiveGradeId] = useState<string | null>(null)

  if (!subject) {
    return <div className="card">未找到该学科。</div>
  }

  const color = SUBJECT_COLORS[subject.id as SubjectId]
  const currentGradeId = activeGradeId ?? gradesWithContent[0]?.id ?? null
  const currentGrade = gradesWithContent.find((g) => g.id === currentGradeId) ?? null

  return (
    <div>
      <Breadcrumb items={[{ label: '首页', to: '/' }, { label: '学科', to: '/subjects' }, { label: subject.name }]} />

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold md:text-3xl" style={{ color }}>
          {subject.icon} {subject.name}
        </h1>
        <Link
          to={`/subject/${subject.id}/tree`}
          className="rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: color }}
        >
          🌳 查看知识树
        </Link>
      </div>

      {gradesWithContent.length === 0 ? (
        <div className="card text-ink-soft dark:text-neutral-400">
          该学科的知识树正在搭建中，敬请期待。
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-[200px_1fr]">
          {/* 左侧学期分栏 */}
          <aside className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
            {subject.grades.map((grade) => {
              const hasContent = grade.chapters.length > 0
              const active = grade.id === currentGradeId
              const stats = countTopics(grade.chapters.flatMap((c) => c.topics), state)
              return (
                <button
                  key={grade.id}
                  type="button"
                  disabled={!hasContent}
                  onClick={() => setActiveGradeId(grade.id)}
                  className={`flex shrink-0 items-center justify-between gap-2 rounded-card border px-4 py-2.5 text-left text-sm transition-colors md:w-full ${
                    active
                      ? 'border-transparent font-semibold text-white'
                      : hasContent
                        ? 'border-line bg-card hover:border-gold dark:border-neutral-700 dark:bg-neutral-800'
                        : 'cursor-not-allowed border-line bg-paper text-ink-faint dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-600'
                  }`}
                  style={active ? { backgroundColor: color } : undefined}
                >
                  <span>{grade.title}</span>
                  {hasContent && (
                    <span className={`text-xs ${active ? 'text-white/80' : 'text-ink-faint dark:text-neutral-500'}`}>
                      {stats.mastered}/{stats.total}
                    </span>
                  )}
                </button>
              )
            })}
          </aside>

          {/* 右侧章节列表 */}
          <div className="space-y-4">
            {currentGrade && (
              <>
                <div className="text-sm text-ink-soft dark:text-neutral-400">
                  {currentGrade.title}
                  {currentGrade.textbook && <span className="ml-2 tag">{currentGrade.textbook}</span>}
                </div>
                {currentGrade.chapters.map((chapter) => {
                  const stats = countTopics(chapter.topics, state)
                  return (
                    <section key={chapter.id} className="card">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-lg font-bold">{chapter.title}</h2>
                        <span className="text-xs text-ink-faint dark:text-neutral-500">
                          {stats.mastered}/{stats.total} 已掌握
                        </span>
                      </div>
                      <ProgressBar
                        segments={
                          stats.total > 0
                            ? [
                                { ratio: stats.mastered / stats.total, color: MASTERY_COLORS.mastered },
                                { ratio: stats.learning / stats.total, color: MASTERY_COLORS.learning },
                                { ratio: stats.review / stats.total, color: MASTERY_COLORS.review },
                              ]
                            : []
                        }
                      />
                      <ul className="mt-3 divide-y divide-line dark:divide-neutral-700">
                        {chapter.topics.length === 0 ? (
                          <li className="py-3 text-sm text-ink-faint dark:text-neutral-500">
                            📭 本章暂无内容，等待填充
                          </li>
                        ) : (
                          chapter.topics.map((topic) => (
                          <li key={topic.id}>
                            <Link
                              to={`/topic/${topic.id}`}
                              className="flex items-center gap-3 py-2.5 transition-colors hover:text-gold-dark dark:hover:text-gold-light"
                            >
                              <MasteryDot status={masteryOf(state, topic.id)} />
                              <span className="flex-1 text-[15px]">{topic.title}</span>
                              {topic.materials.length > 0 && (
                                <span className="hidden text-xs text-ink-faint sm:inline dark:text-neutral-500">
                                  {topic.materials.length} 类资料
                                </span>
                              )}
                              <span className="text-xs text-gold" title={`难度 ${topic.difficulty}/5`}>
                                {'★'.repeat(topic.difficulty)}
                              </span>
                            </Link>
                          </li>
                          ))
                        )}
                      </ul>
                    </section>
                  )
                })}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
