/**
 * 一套题完成后的成绩卡：得分、错题数、重做、进化动画。
 * 满分触发该学科代表宝可梦"进化"动画。
 */
import Mascot from './Mascot'

interface QuizResultProps {
  total: number
  correct: number
  subjectId?: string
  onRetry: () => void
}

export default function QuizResult({
  total,
  correct,
  subjectId,
  onRetry,
}: QuizResultProps) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0
  const perfect = total > 0 && correct === total

  return (
    <div className="quiz-pop rounded-xl border border-line bg-panel p-5 text-center">
      <div className="flex items-center justify-center gap-3">
        <Mascot subject={subjectId} size={56} evolved={perfect} state={perfect ? "happy" : "idle"} />
        <div className="text-left">
          <div className="font-serif text-[18px] font-bold text-[var(--s-deep)]">
            本次结果
          </div>
          <div className="mt-1 text-[14.5px] text-ink-soft">
            答对 {correct} / {total} 题（{pct}%）
          </div>
        </div>
      </div>

      {perfect && (
        <div className="quiz-confetti mt-3 text-[13px] text-[var(--s-deep)]">
          满分
        </div>
      )}

      <button
        type="button"
        onClick={onRetry}
        className="mt-4 rounded-full border border-line bg-paper px-6 py-2.5 text-[14.5px] font-semibold text-ink-soft transition-colors hover:border-[var(--s)] hover:text-[var(--s-deep)]"
      >
        再练一次
      </button>
    </div>
  )
}
