/**
 * UI 常量：学科主题色（主色/浅底/深色）、学期列表、资料类型文案。
 * 学科三色与 references/ui-reference.html 的 --hist/--geo 模式一致，
 * 通过 CSS 变量（--s / --s-soft / --s-deep）注入组件树。
 */
import type { CSSProperties } from 'react'
import type { GradeId, MaterialType, SubjectId } from '../types'

/** 学科主题三色 */
export interface SubjectTheme {
  /** 主色：色条、表头、mark 强调 */
  main: string
  /** 浅底：标签、要点框背景 */
  soft: string
  /** 深色：标题文字 */
  deep: string
}

export const SUBJECT_THEMES: Record<SubjectId, SubjectTheme> = {
  chinese: { main: '#8B4513', soft: '#F2E8DD', deep: '#5A2D0C' },
  math: { main: '#2E5A9A', soft: '#E4ECF4', deep: '#1B3660' },
  english: { main: '#4A7C59', soft: '#E4EFE7', deep: '#2D4D36' },
  physics: { main: '#6B5B95', soft: '#EBE7F2', deep: '#3D3460' },
  chemistry: { main: '#C84C3C', soft: '#F4E0DD', deep: '#7A2E24' },
  biology: { main: '#2E8B57', soft: '#DFF0E7', deep: '#1A5234' },
  politics: { main: '#B8860B', soft: '#F2EADC', deep: '#6F5107' },
  history: { main: '#9A5B2A', soft: '#F4EADD', deep: '#5C3417' },
  geography: { main: '#16697A', soft: '#E2EEF1', deep: '#0C3D48' },
  misc: { main: '#C08A3E', soft: '#F2EADC', deep: '#6F5107' },
}

/** 学科英文名（小字装饰，参考文件 .subject-head .en） */
export const SUBJECT_EN: Record<SubjectId, string> = {
  chinese: 'Chinese',
  math: 'Mathematics',
  english: 'English',
  physics: 'Physics',
  chemistry: 'Chemistry',
  biology: 'Biology',
  politics: 'Politics & Law',
  history: 'History',
  geography: 'Geography',
  misc: 'General',
}

/** 大写数字（学科序号装饰，宋体大字） */
export const CN_NUMERALS = ['壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾']

/**
 * 把学科主题三色注入为 CSS 变量（--sj 系列，亮色原值）。
 * index.css 会将其映射为实际使用的 --s / --s-soft / --s-deep，
 * 并在暗色模式下自动重算以保证对比度。
 */
export function subjectVars(id: SubjectId): CSSProperties {
  const t = SUBJECT_THEMES[id]
  return {
    '--sj': t.main,
    '--sj-soft': t.soft,
    '--sj-deep': t.deep,
  } as CSSProperties
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

/** 年级前缀 → 中文年级名 */
export const GRADE_NAMES: Record<string, string> = {
  '7': '七年级',
  '8': '八年级',
  '9': '九年级',
  '10': '高一',
  '11': '高二',
  '12': '高三',
}

/** 学期 id（如 "7a"）→ 完整标题（如 "七年级上学期"） */
export function semesterFullLabel(gradeId: string): string {
  const prefix = gradeId.replace(/[ab]$/, '')
  const suffix = gradeId.slice(-1)
  return `${GRADE_NAMES[prefix] ?? prefix}${suffix === 'a' ? '上学期' : '下学期'}`
}

/** 资料类型 → 展示名 */
export const MATERIAL_LABELS: Record<MaterialType, string> = {
  note: '笔记',
  formula: '公式',
  example: '例题',
  exam: '真题',
  mindmap: '导图',
}

/** 难度星标，如 difficulty=3 → "★★★☆☆" */
export function difficultyStars(d: number): string {
  return '★'.repeat(d) + '☆'.repeat(5 - d)
}
