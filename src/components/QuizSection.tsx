/**
 * 知识点页内的题目分区：课前预习 + 课后检测。
 * 加载 quiz.json，逐题作答，记录进度到 localStorage。
 */
import { useEffect, useMemo, useState } from 'react'
import type { QuizQuestion, QuizSet } from '../types/quiz'
import { loadQuiz } from '../lib/contentLoader'
import { useQuizProgress } from '../lib/useQuizProgress'
import QuizPlayer from './QuizPlayer'
import QuizResult from './QuizResult'
import Mascot from './Mascot'

interface QuizSectionProps {
  contentPath: string
  topicId: string
  subjectId: string
}

type Mode = 'preview' | 'review'

export default function QuizSection({
  contentPath,
  topicId,
  subjectId,
}: QuizSectionProps) {
  const [quiz, setQuiz] = useState<QuizSet | null>(null)
  const [mode, setMode] = useState<Mode>('preview')
  const [current, setCurrent] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [submittedAnswer, setSubmittedAnswer] = useState<number | boolean>()
  const [correct, setCorrect] = useState(false)
  const [done, setDone] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [mascotState, setMascotState] = useState<'idle'|'happy'|'sad'|'switch'>('idle')
  const { recordAnswer, evolvePokemon } = useQuizProgress()

  useEffect(() => {
    let cancelled = false
    setQuiz(null)
    setCurrent(0)
    setSubmitted(false)
    setDone(false)
    setCorrectCount(0)
    loadQuiz(contentPath).then((q) => {
      if (!cancelled) setQuiz(q)
    })
    return () => {
      cancelled = true
    }
  }, [contentPath])

  const questions: QuizQuestion[] = useMemo(() => {
    if (!quiz) return []
    return mode === 'preview' ? quiz.preview : quiz.review
  }, [quiz, mode])

  const question = questions[current]

  const handleSubmit = (selected: number | boolean) => {
    if (!question) return false
    const isRight = selected === question.answer
    setSubmitted(true)
    setSubmittedAnswer(selected)
    setCorrect(isRight)
    if (isRight) setCorrectCount((c) => c + 1)
    setMascotState(isRight ? 'happy' : 'sad')
    setTimeout(() => setMascotState('idle'), 800)
    recordAnswer(
      {
        topicId,
        questionId: question.id,
        selected,
        correct: isRight,
        ts: Date.now(),
      },
      isRight
        ? undefined
        : {
            topicId,
            questionId: question.id,
            question: question.question,
            type: question.type,
            options: question.options,
            selected,
            answer: question.answer,
            explain: question.explain,
            ts: Date.now(),
          },
      subjectId,
    )
    return isRight
  }

  const next = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1)
      setSubmitted(false)
      setSubmittedAnswer(undefined)
    } else {
      setDone(true)
      if (correctCount === questions.length && questions.length > 0) {
        evolvePokemon(subjectId)
      }
    }
  }

  const retry = () => {
    setCurrent(0)
    setSubmitted(false)
    setSubmittedAnswer(undefined)
    setDone(false)
    setCorrectCount(0)
  }

  if (quiz === null) return null

  const hasQuestions = questions.length > 0

  return (
    <section className="card mt-4">
      <div className="mb-3 flex items-center gap-2.5">
        <Mascot subject={subjectId} size={30} state={mascotState} />
        <h2 className="m-0 font-sans text-[15px] font-extrabold tracking-normal text-[var(--s-deep)]">
          {mode === 'preview' ? '课前预习' : '课后检测'}
        </h2>
        <span className="tag">{mode === 'preview' ? '先看看要学什么' : '学完测一测'}</span>
        <div className="ml-auto flex gap-1.5">
          <button
            type="button"
            onClick={() => {
              setMode('preview')
              retry()
              setMascotState('switch')
              setTimeout(() => setMascotState('idle'), 400)
            }}
            className={`rounded-full px-3 py-1 text-[12.5px] font-semibold transition-colors ${
              mode === 'preview'
                ? 'bg-[var(--s)] text-white dark:text-panel'
                : 'border border-line bg-paper text-ink-soft hover:border-[var(--s)]'
            }`}
          >
            预习
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('review')
              retry()
              setMascotState('switch')
              setTimeout(() => setMascotState('idle'), 400)
            }}
            className={`rounded-full px-3 py-1 text-[12.5px] font-semibold transition-colors ${
              mode === 'review'
                ? 'bg-[var(--s)] text-white dark:text-panel'
                : 'border border-line bg-paper text-ink-soft hover:border-[var(--s)]'
            }`}
          >
            检测
          </button>
        </div>
      </div>

      {!hasQuestions ? (
        <div className="py-4 text-center text-[13.5px] text-ink-faint">
          本知识点暂无题目，敬请期待。
        </div>
      ) : done ? (
        <QuizResult
          total={questions.length}
          correct={correctCount}
          subjectId={subjectId}
          onRetry={retry}
        />
      ) : (
        <>
          {/* 进度条 */}
          <div className="mb-3 h-1.5 overflow-hidden rounded-full bg-[var(--s-soft)]">
            <div
              className="h-full rounded-full bg-[var(--s)] transition-all duration-300"
              style={{ width: `${((current + (submitted ? 1 : 0)) / questions.length) * 100}%` }}
            />
          </div>
          <QuizPlayer
            key={`${mode}-${current}`}
            question={question}
            index={current + 1}
            onSubmit={handleSubmit}
            submitted={submitted}
            submittedAnswer={submittedAnswer}
            correct={correct}
            subjectId={subjectId}
          />
          {submitted && (
            <button
              type="button"
              onClick={next}
              className="mt-3 rounded-full bg-[var(--s)] px-5 py-1.5 text-[13.5px] font-bold text-white transition-opacity hover:opacity-90 dark:text-panel"
            >
              {current + 1 < questions.length ? '下一题 →' : '查看结果'}
            </button>
          )}
        </>
      )}
    </section>
  )
}
