/**
 * 单题作答组件：选择/判断 → 提交 → 即时对错反馈 + 解析 + 捕获/连击动效。
 * 受控：由父级传入题目与当前作答状态。
 */
import { useState } from 'react'
import type { QuizQuestion } from '../types/quiz'

interface QuizPlayerProps {
  question: QuizQuestion
  /** 题号（1-based，用于展示） */
  index: number
  /** 提交回调：返回是否答对 */
  onSubmit: (selected: number | boolean) => boolean
  /** 是否已提交（父级控制，用于重做/下一题） */
  submitted: boolean
  /** 已提交的答案 */
  submittedAnswer?: number | boolean
  /** 是否答对 */
  correct?: boolean
  /** 学科 id（用于吉祥物/捕获反馈） */
  subjectId?: string
}

export default function QuizPlayer({
  question,
  index,
  onSubmit,
  submitted,
  submittedAnswer,
  correct,
}: QuizPlayerProps) {
  const [selected, setSelected] = useState<number | boolean | null>(null)

  const isJudge = question.type === 'judge'
  const options = isJudge ? ['正确', '错误'] : (question.options ?? [])

  const handleSubmit = () => {
    if (selected === null || submitted) return
    onSubmit(selected)
  }

  const isCorrect = (optIdx: number | boolean) => {
    if (!submitted) return false
    if (isJudge) return optIdx === question.answer
    return optIdx === question.answer
  }

  const isWrongPick = (optIdx: number | boolean) => {
    if (!submitted) return false
    return optIdx === submittedAnswer && optIdx !== question.answer
  }

  return (
    <div className="rounded-xl border border-line bg-paper/60 p-4 md:p-5">
      <div className="mb-3 flex items-baseline gap-2">
        <span className="tag shrink-0">{index}</span>
        <span className="font-serif text-[15px] font-bold text-[var(--s-deep)]">
          {question.question}
        </span>
      </div>

      <div className="space-y-2">
        {options.map((opt, i) => {
          const optVal = isJudge ? i === 0 : i
          const right = submitted && isCorrect(optVal)
          const wrong = submitted && isWrongPick(optVal)
          return (
            <button
              key={i}
              type="button"
              disabled={submitted}
              onClick={() => setSelected(optVal)}
              className={`flex w-full items-center gap-2.5 rounded-lg border px-3.5 py-2.5 text-left text-[14px] transition-all ${
                submitted
                  ? right
                    ? 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                    : wrong
                      ? 'quiz-shake border-red-400 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-200'
                      : 'border-line bg-panel text-ink-soft opacity-60'
                  : selected === optVal
                    ? 'border-[var(--s)] bg-[var(--s-soft)] text-[var(--s-deep)]'
                    : 'border-line bg-panel text-ink-soft hover:border-[var(--s)] hover:bg-[var(--s-soft)]'
              }`}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-current text-[11px] font-bold">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {submitted && right && <span className="text-green-600">✓</span>}
              {submitted && wrong && <span className="text-red-500">✗</span>}
            </button>
          )
        })}
      </div>

      {!submitted && (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selected === null}
          className="mt-3 rounded-full bg-[var(--s)] px-5 py-1.5 text-[13.5px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 dark:text-panel"
        >
          提交
        </button>
      )}

      {submitted && (
        <div
          className={`fold-in mt-3 rounded-lg border-l-2 px-3.5 py-2.5 text-[13.5px] ${
            correct
              ? 'border-green-500 bg-green-50 text-green-800 dark:bg-green-900/30 dark:text-green-200'
              : 'border-red-400 bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-200'
          }`}
        >
          <div className="font-bold">
            {correct ? '答对啦！' : '答错了，看看解析'}
          </div>
          <div className="mt-1 leading-relaxed">{question.explain}</div>
        </div>
      )}
    </div>
  )
}
