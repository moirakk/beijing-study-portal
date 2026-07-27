import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { MasteryBadge, ProgressRing } from '../components/ui'
import { findTopic, getBreadcrumb } from '../lib/contentLoader'
import {
  ALL_GRADE_IDS,
  GRADE_TITLES,
  SUBJECT_COLORS,
  getCurrentSemester,
  setCurrentSemester,
} from '../lib/constants'
import { masteryRate, semesterSubjectStats } from '../lib/stats'
import { localDateStr } from '../lib/progressStore'
import { masteryOf, useProgress } from '../lib/useProgress'
import type { GradeId } from '../types'

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']

/** 首页 / 仪表盘：当前学期进度环、最近浏览、收藏、需复习提醒 */
export default function Dashboard() {
  const { state } = useProgress()
  const [semester, setSemester] = useState<GradeId>(getCurrentSemester)

  const today = new Date()
  const dateText = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日 星期${WEEKDAYS[today.getDay()]}`
  const streakDays =
    state.streak.lastDate === localDateStr(today) ||
    state.streak.lastDate === localDateStr(new Date(Date.now() - 86400_000))
      ? state.streak.days
      : 0

  const subjectStats = useMemo(
    () => semesterSubjectStats(semester, state),
    [semester, state],
  )

  const recentTopics = state.recent
    .slice(0, 5)
    .map((r) => ({ entry: r, loc: findTopic(r.topicId) }))
    .filter((x) => x.loc)

  const favoriteTopics = state.favorites
    .map((id) => findTopic(id))
    .filter((loc) => loc != null)

  const reviewTopics = Object.entries(state.mastery)
    .filter(([, status]) => status === 'review')
    .map(([id]) => findTopic(id))
    .filter((loc) => loc != null)

  const changeSemester = (id: GradeId) => {
    setSemester(id)
    setCurrentSemester(id)
  }

  return (
    <div className="space-y-6">
      <Breadcrumb items={[{ label: '首页' }]} />

      {/* 欢迎区 */}
      <section className="card flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs tracking-[0.2em] text-gold">今日学习</div>
          <h1 className="mt-1 text-2xl font-bold md:text-3xl">{dateText}</h1>
          <p className="mt-1 text-sm text-ink-soft dark:text-neutral-400">
            温故而知新，可以为师矣。
          </p>
        </div>
        <div className="flex items-center gap-3 rounded-card border border-gold-light bg-gold-light/20 px-5 py-3 dark:border-gold-dark dark:bg-gold-dark/15">
          <span className="text-3xl">🔥</span>
          <div>
            <div className="text-2xl font-bold text-gold-dark dark:text-gold-light">
              {streakDays}
              <span className="ml-1 text-sm font-normal">天</span>
            </div>
            <div className="text-xs text-ink-soft dark:text-neutral-400">连续学习</div>
          </div>
        </div>
      </section>

      {/* 当前学期进度概览 */}
      <section className="card">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold">
            学期进度 <span className="ml-1 text-sm font-normal text-ink-soft dark:text-neutral-400">已掌握 / 总知识点</span>
          </h2>
          <select
            value={semester}
            onChange={(e) => changeSemester(e.target.value as GradeId)}
            className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm outline-none focus:border-gold dark:border-neutral-600 dark:bg-neutral-900"
            aria-label="切换学期"
          >
            {ALL_GRADE_IDS.map((id) => (
              <option key={id} value={id}>{GRADE_TITLES[id]}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
          {subjectStats.map(({ subject, stats }) => {
            const rate = masteryRate(stats)
            return (
              <Link
                key={subject.id}
                to={`/subject/${subject.id}`}
                className="flex flex-col items-center gap-1.5 rounded-card p-2 transition-colors hover:bg-paper dark:hover:bg-neutral-700/50"
              >
                <ProgressRing ratio={rate} color={SUBJECT_COLORS[subject.id]} size={68} />
                <div className="text-sm font-medium">{subject.icon} {subject.name.split(' ')[0]}</div>
                <div className="text-xs text-ink-faint dark:text-neutral-500">
                  {stats.total > 0 ? `${stats.mastered}/${stats.total}` : '暂无内容'}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* 最近浏览 */}
        <section className="card">
          <h2 className="mb-3 text-lg font-bold">🕘 最近浏览</h2>
          {recentTopics.length === 0 ? (
            <p className="text-sm text-ink-faint dark:text-neutral-500">
              还没有浏览记录，去 <Link to="/subjects" className="text-gold-dark underline dark:text-gold-light">学科页</Link> 开始学习吧
            </p>
          ) : (
            <ul className="divide-y divide-line dark:divide-neutral-700">
              {recentTopics.map(({ entry, loc }) => (
                <li key={entry.topicId}>
                  <Link
                    to={`/topic/${entry.topicId}`}
                    className="block py-2.5 transition-colors hover:text-gold-dark dark:hover:text-gold-light"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-medium">{loc!.topic.title}</span>
                      <MasteryBadge status={masteryOf(state, entry.topicId)} />
                    </div>
                    <div className="mt-0.5 text-xs text-ink-faint dark:text-neutral-500">
                      {getBreadcrumb(entry.topicId).slice(0, 3).join(' › ')}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 收藏 */}
        <section className="card">
          <h2 className="mb-3 text-lg font-bold">⭐ 我的收藏</h2>
          {favoriteTopics.length === 0 ? (
            <p className="text-sm text-ink-faint dark:text-neutral-500">
              在知识点详情页点击星标即可收藏
            </p>
          ) : (
            <ul className="divide-y divide-line dark:divide-neutral-700">
              {favoriteTopics.map((loc) => (
                <li key={loc!.topic.id}>
                  <Link
                    to={`/topic/${loc!.topic.id}`}
                    className="block py-2.5 transition-colors hover:text-gold-dark dark:hover:text-gold-light"
                  >
                    <span className="text-sm font-medium">{loc!.topic.title}</span>
                    <div className="mt-0.5 text-xs text-ink-faint dark:text-neutral-500">
                      {loc!.subject.name} › {loc!.grade.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* 需复习提醒 */}
        <section className="card">
          <h2 className="mb-3 text-lg font-bold">🔔 需复习</h2>
          {reviewTopics.length === 0 ? (
            <p className="text-sm text-ink-faint dark:text-neutral-500">
              暂无需要复习的知识点
            </p>
          ) : (
            <ul className="divide-y divide-line dark:divide-neutral-700">
              {reviewTopics.map((loc) => (
                <li key={loc!.topic.id}>
                  <Link
                    to={`/topic/${loc!.topic.id}`}
                    className="flex items-center justify-between gap-2 py-2.5 transition-colors hover:text-gold-dark dark:hover:text-gold-light"
                  >
                    <span className="text-sm font-medium">{loc!.topic.title}</span>
                    <span className="text-xs" style={{ color: '#f97316' }}>待复习</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  )
}
