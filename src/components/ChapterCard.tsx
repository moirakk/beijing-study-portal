import { useState } from 'react'
import { Link } from 'react-router-dom'
import { difficultyStars } from '../lib/constants'
import { countRealTopics, isDraftTopic } from '../lib/contentLoader'
import type { Chapter } from '../types'

/** 章节标题前缀（如 "第一章" / "第三单元"），用于抽出标签 */
const CHAPTER_PREFIX_RE = /^第.+?(?:章|单元)/

/**
 * 可折叠章节卡片：整行标题可点击收起/展开知识点列表。
 * 需在注入了学科 CSS 变量（--s 系列）的容器内使用。
 * - defaultOpen 未指定时：有真内容默认展开，空章节/全 draft 章节默认收起
 * - showMeta：知识点行附带重要度标签与难度星（学科详情页使用）
 * - draft 知识点行视觉弱化并带"待补充"小标签；计数只算真内容（如 "3/8 篇"）
 */
export default function ChapterCard({
  chapter,
  defaultOpen,
  showMeta = false,
}: {
  chapter: Chapter
  defaultOpen?: boolean
  showMeta?: boolean
}) {
  const count = chapter.topics.length
  const realCount = countRealTopics(chapter)
  const [open, setOpen] = useState(defaultOpen ?? realCount > 0)
  const prefix = chapter.title.match(CHAPTER_PREFIX_RE)?.[0]
  const rest = prefix ? chapter.title.slice(prefix.length).trim() : chapter.title

  return (
    <div className="card card-lift mt-3 overflow-hidden !p-0 first:mt-0 hover:border-[var(--s)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-2.5 px-4 py-3 text-left transition-colors hover:bg-[var(--s-soft)] sm:px-[22px]"
      >
        <span className="tag shrink-0 flex items-center gap-1.5">
          <svg viewBox="0 0 64 64" width="12" height="12" fill="currentColor" opacity="0.75"><path d="M32 4C16.5 4 4 16.5 4 32C4 47.5 16.5 60 32 60C47.5 60 60 47.5 60 32C60 16.5 47.5 4 32 4ZM32 10C44.1 10 54 19.9 54 32H38C38 28.7 35.3 26 32 26C28.7 26 26 28.7 26 32H10C10 19.9 19.9 10 32 10ZM32 54C19.9 54 10 44.1 10 32H26C26 35.3 28.7 38 32 38C35.3 38 38 35.3 38 32H54C54 44.1 44.1 54 32 54ZM32 34C30.9 34 30 33.1 30 32C30 30.9 30.9 30 32 30C33.1 30 34 30.9 34 32C34 33.1 33.1 34 32 34Z" /></svg>
          {prefix ?? '章节'}
        </span>
        <span className="min-w-0 flex-1 truncate font-sans text-[15.5px] font-extrabold tracking-normal text-ink">
          {rest}
        </span>
        <span className="shrink-0 text-[12px] tabular-nums text-ink-faint">
          {count === 0
            ? '整理中'
            : realCount === 0
              ? `${count} 个待补充`
              : realCount === count
                ? `${count} 个知识点`
                : `${realCount}/${count} 篇`}
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
        <div className="fold-in px-4 pb-3.5 sm:px-[22px]">
          {count === 0 ? (
            <div className="pb-1 text-[13.5px] text-ink-faint">
              暂无内容
            </div>
          ) : (
            <ul className="kv">
              {chapter.topics.map((topic) => {
                const draft = isDraftTopic(topic)
                return (
                  <li key={topic.id} className="!p-0">
                    <Link
                      to={`/topic/${topic.id}`}
                      className="group/t -mx-2 flex w-full items-baseline gap-3 rounded-md px-2 py-[9px] transition-colors hover:bg-[var(--s-soft)]"
                    >
                      <span
                        className={`min-w-0 flex-1 text-[15.5px] font-semibold ${
                          draft ? 'text-[var(--s-deep)] opacity-45' : 'text-[var(--s-deep)]'
                        }`}
                      >
                        {topic.title}
                        {draft && (
                          <span className="tag ml-2 align-baseline !text-[11px] opacity-80">
                            待补充
                          </span>
                        )}
                        {showMeta && !draft && (
                          <span className="ml-2 inline-flex flex-wrap items-baseline gap-1.5 align-baseline">
                            <span className="tag !text-[11px]">{topic.importance}</span>
                            <span
                              className="text-[11px] text-[var(--s)]"
                              title={`难度 ${topic.difficulty}/5`}
                            >
                              {difficultyStars(topic.difficulty)}
                            </span>
                          </span>
                        )}
                      </span>
                      <span className="text-[13px] text-ink-faint transition-[color,transform] duration-200 group-hover/t:translate-x-0.5 group-hover/t:text-[var(--s)]">
                        →
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
