/**
 * 进度统计工具：按学期/学科/章节聚合掌握状态分布。
 */
import type { GradeId, MasteryStatus, ProgressState, Subject, SubjectId, Topic } from '../types'
import { getSubjects } from './contentLoader'

export interface MasteryStats {
  total: number
  unlearned: number
  learning: number
  mastered: number
  review: number
}

export function emptyStats(): MasteryStats {
  return { total: 0, unlearned: 0, learning: 0, mastered: 0, review: 0 }
}

export function countTopics(topics: Topic[], state: ProgressState): MasteryStats {
  const stats = emptyStats()
  for (const t of topics) {
    const status: MasteryStatus = state.mastery[t.id] ?? 'unlearned'
    stats.total += 1
    stats[status] += 1
  }
  return stats
}

/** 某学科在某学期的全部知识点 */
export function topicsOfSubjectGrade(subject: Subject, gradeId: GradeId): Topic[] {
  const grade = subject.grades.find((g) => g.id === gradeId)
  if (!grade) return []
  return grade.chapters.flatMap((c) => c.topics)
}

/** 某学科全部知识点 */
export function topicsOfSubject(subject: Subject): Topic[] {
  return subject.grades.flatMap((g) => g.chapters.flatMap((c) => c.topics))
}

/** 当前学期各学科统计：[{ subjectId, name, icon, stats }] */
export function semesterSubjectStats(gradeId: GradeId, state: ProgressState) {
  return getSubjects().map((subject) => ({
    subject,
    stats: countTopics(topicsOfSubjectGrade(subject, gradeId), state),
  }))
}

/** 掌握率（已掌握 / 总数），total 为 0 时返回 null */
export function masteryRate(stats: MasteryStats): number | null {
  if (stats.total === 0) return null
  return stats.mastered / stats.total
}

/** 学科整体统计 */
export function subjectTotalStats(subjectId: SubjectId, state: ProgressState): MasteryStats {
  const subject = getSubjects().find((s) => s.id === subjectId)
  if (!subject) return emptyStats()
  return countTopics(topicsOfSubject(subject), state)
}
