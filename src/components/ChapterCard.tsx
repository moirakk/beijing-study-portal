import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Chapter } from '../types'

/** 章节标题前缀（如 "第一章" / "第三单元"），用于抽出标签 */
const CHAPTER_PREFIX_RE = /^第.+?(?:章|单元)/

/**
 * 可折叠章节卡片：整行标题可点击收起/展开知识点列表。
 * 需在注入了学科 CSS 变量（--s 系列）的容器内使用。
 */
export default function ChapterCard({
  chapter,
  defaultOpen = true,
}: {
  chapter: Chapter
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const prefix = chapter.title.match(CHAPTER_PREFIX_RE)?.[0]
  const rest = prefix ? chapter.title.slice(prefix.length).trim() : chapter.title
  const count = chapter.topics.length

  return (
    <div className="card mt-3 overflow-hidden !p-0 first:mt-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-2.5 px-4 py-3 text-left transition-colors hover:bg-[var(--s-soft)] sm:px-[22px]"
      >
        <span className="tag shrink-0">{prefix ?? '章节'}</span>
        <span className="min-w-0 flex-1 truncate font-sans text-[15.5px] font-extrabold tracking-normal text-ink">
          {rest}
        </span>
        <span className="shrink-0 text-[12px] tabular-nums text-ink-faint">
          {count > 0 ? `${count} 个知识点` : '整理中'}
        </span>
        <span
          className={`shrink-0 text-[11px] leading-none text-ink-faint transition-transform duration-200 ${
            open ? '' : '-rotate-90'
          }`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="px-4 pb-3.5 sm:px-[22px]">
          {count === 0 ? (
            <div className="pb-1 text-[13.5px] text-ink-faint">
              本章内容整理中，敬请期待。
            </div>
          ) : (
            <ul className="kv">
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
      )}
    </div>
  )
}
