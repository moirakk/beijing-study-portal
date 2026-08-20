import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import {
  ALL_GRADE_IDS,
  CURRENT_GRADE_IDS,
  GRADE_TITLES,
  semesterFullLabel,
} from '../lib/constants'
import type { GradeId } from '../types'

export default function SemesterOverview() {
  const groups: { label: string; grades: GradeId[] }[] = [
    { label: '初中', grades: ALL_GRADE_IDS.filter((g) => parseInt(g, 10) <= 9) },
    { label: '高中', grades: ALL_GRADE_IDS.filter((g) => parseInt(g, 10) >= 10) },
  ]

  return (
    <div>
      <header className="border-b border-line pb-4 pt-2">
        <Reveal delay={60}>
          <div className="text-[12px] font-bold tracking-[0.18em] text-gold">
            学期导航
          </div>
          <h1 className="mt-2 font-serif text-[clamp(26px,5vw,38px)] font-bold leading-tight">
            所有学期
          </h1>
        </Reveal>
      </header>

      <div className="mt-5 space-y-4">
        {groups.map((group, index) => (
          <Reveal key={group.label} delay={100 + index * 60}>
            <section className="rounded-lg border border-line bg-panel/75 p-4">
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <h2 className="text-[15px] font-extrabold text-ink">
                  {group.label}
                </h2>
                {group.label === '初中' && (
                  <span className="text-[11px] font-semibold text-ink-faint">
                    当前优先
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {group.grades.map((grade) => {
                  const current = CURRENT_GRADE_IDS.includes(grade)
                  return (
                    <Link
                      key={grade}
                      to={`/semester/${grade}`}
                      className={`rounded-lg border px-4 py-3 transition-colors ${
                        current
                          ? 'border-gold bg-[#fdf7ec] text-gold dark:bg-[#2a2418]'
                          : 'border-line bg-paper text-ink-soft hover:border-gold hover:text-ink'
                      }`}
                    >
                      <div className="text-[15px] font-extrabold">
                        {GRADE_TITLES[grade]}
                      </div>
                      <div className="mt-0.5 text-[11px] text-ink-faint">
                        {semesterFullLabel(grade)}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
