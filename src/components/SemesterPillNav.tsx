import { Link } from 'react-router-dom'
import { ALL_GRADE_IDS, GRADE_TITLES } from '../lib/constants'
import type { GradeId } from '../types'

const JUNIOR = ALL_GRADE_IDS.filter((g) => parseInt(g, 10) <= 9)
const SENIOR = ALL_GRADE_IDS.filter((g) => parseInt(g, 10) >= 10)

const GROUPS: { label: string; grades: GradeId[] }[] = [
  { label: '初中', grades: JUNIOR },
  { label: '高中', grades: SENIOR },
]

/**
 * 学期胶囊导航：初中/高中各一行，前置学段小标签。
 * current 传入当前学期 id 时高亮（金色实底）。
 */
export default function SemesterPillNav({ current }: { current?: GradeId }) {
  return (
    <div className="space-y-2">
      {GROUPS.map(({ label, grades }) => (
        <div key={label} className="flex items-center gap-2">
          <span className="w-8 shrink-0 text-[11.5px] font-bold tracking-[0.1em] text-ink-faint">
            {label}
          </span>
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 py-0.5">
            {grades.map((g) => (
              <Link
                key={g}
                to={`/semester/${g}`}
                aria-current={g === current ? 'page' : undefined}
                className={`shrink-0 rounded-full border px-4 py-1.5 text-[13.5px] font-semibold transition-colors ${
                  g === current
                    ? 'border-transparent bg-gold text-white dark:text-panel'
                    : 'border-line bg-panel text-ink-soft hover:border-gold hover:bg-[var(--s-soft,#f2eadc)] hover:text-ink'
                }`}
              >
                {GRADE_TITLES[g]}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
