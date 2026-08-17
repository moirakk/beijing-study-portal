/**
 * KnowledgeLinks：知识点关联跳转面板
 * - 纵向关联（同学科不同年级）
 * - 跨学科关联
 * 宝可梦风格：精灵球图标 + 学科色胶囊卡片
 */
import { Link } from 'react-router-dom'
import { SUBJECT_THEMES } from '../lib/constants'
import type { SubjectId } from '../types'

export interface KnowledgeLinkItem {
  toId: string
  toTitle: string
  gradeTitle: string
  subjectName: string
  subjectId: string
  label: string
  type: 'same_subject' | 'cross_subject'
}

interface Props {
  links: KnowledgeLinkItem[]
  currentSubjectId: string
}

/** 精灵球 SVG（简化版） */
function PokeBallIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.8" />
      <path d="M1 12h22" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" fill="white" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  )
}

/** 单条关联卡片 */
function LinkCard({ item, isCross }: { item: KnowledgeLinkItem; isCross: boolean }) {
  const theme = SUBJECT_THEMES[(item.subjectId as SubjectId) ?? 'misc'] ?? SUBJECT_THEMES.misc

  return (
    <Link
      to={`/topic/${item.toId}`}
      title={item.label}
      className="group flex items-start gap-2.5 rounded-xl border border-line bg-paper/70 px-3.5 py-2.5 transition-all hover:border-[var(--s)] hover:bg-[var(--s-soft)] hover:shadow-sm active:scale-[0.98]"
      style={{
        '--link-main': theme.main,
        '--link-soft': theme.soft,
        '--link-deep': theme.deep,
      } as React.CSSProperties}
    >
      {/* 精灵球图标，跨学科用链接图标 */}
      <span
        className="mt-0.5 shrink-0 text-[13px] leading-none transition-transform group-hover:scale-110"
        style={{ color: theme.main }}
        aria-hidden
      >
        {isCross ? '🔗' : <PokeBallIcon size={14} />}
      </span>

      <div className="min-w-0 flex-1">
        {/* 年级 + 学科标签 */}
        <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
          <span
            className="rounded-full px-1.5 py-0.5 text-[10.5px] font-bold leading-none"
            style={{ background: theme.soft, color: theme.deep }}
          >
            {item.gradeTitle}
          </span>
          {isCross && (
            <span
              className="rounded-full px-1.5 py-0.5 text-[10.5px] font-bold leading-none"
              style={{ background: theme.soft, color: theme.main }}
            >
              {item.subjectName}
            </span>
          )}
        </div>
        {/* 知识点标题 */}
        <div
          className="truncate text-[13px] font-semibold leading-snug transition-colors group-hover:text-[var(--link-deep)]"
          style={{ color: theme.deep }}
        >
          {item.toTitle}
        </div>
      </div>

      {/* 跳转箭头 */}
      <span className="mt-0.5 shrink-0 text-[11px] text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--s)]">
        →
      </span>
    </Link>
  )
}

export default function KnowledgeLinks({ links, currentSubjectId: _currentSubjectId }: Props) {
  if (!links || links.length === 0) return null

  const sameSubject = links.filter((l) => l.type === 'same_subject')
  const crossSubject = links.filter((l) => l.type === 'cross_subject')

  return (
    <section className="card mt-4">
      {/* 标题 */}
      <div className="mb-3 flex items-center gap-2">
        <span className="text-[15px]" aria-hidden>
          📎
        </span>
        <h2 className="m-0 font-sans text-[15px] font-extrabold tracking-normal text-[var(--s-deep)]">
          知识关联
        </h2>
        <span className="tag ml-auto shrink-0">串联知识·深度记忆</span>
      </div>

      <div className="space-y-4">
        {/* 纵向关联：同学科不同年级 */}
        {sameSubject.length > 0 && (
          <div>
            <div className="mb-2 flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-ink-faint">⚡ 纵向延伸</span>
              <span className="text-[10px] text-ink-faint">同学科不同年级</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {sameSubject.map((item) => (
                <LinkCard key={item.toId} item={item} isCross={false} />
              ))}
            </div>
          </div>
        )}

        {/* 跨学科关联 */}
        {crossSubject.length > 0 && (
          <div>
            <div className="mb-2 flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-ink-faint">🌐 跨学科关联</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {crossSubject.map((item) => (
                <LinkCard key={item.toId} item={item} isCross={true} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
