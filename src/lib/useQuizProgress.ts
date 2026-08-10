/**
 * 答题进度 / 记背辅助的 localStorage 统一管理。
 * key 前缀 bsp-quiz-*，与现有 bsp-theme 一致。
 * 纯前端、无后端，刷新不丢失。
 */
import { useCallback, useEffect, useState } from 'react'
import type {
  FlashcardItem,
  PokedexEntry,
  QuizAnswerRecord,
  WrongItem,
} from '../types/quiz'

const KEYS = {
  answers: 'bsp-quiz-answers',
  wrong: 'bsp-quiz-wrong',
  bookmarks: 'bsp-quiz-bookmarks',
  flashcards: 'bsp-quiz-flashcards',
  pokedex: 'bsp-quiz-pokedex',
} as const

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function save<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* 忽略配额/隐私模式错误 */
  }
}

/** 学科 id → 宝可梦 key（与 mascots 对应） */
export const SUBJECT_POKEMON: Record<string, string> = {
  chinese: 'eevee',
  math: 'pikachu',
  english: 'vaporeon',
  physics: 'pikachu',
  chemistry: 'charmander',
  biology: 'bulbasaur',
  politics: 'espeon',
  history: 'umbreon',
  geography: 'squirtle',
  misc: 'pikachu',
}

export interface QuizProgress {
  answers: QuizAnswerRecord[]
  wrong: WrongItem[]
  bookmarks: string[]
  flashcards: FlashcardItem[]
  pokedex: PokedexEntry[]
}

export function useQuizProgress() {
  const [answers, setAnswers] = useState<QuizAnswerRecord[]>(() =>
    load(KEYS.answers, []),
  )
  const [wrong, setWrong] = useState<WrongItem[]>(() => load(KEYS.wrong, []))
  const [bookmarks, setBookmarks] = useState<string[]>(() =>
    load(KEYS.bookmarks, []),
  )
  const [flashcards, setFlashcards] = useState<FlashcardItem[]>(() =>
    load(KEYS.flashcards, []),
  )
  const [pokedex, setPokedex] = useState<PokedexEntry[]>(() =>
    load(KEYS.pokedex, []),
  )

  useEffect(() => save(KEYS.answers, answers), [answers])
  useEffect(() => save(KEYS.wrong, wrong), [wrong])
  useEffect(() => save(KEYS.bookmarks, bookmarks), [bookmarks])
  useEffect(() => save(KEYS.flashcards, flashcards), [flashcards])
  useEffect(() => save(KEYS.pokedex, pokedex), [pokedex])

  /** 记录一次作答；答错自动进错题本；答对累计捕获 */
  const recordAnswer = useCallback(
    (rec: QuizAnswerRecord, wrongItem?: WrongItem, subjectId?: string) => {
      setAnswers((prev) => [...prev, rec])
      if (wrongItem) {
        setWrong((prev) => [
          wrongItem,
          ...prev.filter(
            (w) => !(w.topicId === wrongItem.topicId && w.questionId === wrongItem.questionId),
          ),
        ])
      }
      if (rec.correct && subjectId) {
        const key = SUBJECT_POKEMON[subjectId] ?? 'pikachu'
        setPokedex((prev) => {
          const found = prev.find((p) => p.key === key)
          if (found) {
            return prev.map((p) =>
              p.key === key ? { ...p, caught: p.caught + 1 } : p,
            )
          }
          return [...prev, { key, caught: 1, evolved: false }]
        })
      }
    },
    [],
  )

  /** 移除错题 */
  const removeWrong = useCallback((topicId: string, questionId: string) => {
    setWrong((prev) =>
      prev.filter((w) => !(w.topicId === topicId && w.questionId === questionId)),
    )
  }, [])

  /** 清空错题本 */
  const clearWrong = useCallback(() => setWrong([]), [])

  /** 标记/取消重点 */
  const toggleBookmark = useCallback((topicId: string) => {
    setBookmarks((prev) =>
      prev.includes(topicId)
        ? prev.filter((t) => t !== topicId)
        : [...prev, topicId],
    )
  }, [])

  /** 记忆卡片：更新掌握度（记住了/再练） */
  const updateFlashcard = useCallback(
    (topicId: string, front: string, back: string, level: 0 | 1) => {
      setFlashcards((prev) => {
        const idx = prev.findIndex((f) => f.topicId === topicId && f.front === front)
        const now = Date.now()
        const item: FlashcardItem = {
          topicId,
          front,
          back,
          level,
          due: now + (level === 1 ? 3 * 24 * 3600 * 1000 : 6 * 3600 * 1000),
          reps: (idx >= 0 ? prev[idx].reps : 0) + 1,
        }
        if (idx >= 0) {
          const next = [...prev]
          next[idx] = item
          return next
        }
        return [...prev, item]
      })
    },
    [],
  )

  /** 触发进化（满分成就） */
  const evolvePokemon = useCallback((subjectId: string) => {
    const key = SUBJECT_POKEMON[subjectId] ?? 'pikachu'
    setPokedex((prev) => {
      const found = prev.find((p) => p.key === key)
      if (found) {
        return prev.map((p) => (p.key === key ? { ...p, evolved: true } : p))
      }
      return [...prev, { key, caught: 0, evolved: true }]
    })
  }, [])

  return {
    answers,
    wrong,
    bookmarks,
    flashcards,
    pokedex,
    recordAnswer,
    removeWrong,
    clearWrong,
    toggleBookmark,
    updateFlashcard,
    evolvePokemon,
  }
}
