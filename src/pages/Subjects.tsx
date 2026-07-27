import { Link } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import { ProgressBar } from '../components/ui'
import { getSubjects } from '../lib/contentLoader'
import { MASTERY_COLORS, SUBJECT_COLORS } from '../lib/constants'
import { countTopics, topicsOfSubject } from '../lib/stats'
import { useProgress } from '../lib/useProgress'

/** 学科导航页：9 个学科卡片网格，每卡片用学科主题色 */
export default function Subjects() {
  const { state } = useProgress()
  const subjects = getSubjects()

  return (
    <div>
      <Breadcrumb items={[{ label: '首页', to: '/' }, { label: '学科' }]} />

      <h1 className="mb-5 text-2xl font-bold md:text-3xl">全部学科</h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {subjects.map((subject) => {
          const color = SUBJECT_COLORS[subject.id]
          const stats = countTopics(topicsOfSubject(subject), state)
          const gradesWithContent = subject.grades.filter((g) => g.chapters.length > 0).length
          return (
            <Link
              key={subject.id}
              to={`/subject/${subject.id}`}
              className="card transition-shadow hover:shadow-lg"
              style={{ borderTopWidth: 4, borderTopColor: color }}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="text-3xl">{subject.icon}</div>
                  <h2 className="mt-2 text-xl font-bold" style={{ color }}>
                    {subject.name}
                  </h2>
                </div>
                <span
                  className="whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ color, backgroundColor: `${color}14` }}
                >
                  {stats.total > 0 ? `${stats.mastered} / ${stats.total} 已掌握` : '内容筹备中'}
                </span>
              </div>

              <div className="mt-4">
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
              </div>

              <div className="mt-3 text-xs text-ink-faint dark:text-neutral-500">
                {gradesWithContent > 0
                  ? `${gradesWithContent} 个学期已有内容`
                  : '知识树搭建中，敬请期待'}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
