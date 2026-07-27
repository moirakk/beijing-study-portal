/**
 * 学习进度存储层：localStorage 单 key 封装。
 * 提供 读 / 写 / 导出 / 导入，以及常用的细粒度操作方法。
 */
import type {
  MasteryStatus,
  MaterialType,
  ProgressState,
  RecentEntry,
} from '../types'

const STORAGE_KEY = 'bsp-progress-v1'
const MAX_RECENT = 10

/** 本地时区日期字符串 YYYY-MM-DD（不能用 toISOString，那是 UTC 日期） */
export function localDateStr(d: Date = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function defaultState(): ProgressState {
  return {
    mastery: {},
    favorites: [],
    recent: [],
    streak: { lastDate: '', days: 0 },
  }
}

/** 读取完整进度状态（数据损坏时回退到默认值） */
export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState()
    const parsed = JSON.parse(raw) as Partial<ProgressState>
    return {
      mastery: parsed.mastery ?? {},
      favorites: parsed.favorites ?? [],
      recent: parsed.recent ?? [],
      streak: parsed.streak ?? { lastDate: '', days: 0 },
    }
  } catch {
    return defaultState()
  }
}

/** 写入完整进度状态 */
export function saveProgress(state: ProgressState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

// ---------------------------------------------------------------------------
// 细粒度操作
// ---------------------------------------------------------------------------

export function getMastery(topicId: string): MasteryStatus {
  return loadProgress().mastery[topicId] ?? 'unlearned'
}

export function setMastery(topicId: string, status: MasteryStatus): void {
  const state = loadProgress()
  if (status === 'unlearned') {
    delete state.mastery[topicId]
  } else {
    state.mastery[topicId] = status
  }
  saveProgress(state)
}

export function isFavorite(topicId: string): boolean {
  return loadProgress().favorites.includes(topicId)
}

export function toggleFavorite(topicId: string): boolean {
  const state = loadProgress()
  const idx = state.favorites.indexOf(topicId)
  const nowFavorite = idx === -1
  if (nowFavorite) {
    state.favorites.push(topicId)
  } else {
    state.favorites.splice(idx, 1)
  }
  saveProgress(state)
  return nowFavorite
}

/** 记录一次浏览（去重置顶，最多保留 MAX_RECENT 条），同时更新连续学习天数 */
export function addRecent(topicId: string, tab: MaterialType): void {
  const state = loadProgress()
  const entry: RecentEntry = { topicId, tab, ts: Date.now() }
  state.recent = [
    entry,
    ...state.recent.filter((r) => r.topicId !== topicId),
  ].slice(0, MAX_RECENT)
  touchStreak(state)
  saveProgress(state)
}

export function getRecent(): RecentEntry[] {
  return loadProgress().recent
}

/** 更新连续学习天数（今天首次学习时 +1，中断则重置为 1） */
function touchStreak(state: ProgressState): void {
  const today = localDateStr()
  if (state.streak.lastDate === today) return
  const yesterday = localDateStr(new Date(Date.now() - 86400_000))
  state.streak = {
    lastDate: today,
    days: state.streak.lastDate === yesterday ? state.streak.days + 1 : 1,
  }
}

// ---------------------------------------------------------------------------
// 导出 / 导入备份
// ---------------------------------------------------------------------------

/** 导出为 JSON 字符串（供下载备份） */
export function exportProgress(): string {
  return JSON.stringify(loadProgress(), null, 2)
}

/** 从 JSON 字符串导入（覆盖现有进度），格式非法时抛出异常 */
export function importProgress(json: string): ProgressState {
  const parsed = JSON.parse(json) as Partial<ProgressState>
  if (typeof parsed !== 'object' || parsed === null || !('mastery' in parsed)) {
    throw new Error('备份文件格式不正确')
  }
  const state: ProgressState = {
    mastery: parsed.mastery ?? {},
    favorites: parsed.favorites ?? [],
    recent: parsed.recent ?? [],
    streak: parsed.streak ?? { lastDate: '', days: 0 },
  }
  saveProgress(state)
  return state
}
