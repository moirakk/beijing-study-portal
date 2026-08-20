import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SemesterPillNav from '../components/SemesterPillNav'
import Mascot from '../components/Mascot'
import { countRealInGrade, getSubjects, isDraftTopic } from '../lib/contentLoader'
import { useQuizProgress } from '../lib/useQuizProgress'
import { useReadingProgress } from '../lib/useReadingProgress'
import { CURRENT_GRADE_IDS, SUBJECT_EN, subjectVars } from '../lib/constants'
import type { Subject, SubjectId } from '../types'

export default function Dashboard() {
  const subjects = useMemo(
    () => getSubjects().filter((s) => s.id !== 'misc'),
    [],
  )

  const { answers, wrong, bookmarks, flashcards, pokedex } = useQuizProgress()
  const { lastRead, readTopics } = useReadingProgress()
  const readSet = useMemo(() => new Set(readTopics), [readTopics])

  const dueCards = flashcards.filter((f) => f.due <= Date.now()).length
  const caughtCount = pokedex.reduce((n, p) => n + p.caught, 0)

  return (
    <div>
      {/* 顶部 hero */}
      <header className="border-b border-line pb-5 pt-4 md:pt-7 relative">
        <div className="absolute right-4 top-4 hidden sm:flex items-start gap-3 z-10">
          <div className="rounded-2xl rounded-tr-none bg-[var(--s-soft,var(--paper))] border border-line px-4 py-2 text-[13.5px] shadow-sm relative mt-4">
            <span className="font-bold text-[var(--s-deep,var(--gold))]">Pika pika!</span>{' '}
            欢迎来到学习基地！
            <div className="absolute -right-[6px] top-3 w-3 h-3 bg-[var(--s-soft,var(--paper))] border-r border-t border-line rotate-45" />
          </div>
          <Mascot pokemon="pikachu" size={120} state="run-in" />
        </div>
        <Reveal>
          <div className="text-[13px] font-bold tracking-[0.24em] text-gold">
            图文讲义 · 随时随地学
          </div>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="mb-[0.2em] mt-[0.24em] font-serif text-[clamp(30px,6vw,44px)] font-bold leading-[1.15] tracking-[0.02em]">
            dby赶紧学习！
          </h1>
        </Reveal>
        <div className="flex sm:hidden items-center gap-2 mt-3">
          <Mascot pokemon="pikachu" size={36} state="idle" />
          <span className="text-[13px] font-semibold text-[var(--s-deep,var(--gold))]">
            Pika pika！加油哦！
          </span>
        </div>
      </header>

      {/* 继续学习（有阅读历史时显示） */}
      {lastRead && (
        <Reveal delay={60}>
          <Link
            to={`/topic/${lastRead.topicId}`}
            className="mt-4 flex items-center gap-3 rounded-2xl border border-gold bg-[#fdf7ec] dark:bg-[#2a2418] px-5 py-4 transition-all hover:shadow-md hover:border-[#d4a843] group"
          >
            <div className="shrink-0 text-2xl">📖</div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-bold tracking-[0.18em] text-gold mb-0.5">
                继续学习
              </div>
              <div className="text-[15px] font-extrabold text-ink truncate">
                {lastRead.title}
              </div>
              <div className="text-[12px] text-ink-faint mt-0.5">
                {lastRead.subjectName} · {lastRead.gradeTitle}
              </div>
            </div>
            <div className="shrink-0 text-gold text-lg transition-transform group-hover:translate-x-1">
              →
            </div>
          </Link>
        </Reveal>
      )}

      {/* 学习概览 */}
      <Reveal delay={120}>
        <div className="card card-lift mt-4 flex flex-wrap items-center gap-4">
          <Mascot pokemon="pikachu" size={52} state="idle" />
          <div className="min-w-0 flex-1">
            <div className="text-[12px] font-bold tracking-[0.18em] text-gold">我的学习</div>
            <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-[13.5px] text-ink-soft">
              <span>
                已读 <b className="text-[var(--s-deep,var(--gold))]">{readTopics.length}</b> 篇
              </span>
              <span>
                已答 <b className="text-[var(--s-deep,var(--gold))]">{answers.length}</b> 题
              </span>
              <span>
                错题 <b className="text-red-500">{wrong.length}</b>
              </span>
              <span>
                重点 <b className="text-[var(--s-deep,var(--gold))]">{bookmarks.length}</b>
              </span>
              <span>
                待复习 <b className="text-[var(--s-deep,var(--gold))]">{dueCards}</b>
              </span>
              <span>
                捕获 <b className="text-[var(--s-deep,var(--gold))]">{caughtCount}</b>
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              to="/wrongbook"
              className="rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:border-gold hover:text-ink"
            >
              错题本
            </Link>
            <Link
              to="/flashcards"
              className="rounded-full border border-line bg-paper px-4 py-1.5 text-[13px] font-semibold text-ink-soft transition-colors hover:border-gold hover:text-ink"
            >
              记忆卡片
            </Link>
          </div>
        </div>
      </Reveal>

      {/* 按学期 */}
      <Reveal delay={120}>
        <div className="mt-4 border-b border-line pb-4">
          <div className="mb-2.5 flex items-baseline gap-2">
            <span className="text-[12px] font-bold tracking-[0.18em] text-gold">当前学期</span>
          </div>
          <SemesterPillNav />
          <div className="mt-4">
            <div className="mb-2.5 flex items-baseline gap-2">
              <span className="text-[12px] font-bold tracking-[0.18em] text-gold">
                完整学期导航
              </span>
              <span className="text-[12px] text-ink-faint">
                后续内容可直接进入
              </span>
            </div>
            <SemesterPillNav scope="all" />
          </div>
        </div>
      </Reveal>

      {/* 学科卡片 */}
      <Reveal delay={200}>
        <div className="mt-5">
          <div className="mb-3 flex items-baseline gap-2">
            <span className="text-[12px] font-bold tracking-[0.18em] text-gold">按科目</span>
            <span className="text-[12px] text-ink-faint">默认统计当前年级学习进度</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {subjects.map((subject) => (
              <SubjectCard key={subject.id} subject={subject} readSet={readSet} />
            ))}
          </div>
        </div>
      </Reveal>

      {/* 底部鼓励 */}
      <div className="mt-12 mb-4 flex flex-col items-center gap-3 opacity-80">
        <Mascot pokemon="eevee" size={48} state="idle" />
        <p className="text-[13px] font-bold tracking-widest text-ink-faint">
          "就决定是你了！今天也要加油哦！"
        </p>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* 学科卡片：大图标 + 名称 + 进度条                                              */
/* -------------------------------------------------------------------------- */

function SubjectCard({
  subject,
  readSet,
}: {
  subject: Subject
  readSet: Set<string>
}) {
  const allRealTopicIds = useMemo(() => {
    const ids: string[] = []
    const currentGrades = subject.grades.filter((grade) => CURRENT_GRADE_IDS.includes(grade.id))
    for (const grade of currentGrades) {
      for (const chapter of grade.chapters) {
        for (const topic of chapter.topics) {
          if (!isDraftTopic(topic)) ids.push(topic.id)
        }
      }
    }
    return ids
  }, [subject])

  const total = allRealTopicIds.length
  const read = allRealTopicIds.filter((id) => readSet.has(id)).length
  const pct = total > 0 ? Math.round((read / total) * 100) : 0
  const gradeCount = subject.grades.filter((g) =>
    CURRENT_GRADE_IDS.includes(g.id) && countRealInGrade(g) > 0
  ).length

  return (
    <Link
      to={`/subject/${subject.id}`}
      style={subjectVars(subject.id as SubjectId)}
      className="card card-lift flex flex-col items-center gap-2 py-5 px-3 text-center hover:border-[var(--s)] transition-all"
    >
      <Mascot subject={subject.id} size={56} state="none" className="mascot-hover" />
      <div className="mt-1">
        <div className="font-extrabold text-[15px] text-[var(--s-deep)]">{subject.name}</div>
        <div className="text-[11px] text-ink-faint tracking-wider mt-0.5">
          {SUBJECT_EN[subject.id as SubjectId]}
        </div>
      </div>
      {total > 0 && (
        <div className="w-full mt-1">
          <div className="flex justify-between text-[10px] mb-1 text-ink-faint">
            <span>{gradeCount} 个当前学期</span>
            <span className="font-semibold text-[var(--s)]">{pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[var(--s-soft)] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${pct}%`,
                background: 'linear-gradient(90deg, var(--s), var(--s-deep))',
                transition: 'width 0.6s ease',
              }}
            />
          </div>
          <div className="text-[10px] text-ink-faint mt-1">
            {read}/{total} 篇已读
          </div>
        </div>
      )}
    </Link>
  )
}
