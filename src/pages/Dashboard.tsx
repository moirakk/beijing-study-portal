import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getSubjects } from '../lib/contentLoader'
import { subjectVars } from '../lib/constants'
import type { SubjectId } from '../types'

const GRADE_FILTERS = [
  { label: '全部', val: 'all' },
  { label: '初一', val: '7' },
  { label: '初二', val: '8' },
  { label: '初三', val: '9' },
  { label: '高一', val: '10' },
  { label: '高二', val: '11' },
  { label: '高三', val: '12' },
]

const SEMESTER_FILTERS = [
  { label: '全部', val: 'all' },
  { label: '上学期', val: 'a' },
  { label: '下学期', val: 'b' },
]

export default function Dashboard() {
  const subjects = getSubjects()
  const [gradeFilter, setGradeFilter] = useState('all')
  
  const currentMonth = new Date().getMonth() + 1
  const defaultSemester = (currentMonth >= 2 && currentMonth <= 7) ? 'b' : 'a'
  const [semesterFilter, setSemesterFilter] = useState(defaultSemester)
  
  const [subjectFilter, setSubjectFilter] = useState('all')

  const subjectFilters = [
    { label: '全部', val: 'all' },
    ...subjects.filter((s) => s.id !== 'misc').map((s) => ({ label: s.name, val: s.id }))
  ]

  // collect all chapters
  const allChapters: Array<{
    subject: any
    grade: any
    gradePrefix: string
    chapter: any
    topicCount: number
  }> = []

  for (const subject of subjects) {
    if (subject.id === 'misc') continue
    for (const grade of subject.grades) {
      const gradePrefix = grade.id.replace(/[ab]/, '')
      for (const chapter of grade.chapters) {
        allChapters.push({
          subject,
          grade,
          gradePrefix,
          chapter,
          topicCount: chapter.topics.length
        })
      }
    }
  }

  const filteredChapters = allChapters.filter((item) => {
    if (gradeFilter !== 'all' && item.gradePrefix !== gradeFilter) return false
    if (subjectFilter !== 'all' && item.subject.id !== subjectFilter) return false
    if (semesterFilter !== 'all') {
      const semesterSuffix = item.grade.id.slice(-1)
      if (semesterSuffix !== semesterFilter) return false
    }
    return true
  })

  return (
    <div>
      {/* 顶部 */}
      <header className="border-b border-line pb-8 pt-10 md:pt-14">
        <div className="text-[13px] font-bold tracking-[0.24em] text-gold">
          北京 · 初高中
        </div>
        <h1 className="mb-2 mt-3 font-serif text-[clamp(34px,7vw,54px)] font-bold leading-[1.15] tracking-wide">
          北京初高中学习资料
        </h1>
        <p className="max-w-[44ch] text-[15px] text-ink-soft">
          把课本核心考点，配公式卡片、典型例题与真题解析，方便系统学习与查阅。
        </p>
      </header>

      {/* 分类标签区 */}
      <div className="mt-8 space-y-4 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-10 text-[14px] font-bold text-ink-soft">年级</span>
          {GRADE_FILTERS.map((f) => {
            const active = gradeFilter === f.val
            return (
              <button
                key={f.val}
                onClick={() => setGradeFilter(f.val)}
                className={`rounded-full border px-3.5 py-1 text-[13px] font-semibold transition-colors ${
                  active
                    ? 'border-transparent bg-gold text-white'
                    : 'border-transparent bg-paper text-ink-soft hover:border-line hover:bg-panel hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-10 text-[14px] font-bold text-ink-soft">学期</span>
          {SEMESTER_FILTERS.map((f) => {
            const active = semesterFilter === f.val
            return (
              <button
                key={f.val}
                onClick={() => setSemesterFilter(f.val)}
                className={`rounded-full border px-3.5 py-1 text-[13px] font-semibold transition-colors ${
                  active
                    ? 'border-transparent bg-gold text-white'
                    : 'border-transparent bg-paper text-ink-soft hover:border-line hover:bg-panel hover:text-ink'
                }`}
              >
                {f.label}
              </button>
            )
          })}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="w-10 text-[14px] font-bold text-ink-soft">科目</span>
          {subjectFilters.map((f) => {
            const active = subjectFilter === f.val
            const isAll = f.val === 'all'
            const style = !isAll ? subjectVars(f.val as SubjectId) : undefined

            let btnClass = 'border-transparent bg-paper text-ink-soft hover:border-line hover:bg-panel hover:text-ink'
            if (active) {
              btnClass = isAll
                ? 'border-transparent bg-gold text-white'
                : 'border-transparent bg-[var(--sj)] text-white'
            }

            return (
              <button
                key={f.val}
                onClick={() => setSubjectFilter(f.val)}
                style={style}
                className={`rounded-full border px-3.5 py-1 text-[13px] font-semibold transition-colors ${btnClass}`}
              >
                {f.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* 内容区 */}
      <div className="mt-8">
        {filteredChapters.length === 0 ? (
          <div className="card py-10 text-center text-ink-soft">暂无内容</div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredChapters.map((item, i) => (
              <Link
                key={`${item.subject.id}-${item.grade.id}-${item.chapter.id}-${i}`}
                to={`/subject/${item.subject.id}`}
                className="card group block transition-colors hover:border-[var(--s)]"
                style={subjectVars(item.subject.id as SubjectId)}
              >
                <div className="mb-2 flex items-center gap-2.5">
                  <span className="tag rounded bg-[var(--s-soft)] px-2 py-0.5 text-[11px] font-bold tracking-[0.03em] text-[var(--s-deep)]">
                    {item.subject.name}
                  </span>
                  <span className="text-[12px] text-ink-soft">{item.grade.title}</span>
                </div>
                <h3 className="mb-2 mt-1 font-sans text-[16.5px] font-extrabold tracking-normal text-ink">
                  {item.chapter.title}
                </h3>
                <div className="mt-3 flex items-center justify-between border-t border-dashed border-line pt-3 text-[12px] text-ink-soft">
                  <span>
                    {item.topicCount > 0 ? `${item.topicCount} 个知识点` : '内容筹备中'}
                  </span>
                  <span className="font-bold text-[var(--s)] opacity-0 transition-opacity group-hover:opacity-100">
                    进入 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
