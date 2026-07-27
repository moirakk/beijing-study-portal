/**
 * UI 常量：掌握状态四色、学科主题色、学期列表。
 * 颜色值与 tailwind.config.js 保持一致；用于内联样式（动态类名无法被 JIT 收集）。
 */
import type { GradeId, MasteryStatus, MaterialType, SubjectId } from '../types'

/** 掌握状态 → 显示文案 */
export const MASTERY_LABELS: Record<MasteryStatus, string> = {
  unlearned: '未学',
  learning: '学习中',
  mastered: '已掌握',
  review: '需复习',
}

/** 掌握状态 → 颜色（与 tailwind mastery.* 一致） */
export const MASTERY_COLORS: Record<MasteryStatus, string> = {
  unlearned: '#9ca3af',
  learning: '#3b82f6',
  mastered: '#22c55e',
  review: '#f97316',
}

/** 掌握状态切换顺序：未学 → 学习中 → 已掌握 → 需复习 → 未学 */
export const MASTERY_CYCLE: MasteryStatus[] = [
  'unlearned',
  'learning',
  'mastered',
  'review',
]

/** 学科主题色（与 tailwind subject.* 一致） */
export const SUBJECT_COLORS: Record<SubjectId, string> = {
  chinese: '#B03A2E',
  math: '#2E5A9A',
  english: '#5B3A9A',
  physics: '#1F6F8B',
  chemistry: '#7A9A2E',
  biology: '#2E9A5B',
  politics: '#9A2E5B',
  history: '#9A5B2A',
  geography: '#16697A',
  misc: '#6B6659',
}

/** 学期 id → 中文标题 */
export const GRADE_TITLES: Record<GradeId, string> = {
  '7a': '初一上',
  '7b': '初一下',
  '8a': '初二上',
  '8b': '初二下',
  '9a': '初三上',
  '9b': '初三下',
  '10a': '高一上',
  '10b': '高一下',
  '11a': '高二上',
  '11b': '高二下',
  '12a': '高三上',
  '12b': '高三下',
}

export const ALL_GRADE_IDS: GradeId[] = [
  '7a', '7b', '8a', '8b', '9a', '9b',
  '10a', '10b', '11a', '11b', '12a', '12b',
]

/** 资料类型 → 展示名（含图标） */
export const MATERIAL_LABELS: Record<MaterialType, string> = {
  note: '📒 笔记',
  formula: '🧮 公式',
  example: '✏️ 例题',
  exam: '📄 真题',
  mindmap: '🧠 导图',
}

/** 当前学期（默认初一上），持久化到 localStorage */
const SEMESTER_KEY = 'bsp-current-semester'

export function getCurrentSemester(): GradeId {
  const raw = localStorage.getItem(SEMESTER_KEY)
  if (raw && (ALL_GRADE_IDS as string[]).includes(raw)) return raw as GradeId
  return '7a'
}

export function setCurrentSemester(id: GradeId): void {
  localStorage.setItem(SEMESTER_KEY, id)
}

/** 难度星标，如 difficulty=3 → "★★★☆☆" */
export function difficultyStars(d: number): string {
  return '★'.repeat(d) + '☆'.repeat(5 - d)
}
