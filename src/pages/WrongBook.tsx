/**
 * 错题本：自动收集答错题，按学科/年级筛选，可重做、可移除。
 */
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Mascot from '../components/Mascot'
import { findTopic } from '../lib/contentLoader'
import { useQuizProgress } from '../lib/useQuizProgress'
import { subjectVars } from '../lib/constants'
import type { SubjectId } from '../types'

export default function WrongBook() {
  const { wrong, removeWrong, clearWrong } = useQuizProgress()
  const [fSubject, setFSubject] = useState<string>('')

  const rows = useMemo(() => {
    return wrong
      .map((w) => ({ w, loc: findTopic(w.topicId) }))
      .filter((r) => r.loc != null)
      .filter((r) => !fSubject || r.loc!.subject.id === fSubject)
  }, [wrong, fSubject])

  const subjects = useMemo(() => {
    const set = new Set<string>()
    for (const r of wrong) {
      const loc = findTopic(r.topicId)
      if (loc) set.add(loc.subject.id)
    }
    return Array.from(set)
  }, [wrong])

  return (
    <div>
      <header className="border-b border-line pb-5 pt-4">
        <div className="flex items-center gap-3">
          <Mascot pokemon="pikachu" size={40} />
          <div>
            <div className="text-[13px] font-bold tracking-[0.24em] text-gold">错题本</div>
            <h1 className="mb-0 mt-1 font-serif text-[clamp(24px,5vw,32px)] font-bold">
              把错题收进图鉴
            </h1>
          </div>
        </div>
        <p className="mt-2 max-w-[52ch] text-[14px] text-ink-soft">
          答错的题会自动收进来，重做直到记住，就能点亮对应宝可梦。
        </p>
      </header>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <select
          value={fSubject}
          onChange={(e) => setFSubject(e.target.value)}
          className="rounded-full border border-line bg-panel px-3 py-1 text-[13px] text-ink-soft outline-none focus:border-gold"
          aria-label="按学科筛选"
        >
          <option value="">全部学科</option>
          {subjects.map((s) => (
            <option key={s} value={s}>
              {findTopic(wrong.find((w) => findTopic(w.topicId)?.subject.id === s)?.topicId ?? '')?.subject.name ?? s}
            </option>
          ))}
        </select>
        {wrong.length > 0 && (
          <button
            type="button"
            onClick={clearWrong}
            className="ml-auto rounded-full border border-line bg-panel px-3 py-1 text-[12.5px] font-semibold text-ink-soft transition-colors hover:border-red-400 hover:text-red-500"
          >
            清空错题
          </button>
        )}
      </div>

      {rows.length === 0 ? (
        <div className="card mt-6 py-10 text-center">
          <Mascot pokemon="pikachu" size={64} />
          <p className="mt-3 text-[14px] text-ink-soft">
            {wrong.length === 0 ? '还没有错题，继续保持！' : '该学科暂无错题'}
          </p>
        </div>
      ) : (
        <ul className="mt-5 space-y-3.5">
          {rows.map(({ w, loc }, i) => (
            <li key={`${w.topicId}-${w.questionId}`} style={subjectVars(loc!.subject.id as SubjectId)}>
              <Reveal delay={Math.min(i, 6) * 40}>
                <div className="card card-lift hover:border-[var(--s)]">
                  <div className="flex items-start gap-2.5">
                    <span className="tag shrink-0">{w.type === 'judge' ? '判断' : '单选'}</span>
                    <div className="min-w-0 flex-1">
                      <div className="font-serif text-[15px] font-bold text-[var(--s-deep)]">
                        {w.question}
                      </div>
                      {w.options && (
                        <div className="mt-2 space-y-1 text-[13.5px]">
                          {w.options.map((o, oi) => (
                            <div
                              key={oi}
                              className={`rounded px-2 py-1 ${
                                oi === (w.answer as number)
                                  ? 'bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                                  : oi === (w.selected as number)
                                    ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-200'
                                    : 'text-ink-soft'
                              }`}
                            >
                              {String.fromCharCode(65 + oi)}. {o}
                              {oi === (w.answer as number) && ' ✓'}
                              {oi === (w.selected as number) && oi !== (w.answer as number) && ' ✗'}
                            </div>
                          ))}
                        </div>
                      )}
                      {w.type === 'judge' && (
                        <div className="mt-2 text-[13.5px]">
                          <span className="text-red-500">你的答案：{w.selected ? '正确' : '错误'}</span>
                          <span className="mx-2 text-ink-faint">·</span>
                          <span className="text-green-600">正确答案：{w.answer ? '正确' : '错误'}</span>
                        </div>
                      )}
                      <div className="mt-2 rounded-lg border-l-2 border-[var(--s)] bg-[var(--s-soft)] px-3 py-2 text-[13px] text-[var(--s-deep)]">
                        {w.explain}
                      </div>
                      <div className="mt-2 flex items-center gap-3 text-[12.5px] text-ink-faint">
                        <Link to={`/topic/${w.topicId}`} className="font-semibold text-[var(--s)] hover:underline">
                          {loc!.subject.name} › {loc!.grade.title} › {loc!.chapter.title} › {loc!.topic.title}
                        </Link>
                        <button
                          type="button"
                          onClick={() => removeWrong(w.topicId, w.questionId)}
                          className="ml-auto text-ink-faint transition-colors hover:text-red-500"
                        >
                          移除
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
