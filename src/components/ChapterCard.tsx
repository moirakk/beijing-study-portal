import { Link } from 'react-router-dom'
import type { Chapter } from '../types'

/** 章节标题前缀（如 "第一章" / "第三单元"），用于抽出标签 */
const CHAPTER_PREFIX_RE = /^第.+?(?:章|单元)/

/**
 * 章节卡片：章节标签 + 标题 + 知识点链接列表。
 * 需在注入了学科 CSS 变量（--s 系列）的容器内使用。
 */
export default function ChapterCard({ chapter }: { chapter: Chapter }) {
  const prefix = chapter.title.match(CHAPTER_PREFIX_RE)?.[0]

  return (
    <div className="card mt-3 first:mt-0">
      <h4 className="m-0 mb-1 flex items-center gap-2.5 font-sans text-[16px] font-extrabold tracking-normal text-ink">
        <span className="tag">{prefix ?? '章节'}</span>
        {prefix ? chapter.title.slice(prefix.length).trim() : chapter.title}
      </h4>
      {chapter.topics.length === 0 ? (
        <div className="pt-1 text-[13.5px] text-ink-faint">本章内容整理中</div>
      ) : (
        <ul className="kv mt-1">
          {chapter.topics.map((topic) => (
            <li key={topic.id} className="!p-0">
              <Link
                to={`/topic/${topic.id}`}
                className="group/t -mx-2 flex w-full items-baseline gap-3 rounded-md px-2 py-[7px] transition-colors hover:bg-[var(--s-soft)]"
              >
                <span className="flex-1 text-[14.5px] font-semibold text-[var(--s-deep)]">
                  {topic.title}
                </span>
                <span className="text-[13px] text-ink-faint transition-colors group-hover/t:text-[var(--s)]">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
