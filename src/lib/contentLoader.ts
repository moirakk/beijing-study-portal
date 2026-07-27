/**
 * 内容加载层：
 * - 加载 content/subjects.json 知识树
 * - 按 contentPath + 资料类型 懒加载对应 Markdown 原文
 */
import type {
  Chapter,
  Grade,
  MaterialType,
  Subject,
  SubjectsData,
  Topic,
  TopicContent,
} from '../types'
import { MATERIAL_FILES } from '../types'
import subjectsJson from '../../content/subjects.json'

// ---------------------------------------------------------------------------
// 知识树
// ---------------------------------------------------------------------------

const subjectsData = subjectsJson as SubjectsData

/** 获取全部学科（整棵知识树） */
export function getSubjects(): Subject[] {
  return subjectsData.subjects
}

/** 按 id 获取学科 */
export function getSubject(subjectId: string): Subject | undefined {
  return subjectsData.subjects.find((s) => s.id === subjectId)
}

/** 知识点定位结果（含完整路径，用于面包屑） */
export interface TopicLocation {
  subject: Subject
  grade: Grade
  chapter: Chapter
  topic: Topic
}

let topicIndexCache: Map<string, TopicLocation> | null = null

/** 建立 topicId → 位置 的索引（惰性构建，只建一次） */
function buildTopicIndex(): Map<string, TopicLocation> {
  if (topicIndexCache) return topicIndexCache
  const index = new Map<string, TopicLocation>()
  for (const subject of subjectsData.subjects) {
    for (const grade of subject.grades) {
      for (const chapter of grade.chapters) {
        for (const topic of chapter.topics) {
          index.set(topic.id, { subject, grade, chapter, topic })
        }
      }
    }
  }
  topicIndexCache = index
  return index
}

/** 按 id 查找知识点及其所在位置 */
export function findTopic(topicId: string): TopicLocation | undefined {
  return buildTopicIndex().get(topicId)
}

/** 获取全部知识点（用于搜索索引、进度统计） */
export function getAllTopics(): TopicLocation[] {
  return Array.from(buildTopicIndex().values())
}

/** 知识点的面包屑，如 ["数学", "初一上", "第一章 有理数", "正数和负数"] */
export function getBreadcrumb(topicId: string): string[] {
  const loc = findTopic(topicId)
  if (!loc) return []
  return [loc.subject.name, loc.grade.title, loc.chapter.title, loc.topic.title]
}

// ---------------------------------------------------------------------------
// Markdown 资料懒加载
// ---------------------------------------------------------------------------

/**
 * Vite 构建时收集 content/ 下全部 Markdown；
 * `?raw` 取原文，懒加载（点开对应 Tab 时才真正请求）。
 */
const markdownModules = import.meta.glob('../../content/**/*.md', {
  query: '?raw',
  import: 'default',
}) as Record<string, () => Promise<string>>

/** 根据 contentPath（相对 content/ 的目录）与资料类型加载 Markdown 原文 */
export async function loadMaterial(
  contentPath: string,
  type: MaterialType,
): Promise<string | null> {
  const key = `../../content/${contentPath}/${MATERIAL_FILES[type]}`
  const loader = markdownModules[key]
  if (!loader) return null
  return loader()
}

/** 加载某知识点已有的全部资料 */
export async function loadTopicContent(topic: Topic): Promise<TopicContent> {
  const content: TopicContent = {}
  if (!topic.contentPath) return content
  const entries = await Promise.all(
    topic.materials.map(async (type) => {
      const md = await loadMaterial(topic.contentPath!, type)
      return [type, md] as const
    }),
  )
  for (const [type, md] of entries) {
    if (md == null) continue
    switch (type) {
      case 'note':
        content.note = md
        break
      case 'formula':
        content.formulas = md
        break
      case 'example':
        content.examples = md
        break
      case 'exam':
        content.exams = md
        break
      case 'mindmap':
        content.mindmap = md
        break
    }
  }
  return content
}
