import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { MasteryDot } from '../components/ui'
import { getSubject } from '../lib/contentLoader'
import { SUBJECT_COLORS } from '../lib/constants'
import { masteryOf, useProgress } from '../lib/useProgress'
import type { SubjectId, Topic } from '../types'

/** 知识树页：可折叠树状结构（学期 → 章节 → 知识点），支持"只看未掌握"筛选 */
export default function KnowledgeTree() {
  const { id } = useParams<{ id: string }>()
  const subject = id ? getSubject(id) : undefined
  const { state } = useProgress()
  const [onlyUnmastered, setOnlyUnmastered] = useState(false)
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set())

  const gradesWithContent = useMemo(
    () => subject?.grades.filter((g) => g.chapters.length > 0) ?? [],
    [subject],
  )

  if (!subject) {
    return <div className="card">未找到该学科。</div>
  }

  const color = SUBJECT_COLORS[subject.id as SubjectId]

  const toggle = (key: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }

  const visibleTopics = (topics: Topic[]) =>
    onlyUnmastered
      ? topics.filter((t) => masteryOf(state, t.id) !== 'mastered')
      : topics

  return (
    <div>
      <Breadcrumb
        items={[
          { label: '首页', to: '/' },
          { label: '学科', to: '/subjects' },
          { label: subject.name, to: `/subject/${subject.id}` },
          { label: '知识树' },
        ]}
      />

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold md:text-3xl" style={{ color }}>
          🌳 {subject.name} · 知识树
        </h1>
        <label className="flex cursor-pointer items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm dark:border-neutral-700 dark:bg-neutral-800">
          <input
            type="checkbox"
            checked={onlyUnmastered}
            onChange={(e) => setOnlyUnmastered(e.target.checked)}
            className="h-4 w-4 accent-gold"
          />
          只看未掌握
        </label>
      </div>

      {gradesWithContent.length === 0 ? (
        <div className="card text-ink-soft dark:text-neutral-400">
          该学科的知识树正在搭建中，敬请期待。
        </div>
      ) : (
        <div className="space-y-4">
          {gradesWithContent.map((grade) => {
            const gradeKey = `g:${grade.id}`
            const gradeCollapsed = collapsed.has(gradeKey)
            return (
              <section key={grade.id} className="card p-0">
                <button
                  type="button"
                  onClick={() => toggle(gradeKey)}
                  className="flex w-full items-center gap-3 px-5 py-4 text-left"
                >
                  <span
                    className={`text-xs transition-transform ${gradeCollapsed ? '' : 'rotate-90'}`}
                    style={{ color }}
                  >
                    ▶
                  </span>
                  <h2 className="text-lg font-bold" style={{ color }}>
                    {grade.title}
                  </h2>
                  <span className="text-xs text-ink-faint dark:text-neutral-500">
                    {grade.chapters.length} 章
                  </span>
                </button>

                {!gradeCollapsed && (
                  <div className="space-y-1 px-5 pb-4">
                    {grade.chapters.map((chapter) => {
                      const chKey = `c:${chapter.id}`
                      const chCollapsed = collapsed.has(chKey)
                      const topics = visibleTopics(chapter.topics)
                      if (onlyUnmastered && topics.length === 0) return null
                      return (
                        <div key={chapter.id} className="ml-2 border-l-2 border-line pl-4 dark:border-neutral-700">
                          <button
                            type="button"
                            onClick={() => toggle(chKey)}
                            className="flex w-full items-center gap-2.5 py-2 text-left"
                          >
                            <span className={`text-[10px] text-ink-faint transition-transform dark:text-neutral-500 ${chCollapsed ? '' : 'rotate-90'}`}>
                              ▶
                            </span>
                            <span className="font-semibold">{chapter.title}</span>
                            <span className="text-xs text-ink-faint dark:text-neutral-500">
                              {topics.length} 个知识点
                            </span>
                          </button>

                          {!chCollapsed && (
                            <ul className="ml-1 space-y-0.5 border-l border-dashed border-line pb-1 pl-5 dark:border-neutral-700">
                              {topics.length === 0 ? (
                                <li className="px-2 py-2 text-sm text-ink-faint dark:text-neutral-500">
                                  📭 本章暂无内容，等待填充
                                </li>
                              ) : (
                                topics.map((topic) => (
                                <li key={topic.id}>
                                  <Link
                                    to={`/topic/${topic.id}`}
                                    className="flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-paper dark:hover:bg-neutral-700/50"
                                  >
                                    <MasteryDot status={masteryOf(state, topic.id)} />
                                    <span className="flex-1 text-[15px]">{topic.title}</span>
                                    {topic.materials.length > 0 && (
                                      <span className="hidden text-xs text-gold-dark sm:inline dark:text-gold-light">
                                        📚
                                      </span>
                                    )}
                                    <span className="text-xs text-gold">
                                      {'★'.repeat(topic.difficulty)}
                                    </span>
                                  </Link>
                                </li>
                                ))
                              )}
                            </ul>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </section>
            )
          })}
        </div>
      )}

      {/* 图例 */}
      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-ink-soft dark:text-neutral-400">
        <span className="flex items-center gap-1.5"><MasteryDot status="unlearned" size={8} /> 未学</span>
        <span className="flex items-center gap-1.5"><MasteryDot status="learning" size={8} /> 学习中</span>
        <span className="flex items-center gap-1.5"><MasteryDot status="mastered" size={8} /> 已掌握</span>
        <span className="flex items-center gap-1.5"><MasteryDot status="review" size={8} /> 需复习</span>
      </div>
    </div>
  )
}
