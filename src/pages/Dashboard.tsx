import { Link } from 'react-router-dom'
import { getSubjects } from '../lib/contentLoader'
import { CN_NUMERALS, SUBJECT_EN, subjectVars } from '../lib/constants'
import type { SubjectId } from '../types'

/**
 * 首页 / 学科选择：讲义式 hero + 9 学科卡片网格。
 * 每张卡片：大号宋体数字（壹贰叁…）+ 学科名 + 英文小字 + 渐变色条。
 */
export default function Dashboard() {
  const subjects = getSubjects()

  return (
    <div>
      {/* hero（参考 .hero：kicker + 大宋体标题 + 副标题 + meta 胶囊） */}
      <header className="border-b border-line pb-8 pt-10 md:pt-14">
        <div className="text-[13px] font-bold tracking-[0.24em] text-gold">
          北京 · 初高中
        </div>
        <h1 className="mb-2 mt-3 font-serif text-[clamp(34px,7vw,54px)] font-bold leading-[1.15] tracking-wide">
          学科讲义
          <br />
          知识门户
        </h1>
        <p className="max-w-[44ch] text-[15px] text-ink-soft">
          九门学科的课本核心考点，配公式卡片、典型例题与真题解析，方便系统学习与查阅。
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          <span className="pill">初一 至 高三</span>
          <span className="pill">九门学科</span>
          <span className="pill">笔记 · 公式 · 例题 · 真题</span>
        </div>
      </header>

      {/* 学科卡片网格 */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subjects.map((subject, i) => {
          const hasContent = subject.grades.some((g) => g.chapters.length > 0)
          const topicCount = subject.grades.reduce(
            (acc, g) => acc + g.chapters.reduce((a, c) => a + c.topics.length, 0),
            0,
          )
          return (
            <Link
              key={subject.id}
              to={`/subject/${subject.id}`}
              className="card group block transition-colors hover:border-[var(--s)]"
              style={subjectVars(subject.id as SubjectId)}
            >
              <div className="flex items-end gap-3.5">
                <span className="font-serif text-[52px] font-bold leading-[0.8] text-[var(--s-deep)]">
                  {CN_NUMERALS[i]}
                </span>
                <div className="min-w-0">
                  <h2 className="truncate font-serif text-xl font-extrabold tracking-[0.04em] text-[var(--s-deep)]">
                    {subject.name}
                  </h2>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                    {SUBJECT_EN[subject.id as SubjectId]}
                  </div>
                </div>
              </div>
              <div className="rule mt-3" />
              <div className="mt-3 flex items-center justify-between text-xs text-ink-soft">
                <span>
                  {hasContent ? `${topicCount} 个知识点` : '内容筹备中'}
                </span>
                <span className="text-[var(--s)] opacity-0 transition-opacity group-hover:opacity-100">
                  进入 →
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
