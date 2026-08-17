/**
 * 记忆卡片：从已学知识点抽取题目/背记要点生成卡片，翻面复习。
 * 支持"记住了/再练"分级，简单间隔复习（localStorage）。
 */
import { useEffect, useMemo, useState } from 'react'
import Mascot from '../components/Mascot'
import { findTopic } from '../lib/contentLoader'
import { useQuizProgress } from '../lib/useQuizProgress'
import { subjectVars } from '../lib/constants'
import type { SubjectId } from '../types'

export default function Flashcards() {
  const { flashcards, updateFlashcard } = useQuizProgress()
  const [flipped, setFlipped] = useState(false)
  const [idx, setIdx] = useState(0)

  // 优先复习到期/再练的卡片
  const dueDeck = useMemo(() => {
    const now = Date.now()
    const due = flashcards.filter((f) => f.due <= now)
    if (due.length > 0) return due
    return flashcards
  }, [flashcards])

  const current = dueDeck[idx]

  useEffect(() => {
    setFlipped(false)
  }, [idx])

  const grade = (level: 0 | 1) => {
    if (!current) return
    updateFlashcard(current.topicId, current.front, current.back, level)
    setIdx((i) => (i + 1) % Math.max(dueDeck.length, 1))
  }

  return (
    <div>
      <header className="border-b border-line pb-5 pt-4">
        <div className="flex items-center gap-3">
          <Mascot pokemon="pikachu" size={40} />
          <div>
            <div className="text-[13px] font-bold tracking-[0.24em] text-gold">记忆卡片</div>
            <h1 className="mb-0 mt-1 font-serif text-[clamp(24px,5vw,32px)] font-bold">
              翻一翻，记一记
            </h1>
          </div>
        </div>
        <p className="mt-2 max-w-[52ch] text-[14px] text-ink-soft">
          从你学过的知识点生成卡片，翻面回忆，记住的会隔几天再出现。
        </p>
      </header>

      {dueDeck.length === 0 ? (
        <div className="card mt-6 py-10 text-center">
          <Mascot pokemon="pikachu" size={64} />
          <p className="mt-3 text-[14px] text-ink-soft">
            还没有可复习的卡片。先去知识点页做几道题吧！
          </p>
        </div>
      ) : (
        <div className="mx-auto mt-6 max-w-xl">
          <div className="mb-3 text-center text-[13px] text-ink-faint">
            卡片 {idx + 1} / {dueDeck.length}
          </div>
          <button
            type="button"
            onClick={() => setFlipped((f) => !f)}
            className="flashcard block w-full text-left"
            style={subjectVars((findTopic(current.topicId)?.subject.id ?? 'misc') as SubjectId)}
          >
            <div className={`flashcard-inner ${flipped ? 'is-flipped' : ''}`}>
              <div className="flashcard-face flashcard-front card">
                <div className="text-[12px] font-bold tracking-[0.18em] text-gold">正面 · 点击翻面查看答案</div>
                <div className="mt-3 font-serif text-[18px] font-bold leading-relaxed text-[var(--s-deep)]">
                  {current.front}
                </div>
                <div className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[var(--s-soft)] px-4 py-2 text-[13.5px] font-semibold text-[var(--s-deep)]">
                  <span>👆</span>
                  <span>点击卡片翻面</span>
                </div>
              </div>
              <div className="flashcard-face flashcard-back card">
                <div className="text-[12px] font-bold tracking-[0.18em] text-gold">背面 · 核对答案</div>
                <div className="mt-3 text-[16px] leading-relaxed text-ink">
                  {current.back}
                </div>
              </div>
            </div>
          </button>

          {flipped && (
            <div className="mt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => grade(0)}
                className="rounded-full border border-line bg-panel px-6 py-2.5 text-[14.5px] font-semibold text-ink-soft transition-colors hover:border-red-400 hover:text-red-500"
              >
                再练练 😅
              </button>
              <button
                type="button"
                onClick={() => grade(1)}
                className="rounded-full bg-[var(--s)] px-6 py-2.5 text-[14.5px] font-bold text-white transition-opacity hover:opacity-90 dark:text-panel"
              >
                记住了 ✓
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
