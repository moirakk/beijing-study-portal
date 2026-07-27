import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { MasteryBadge, ProgressBar } from '../components/ui'
import { findTopic } from '../lib/contentLoader'
import {
  ALL_GRADE_IDS,
  GRADE_TITLES,
  MASTERY_COLORS,
  MASTERY_LABELS,
  SUBJECT_COLORS,
  getCurrentSemester,
  setCurrentSemester,
} from '../lib/constants'
import { exportProgress, localDateStr } from '../lib/progressStore'
import { semesterSubjectStats } from '../lib/stats'
import { masteryOf, useProgress } from '../lib/useProgress'
import type { GradeId, MasteryStatus } from '../types'

/** 状态分布饼图（SVG donut） */
function StatusPie({ counts }: { counts: Record<MasteryStatus, number> }) {
  const total = Object.values(counts).reduce((a, b) => a + b, 0)
  const order: MasteryStatus[] = ['mastered', 'learning', 'review', 'unlearned']
  const size = 160
  const r = 60
  const c = 2 * Math.PI * r
  let offset = 0

  return (
    <div className="flex flex-wrap items-center gap-6">
      <svg width={size} height={size} className="-rotate-90">
        {total === 0 ? (
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" strokeWidth={24} className="stroke-line dark:stroke-neutral-700" />
        ) : (
          order.map((status) => {
            const ratio = counts[status] / total
            const el = (
              <circle
                key={status}
                cx={size / 2} cy={size / 2} r={r}
                fill="none" strokeWidth={24}
                stroke={MASTERY_COLORS[status]}
                strokeDasharray={`${ratio * c} ${c}`}
                strokeDashoffset={-offset * c}
              />
            )
            offset += ratio
            return el
          })
        )}
      </svg>
      <ul className="space-y-2 text-sm">
        {order.map((status) => (
          <li key={status} className="flex items-center gap-2.5">
            <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: MASTERY_COLORS[status] }} />
            <span className="w-14">{MASTERY_LABELS[status]}</span>
            <span className="font-semibold">{counts[status]}</span>
            <span className="text-xs text-ink-faint dark:text-neutral-500">
              {total > 0 ? `${Math.round((counts[status] / total) * 100)}%` : '—'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function formatTime(ts: number): string {
  const d = new Date(ts)
  const today = new Date().toDateString()
  const time = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
  if (d.toDateString() === today) return `今天 ${time}`
  return `${d.getMonth() + 1}月${d.getDate()}日 ${time}`
}

/** 进度页：当前学期各学科进度条、状态分布饼图、学习时间线、收藏与复习汇总、数据备份 */
export default function Progress() {
  const { state, importData } = useProgress()
  const [semester, setSemester] = useState<GradeId>(getCurrentSemester)
  const fileRef = useRef<HTMLInputElement>(null)
  const [importMsg, setImportMsg] = useState<{ ok: boolean; text: string } | null>(null)

  /** 导出进度为 JSON 文件下载 */
  const handleExport = () => {
    const blob = new Blob([exportProgress()], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `学习进度备份-${localDateStr()}.json`
    a.click()
    URL.revokeObjectURL(url)
  }

  /** 从 JSON 文件导入进度（覆盖现有数据） */
  const handleImportFile = (file: File) => {
    const reader = new FileReader()
    reader.onload = () => {
      try {
        importData(String(reader.result))
        setImportMsg({ ok: true, text: '导入成功，进度已恢复' })
      } catch {
        setImportMsg({ ok: false, text: '导入失败：备份文件格式不正确' })
      }
    }
    reader.onerror = () => setImportMsg({ ok: false, text: '导入失败：无法读取文件' })
    reader.readAsText(file)
  }

  const subjectStats = useMemo(
    () => semesterSubjectStats(semester, state).filter(({ stats }) => stats.total > 0),
    [semester, state],
  )

  const pieCounts = useMemo(() => {
    const counts: Record<MasteryStatus, number> = { unlearned: 0, learning: 0, mastered: 0, review: 0 }
    for (const { stats } of subjectStats) {
      counts.unlearned += stats.unlearned
      counts.learning += stats.learning
      counts.mastered += stats.mastered
      counts.review += stats.review
    }
    return counts
  }, [subjectStats])

  const favoriteTopics = state.favorites.map((tid) => findTopic(tid)).filter((x) => x != null)
  const reviewTopics = Object.entries(state.mastery)
    .filter(([, s]) => s === 'review')
    .map(([tid]) => findTopic(tid))
    .filter((x) => x != null)

  const changeSemester = (id: GradeId) => {
    setSemester(id)
    setCurrentSemester(id)
  }

  return (
    <div className="space-y-6">
      <Breadcrumb items={[{ label: '首页', to: '/' }, { label: '学习进度' }]} />

      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold md:text-3xl">📊 学习进度</h1>
        <select
          value={semester}
          onChange={(e) => changeSemester(e.target.value as GradeId)}
          className="rounded-full border border-line bg-card px-3 py-1.5 text-sm outline-none focus:border-gold dark:border-neutral-600 dark:bg-neutral-800"
          aria-label="切换学期"
        >
          {ALL_GRADE_IDS.map((id) => (
            <option key={id} value={id}>{GRADE_TITLES[id]}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* 各学科掌握进度条 */}
        <section className="card">
          <h2 className="mb-4 text-lg font-bold">{GRADE_TITLES[semester]} · 各学科进度</h2>
          {subjectStats.length === 0 ? (
            <p className="text-sm text-ink-faint dark:text-neutral-500">该学期暂无知识点内容</p>
          ) : (
            <div className="space-y-4">
              {subjectStats.map(({ subject, stats }) => (
                <Link key={subject.id} to={`/subject/${subject.id}`} className="block">
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="font-medium" style={{ color: SUBJECT_COLORS[subject.id] }}>
                      {subject.icon} {subject.name}
                    </span>
                    <span className="text-xs text-ink-faint dark:text-neutral-500">
                      {stats.mastered}/{stats.total} 已掌握
                    </span>
                  </div>
                  <ProgressBar
                    segments={[
                      { ratio: stats.mastered / stats.total, color: MASTERY_COLORS.mastered },
                      { ratio: stats.learning / stats.total, color: MASTERY_COLORS.learning },
                      { ratio: stats.review / stats.total, color: MASTERY_COLORS.review },
                    ]}
                    height={10}
                  />
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* 状态分布饼图 */}
        <section className="card">
          <h2 className="mb-4 text-lg font-bold">{GRADE_TITLES[semester]} · 状态分布</h2>
          <StatusPie counts={pieCounts} />
        </section>
      </div>

      {/* 最近学习时间线 */}
      <section className="card">
        <h2 className="mb-4 text-lg font-bold">🕘 最近学习记录</h2>
        {state.recent.length === 0 ? (
          <p className="text-sm text-ink-faint dark:text-neutral-500">还没有学习记录</p>
        ) : (
          <ol className="relative ml-2 space-y-4 border-l-2 border-line pl-6 dark:border-neutral-700">
            {state.recent.map((entry) => {
              const loc = findTopic(entry.topicId)
              if (!loc) return null
              return (
                <li key={entry.topicId} className="relative">
                  <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold" />
                  <div className="flex flex-wrap items-center gap-2">
                    <Link
                      to={`/topic/${entry.topicId}`}
                      className="font-medium hover:text-gold-dark dark:hover:text-gold-light"
                    >
                      {loc.topic.title}
                    </Link>
                    <MasteryBadge status={masteryOf(state, entry.topicId)} />
                  </div>
                  <div className="mt-0.5 text-xs text-ink-faint dark:text-neutral-500">
                    {formatTime(entry.ts)} · {loc.subject.name} › {loc.grade.title}
                  </div>
                </li>
              )
            })}
          </ol>
        )}
      </section>

      <div className="grid gap-6 md:grid-cols-2">
        {/* 收藏汇总 */}
        <section className="card">
          <h2 className="mb-3 text-lg font-bold">⭐ 收藏汇总（{favoriteTopics.length}）</h2>
          {favoriteTopics.length === 0 ? (
            <p className="text-sm text-ink-faint dark:text-neutral-500">暂无收藏</p>
          ) : (
            <ul className="divide-y divide-line dark:divide-neutral-700">
              {favoriteTopics.map((loc) => (
                <li key={loc!.topic.id}>
                  <Link
                    to={`/topic/${loc!.topic.id}`}
                    className="block py-2.5 text-sm transition-colors hover:text-gold-dark dark:hover:text-gold-light"
                  >
                    <span className="font-medium">{loc!.topic.title}</span>
                    <span className="ml-2 text-xs text-ink-faint dark:text-neutral-500">
                      {loc!.subject.name} › {loc!.grade.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 需复习汇总 */}
        <section className="card">
          <h2 className="mb-3 text-lg font-bold">🔔 需复习汇总（{reviewTopics.length}）</h2>
          {reviewTopics.length === 0 ? (
            <p className="text-sm text-ink-faint dark:text-neutral-500">暂无需要复习的知识点</p>
          ) : (
            <ul className="divide-y divide-line dark:divide-neutral-700">
              {reviewTopics.map((loc) => (
                <li key={loc!.topic.id}>
                  <Link
                    to={`/topic/${loc!.topic.id}`}
                    className="block py-2.5 text-sm transition-colors hover:text-gold-dark dark:hover:text-gold-light"
                  >
                    <span className="font-medium">{loc!.topic.title}</span>
                    <span className="ml-2 text-xs text-ink-faint dark:text-neutral-500">
                      {loc!.subject.name} › {loc!.grade.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      {/* 数据备份 */}
      <section className="card">
        <h2 className="mb-2 text-lg font-bold">💾 数据备份</h2>
        <p className="mb-3 text-sm text-ink-soft dark:text-neutral-400">
          学习进度保存在本机浏览器中。建议定期导出备份，换设备或清理浏览器数据后可导入恢复。
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleExport}
            className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            导出数据
          </button>
          <button
            type="button"
            onClick={() => fileRef.current?.click()}
            className="rounded-full border border-gold px-5 py-2 text-sm font-semibold text-gold-dark transition-colors hover:bg-gold-light/20 dark:text-gold-light dark:hover:bg-gold-dark/20"
          >
            导入数据
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0]
              if (file) handleImportFile(file)
              e.target.value = ''
            }}
          />
          {importMsg && (
            <span className={`text-sm ${importMsg.ok ? 'text-mastery-mastered' : 'text-red-500'}`}>
              {importMsg.text}
            </span>
          )}
        </div>
      </section>
    </div>
  )
}
