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
        <div className="px-4 pb-3.5 sm:px-[22px]">
          {count === 0 ? (
            <div className="pb-1 text-[13.5px] text-ink-faint">
              本章内容整理中，敬请期待。
            </div>
          ) : (
            <ul className="kv">
              {chapter.topics.map((topic) => {
                const draft = isDraftTopic(topic)
                return (
                  <li key={topic.id} className="!p-0">
                    <Link
                      to={`/topic/${topic.id}`}
                      className="group/t -mx-2 flex w-full items-baseline gap-3 rounded-md px-2 py-[7px] transition-colors hover:bg-[var(--s-soft)]"
                    >
                      <span
                        className={`min-w-0 flex-1 text-[14.5px] font-semibold ${
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
                          <span className="ml-2 inline-flex items-baseline gap-2 whitespace-nowrap align-baseline">
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
                      <span className="text-[13px] text-ink-faint transition-colors group-hover/t:text-[var(--s)]">
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
