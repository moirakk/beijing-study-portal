/**
 * useProgress：进度状态的 React hook 封装。
 * localStorage 单例 + 订阅广播，任意组件修改后全局同步刷新。
 */
import { useCallback, useSyncExternalStore } from 'react'
import type { MasteryStatus, MaterialType, ProgressState } from '../types'
import {
  importProgress,
  loadProgress,
  localDateStr,
  saveProgress,
} from './progressStore'
import { MASTERY_CYCLE } from './constants'

type Listener = () => void
const listeners = new Set<Listener>()
let snapshot: ProgressState = loadProgress()

function emit() {
  snapshot = loadProgress()
  listeners.forEach((l) => l())
}

function subscribe(listener: Listener): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot(): ProgressState {
  return snapshot
}

/** 订阅完整进度状态（自动响应任意变更） */
export function useProgress() {
  const state = useSyncExternalStore(subscribe, getSnapshot)

  const setMastery = useCallback((topicId: string, status: MasteryStatus) => {
    const s = loadProgress()
    if (status === 'unlearned') delete s.mastery[topicId]
    else s.mastery[topicId] = status
    saveProgress(s)
    emit()
  }, [])

  const cycleMastery = useCallback((topicId: string) => {
    const s = loadProgress()
    const cur = s.mastery[topicId] ?? 'unlearned'
    const next = MASTERY_CYCLE[(MASTERY_CYCLE.indexOf(cur) + 1) % MASTERY_CYCLE.length]
    if (next === 'unlearned') delete s.mastery[topicId]
    else s.mastery[topicId] = next
    saveProgress(s)
    emit()
  }, [])

  const toggleFavorite = useCallback((topicId: string) => {
    const s = loadProgress()
    const idx = s.favorites.indexOf(topicId)
    if (idx === -1) s.favorites.push(topicId)
    else s.favorites.splice(idx, 1)
    saveProgress(s)
    emit()
  }, [])

  const addRecent = useCallback((topicId: string, tab: MaterialType = 'note') => {
    const s = loadProgress()
    s.recent = [
      { topicId, tab, ts: Date.now() },
      ...s.recent.filter((r) => r.topicId !== topicId),
    ].slice(0, 10)
    const today = localDateStr()
    if (s.streak.lastDate !== today) {
      const yesterday = localDateStr(new Date(Date.now() - 86400_000))
      s.streak = {
        lastDate: today,
        days: s.streak.lastDate === yesterday ? s.streak.days + 1 : 1,
      }
    }
    saveProgress(s)
    emit()
  }, [])

  /** 从 JSON 字符串导入进度（覆盖现有数据），格式非法时抛出异常 */
  const importData = useCallback((json: string) => {
    importProgress(json)
    emit()
  }, [])

  return { state, setMastery, cycleMastery, toggleFavorite, addRecent, importData }
}

/** 便捷读取某知识点掌握状态 */
export function masteryOf(state: ProgressState, topicId: string): MasteryStatus {
  return state.mastery[topicId] ?? 'unlearned'
}
