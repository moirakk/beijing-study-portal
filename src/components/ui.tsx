/**
 * 小型可复用 UI 组件：掌握状态点 / 状态徽章 / 进度环 / 进度条。
 */
import type { MasteryStatus } from '../types'
import { MASTERY_COLORS, MASTERY_LABELS } from '../lib/constants'

/** 掌握状态色点（灰/蓝/绿/橙） */
export function MasteryDot({ status, size = 10 }: { status: MasteryStatus; size?: number }) {
  return (
    <span
      title={MASTERY_LABELS[status]}
      className="inline-block shrink-0 rounded-full"
      style={{ width: size, height: size, backgroundColor: MASTERY_COLORS[status] }}
    />
  )
}

/** 掌握状态徽章（点 + 文案） */
export function MasteryBadge({ status }: { status: MasteryStatus }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium"
      style={{
        color: MASTERY_COLORS[status],
        backgroundColor: `${MASTERY_COLORS[status]}1a`,
      }}
    >
      <MasteryDot status={status} size={7} />
      {MASTERY_LABELS[status]}
    </span>
  )
}

/** SVG 进度环 */
export function ProgressRing({
  ratio,
  color,
  size = 64,
  stroke = 6,
  label,
}: {
  /** 0~1，null 表示暂无内容 */
  ratio: number | null
  color: string
  size?: number
  stroke?: number
  label?: string
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const filled = ratio == null ? 0 : Math.min(1, Math.max(0, ratio))
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" strokeWidth={stroke}
          className="stroke-line dark:stroke-neutral-700"
        />
        <circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" strokeWidth={stroke} strokeLinecap="round"
          stroke={color}
          strokeDasharray={c}
          strokeDashoffset={c * (1 - filled)}
          style={{ transition: 'stroke-dashoffset .4s ease' }}
        />
      </svg>
      <span className="absolute text-xs font-semibold" style={{ color }}>
        {label ?? (ratio == null ? '—' : `${Math.round(filled * 100)}%`)}
      </span>
    </div>
  )
}

/** 水平进度条（可显示多段状态分布） */
export function ProgressBar({
  segments,
  height = 8,
}: {
  /** [{ ratio, color }] ratio 合计 ≤ 1 */
  segments: { ratio: number; color: string }[]
  height?: number
}) {
  return (
    <div
      className="flex w-full overflow-hidden rounded-full bg-line dark:bg-neutral-700"
      style={{ height }}
    >
      {segments.map((seg, i) => (
        <div
          key={i}
          style={{
            width: `${Math.max(0, seg.ratio) * 100}%`,
            backgroundColor: seg.color,
            transition: 'width .4s ease',
          }}
        />
      ))}
    </div>
  )
}
