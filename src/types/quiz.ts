/**
 * 题目系统类型定义。
 * 每篇 note 旁可放 quiz.json（与 note.md 同目录），结构如下：
 *   preview: 课前预习（2-3 题，偏"了解要学什么"）
 *   review:  课后检测（4-6 题，偏"记忆巩固"）
 * 题型：single（单选）、judge（判断对错）。
 */

/** 题型：单选 / 判断 */
export type QuizType = 'single' | 'judge'

/** 单题 */
export interface QuizQuestion {
  /** 题内唯一 id，如 "p1" / "r2" */
  id: string
  type: QuizType
  /** 题干 */
  question: string
  /** 单选选项（judge 题可省略，用 answer 布尔） */
  options?: string[]
  /** 正确答案：single 为选项下标，judge 为布尔 */
  answer: number | boolean
  /** 解析（答错即时反馈） */
  explain: string
}

/** 一套题：课前预习 + 课后检测 */
export interface QuizSet {
  version?: number
  preview: QuizQuestion[]
  review: QuizQuestion[]
}

/** 用户对某题的作答记录（localStorage 持久化） */
export interface QuizAnswerRecord {
  /** 知识点 id */
  topicId: string
  /** 题 id（如 "p1"） */
  questionId: string
  /** 用户所选：single 为下标，judge 为布尔 */
  selected: number | boolean
  /** 是否正确 */
  correct: boolean
  /** 作答时间戳 */
  ts: number
}

/** 错题本条目 */
export interface WrongItem {
  topicId: string
  questionId: string
  question: string
  type: QuizType
  options?: string[]
  selected: number | boolean
  answer: number | boolean
  explain: string
  ts: number
}

/** 记忆卡片条目（从题目/背记要点生成） */
export interface FlashcardItem {
  topicId: string
  /** 正面（题目/要点） */
  front: string
  /** 背面（答案/解析） */
  back: string
  /** 掌握度：0=再练 1=记住了 */
  level: 0 | 1
  /** 下次复习时间戳（简单间隔复习） */
  due: number
  /** 复习次数 */
  reps: number
}

/** 图鉴：已捕获/已进化的宝可梦 */
export interface PokedexEntry {
  /** 宝可梦 key（如 pikachu / flareon） */
  key: string
  /** 捕获数（答对题数） */
  caught: number
  /** 是否已进化（满分触发） */
  evolved: boolean
}
