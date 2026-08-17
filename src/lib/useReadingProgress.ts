/**
 * 阅读进度追踪：localStorage 记录已读知识点 + 最近阅读记录。
 * key 前缀 bsp-read-*，纯前端，刷新不丢失。
 */
import { useCallback, useEffect, useState } from 'react'

const READ_KEY = 'bsp-read-topics'
const LAST_READ_KEY = 'bsp-last-read'

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

export interface LastReadItem {
  topicId: string
  title: string
  subjectId: string
  subjectName: string
  gradeTitle: string
  ts: number
}

export function useReadingProgress() {
  const [readTopics, setReadTopics] = useState<string[]>(() =>
    load(READ_KEY, []),
  )
  const [lastRead, setLastRead] = useState<LastReadItem | null>(() =>
    load(LAST_READ_KEY, null),
  )

  useEffect(() => save(READ_KEY, readTopics), [readTopics])
  useEffect(() => save(LAST_READ_KEY, lastRead), [lastRead])

  const markRead = useCallback(
    (topicId: string, meta: Omit<LastReadItem, 'topicId' | 'ts'>) => {
      setReadTopics((prev) =>
        prev.includes(topicId) ? prev : [...prev, topicId],
      )
      setLastRead({ topicId, ...meta, ts: Date.now() })
    },
    [],
  )

  const isRead = useCallback(
    (topicId: string) => readTopics.includes(topicId),
    [readTopics],
  )

  const countRead = useCallback(
    (topicIds: string[]) =>
      topicIds.filter((id) => readTopics.includes(id)).length,
    [readTopics],
  )

  return { readTopics, lastRead, markRead, isRead, countRead }
}

/** 无 Hook 版本：直接从 localStorage 读取（用于非 React 上下文） */
export function getReadTopicsSync(): string[] {
  return load(READ_KEY, [])
}

export function getLastReadSync(): LastReadItem | null {
  return load(LAST_READ_KEY, null)
}
