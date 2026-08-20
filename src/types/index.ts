/**
 * 全局类型定义：四层知识树结构、5 类资料内容、搜索结果。
 * 与 docs/design.md 第二部分 §3 数据存储方案保持一致。
 */

/** 学科 id：语数英物化生政史地 + 综合扩展位 */
export type SubjectId =
  | 'chinese'
  | 'math'
  | 'english'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'politics'
  | 'history'
  | 'geography'
  | 'misc'

/** 学段/年级 id：初一上(7a) ~ 高三下(12b)，共 12 个学期 */
export type GradeId =
  | '7a' | '7b'
  | '8a' | '8b'
  | '9a' | '9b'
  | '10a' | '10b'
  | '11a' | '11b'
  | '12a' | '12b'

/** 重要度标记（中考/高考） */
export type Importance = '中考必考' | '中考高频' | '高考必考' | '高考高频' | '了解即可'

/** 全局标签体系 */
export type TopicTag =
  | '#中考必考'
  | '#中考高频'
  | '#高考高频'
  | '#了解即可'
  | '#易错'
  | '#需背诵'
  | '#需大量练习'
  | '#基础'
  | '#提高'
  | '#拔高'

/** 5 类资料类型：笔记 / 公式 / 例题 / 真题 / 导图 */
export type MaterialType = 'note' | 'formula' | 'example' | 'exam' | 'mindmap'

/** 资料类型 → 对应 Markdown 文件名 */
export const MATERIAL_FILES: Record<MaterialType, string> = {
  note: 'note.md',
  formula: 'formulas.md',
  example: 'examples.md',
  exam: 'exams.md',
  mindmap: 'mindmap.md',
}

// ---------------------------------------------------------------------------
// 四层树结构：Subject → Grade → Chapter → Topic
// ---------------------------------------------------------------------------

/** 知识点（最小学习单元） */
export interface Topic {
  /** 全局唯一 id，如 "math-7a-1-1" */
  id: string
  title: string
  /** 难度 1-5 */
  difficulty: 1 | 2 | 3 | 4 | 5
  /** 重要度（中考/高考标记） */
  importance: Importance
  tags: TopicTag[]
  /** 前置知识点 id 列表 */
  prerequisites: string[]
  /** 跨章节/跨学科关联知识点 id 列表 */
  related: string[]
  /** 该知识点已有的资料类型 */
  materials: MaterialType[]
  /** 资料所在目录（相对 content/），如 "math/grade7-1/chapter1/rational-numbers" */
  contentPath?: string
}

/** 章节/单元（对应教材目录） */
export interface Chapter {
  id: string
  title: string
  topics: Topic[]
}

/** 学段/年级（一个学期） */
export interface Grade {
  id: GradeId
  title: string
  /** 教材版本，如 "人教版" */
  textbook?: string
  chapters: Chapter[]
}

/** 学科 */
export interface Subject {
  id: SubjectId
  name: string
  icon: string
  grades: Grade[]
}

/** subjects.json 根结构 */
export interface SubjectsData {
  subjects: Subject[]
}

// ---------------------------------------------------------------------------
// 知识点资料内容（5 类，均为 Markdown 原文，按需懒加载）
// ---------------------------------------------------------------------------

export interface TopicContent {
  /** 📒 笔记：概念讲解、推导、易错点 */
  note?: string
  /** 🧮 公式：KaTeX 公式卡片 */
  formulas?: string
  /** ✏️ 例题：典型题 + 折叠解析 */
  examples?: string
  /** 📄 真题：北京中考/高考真题，标注来源 */
  exams?: string
  /** 🧠 导图：markmap 大纲 */
  mindmap?: string
}
