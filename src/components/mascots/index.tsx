/**
 * 宝可梦致敬版 SVG 组件（自绘简笔/像素风，非官方美术素材）。
 * 用 CSS 变量 --s / --s-deep 上色，自动适配学科主题与亮/暗色。
 * 版权说明：宝可梦为任天堂/Game Freak 版权 IP，本站为私人学习站，
 * 此处为二次创作致敬版，不搬运官方美术资源。
 */
import type { CSSProperties } from 'react'

interface MascotProps {
  /** 尺寸（px） */
  size?: number
  /** 是否显示进化形态（剪影/高亮） */
  evolved?: boolean
  className?: string
}

/** 皮卡丘：全站主向导 + 数学/物理代表（电系·黄） */
export function Pikachu({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 64 64" style={s} className={className} aria-hidden>
      {/* 耳朵 */}
      <path d="M20 8 L14 26 L24 22 Z" fill="var(--s)" />
      <path d="M44 8 L50 26 L40 22 Z" fill="var(--s)" />
      <path d="M18 12 L15 22 L21 20 Z" fill="var(--s-deep)" />
      <path d="M46 12 L49 22 L43 20 Z" fill="var(--s-deep)" />
      {/* 身体 */}
      <ellipse cx="32" cy="40" rx="20" ry="18" fill="var(--s)" />
      {/* 脸颊红点 */}
      <circle cx="22" cy="42" r="4" fill="#e88" opacity="0.85" />
      <circle cx="42" cy="42" r="4" fill="#e88" opacity="0.85" />
      {/* 眼睛 */}
      <circle cx="26" cy="34" r="3.2" fill="var(--s-deep)" />
      <circle cx="38" cy="34" r="3.2" fill="var(--s-deep)" />
      <circle cx="27" cy="33" r="1" fill="#fff" />
      <circle cx="39" cy="33" r="1" fill="#fff" />
      {/* 嘴 */}
      <path d="M28 40 Q32 45 36 40" stroke="var(--s-deep)" strokeWidth="1.6" fill="none" />
      {/* 闪电尾 */}
      <path d="M50 46 L60 40 L52 50 L58 56 L44 52 Z" fill="var(--s)" stroke="var(--s-deep)" strokeWidth="1" />
      {evolved && (
        <g>
          <circle cx="32" cy="20" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 12 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--gold)" />
        </g>
      )}
    </svg>
  )
}

/** 小火龙：化学代表（火系·橙红） */
export function Charmander({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 64 64" style={s} className={className} aria-hidden>
      {/* 尾巴火焰 */}
      <path d="M50 50 Q58 44 56 36 Q54 44 50 50 Z" fill="var(--s)" />
      <path d="M52 46 Q56 42 55 38 Q53 44 52 46 Z" fill="var(--gold)" />
      {/* 身体 */}
      <ellipse cx="32" cy="42" rx="18" ry="17" fill="var(--s)" />
      {/* 肚皮 */}
      <ellipse cx="32" cy="46" rx="10" ry="9" fill="var(--s-soft)" />
      {/* 眼睛 */}
      <circle cx="26" cy="36" r="3" fill="var(--s-deep)" />
      <circle cx="38" cy="36" r="3" fill="var(--s-deep)" />
      <circle cx="27" cy="35" r="1" fill="#fff" />
      <circle cx="39" cy="35" r="1" fill="#fff" />
      {/* 嘴 */}
      <path d="M28 42 Q32 46 36 42" stroke="var(--s-deep)" strokeWidth="1.6" fill="none" />
      {evolved && (
        <g>
          <circle cx="32" cy="20" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 12 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--gold)" />
        </g>
      )}
    </svg>
  )
}

/** 杰尼龟：地理代表（水系·蓝） */
export function Squirtle({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 64 64" style={s} className={className} aria-hidden>
      {/* 龟壳 */}
      <ellipse cx="32" cy="44" rx="20" ry="16" fill="var(--s)" />
      <path d="M32 30 L32 58 M22 36 L42 52 M42 36 L22 52" stroke="var(--s-deep)" strokeWidth="1.4" opacity="0.5" />
      {/* 头 */}
      <circle cx="32" cy="26" r="12" fill="var(--s)" />
      {/* 眼睛 */}
      <circle cx="27" cy="24" r="3" fill="var(--s-deep)" />
      <circle cx="37" cy="24" r="3" fill="var(--s-deep)" />
      <circle cx="28" cy="23" r="1" fill="#fff" />
      <circle cx="38" cy="23" r="1" fill="#fff" />
      {/* 嘴 */}
      <path d="M28 30 Q32 33 36 30" stroke="var(--s-deep)" strokeWidth="1.6" fill="none" />
      {evolved && (
        <g>
          <circle cx="32" cy="14" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 6 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--gold)" />
        </g>
      )}
    </svg>
  )
}

/** 妙蛙种子：生物代表（草系·绿） */
export function Bulbasaur({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 64 64" style={s} className={className} aria-hidden>
      {/* 背上的种子 */}
      <ellipse cx="32" cy="20" rx="12" ry="10" fill="var(--s)" />
      <path d="M32 12 Q36 16 34 22 Q30 18 32 12 Z" fill="var(--s-deep)" opacity="0.6" />
      {/* 身体 */}
      <ellipse cx="32" cy="44" rx="18" ry="15" fill="var(--s)" />
      {/* 眼睛 */}
      <circle cx="26" cy="40" r="3" fill="var(--s-deep)" />
      <circle cx="38" cy="40" r="3" fill="var(--s-deep)" />
      <circle cx="27" cy="39" r="1" fill="#fff" />
      <circle cx="39" cy="39" r="1" fill="#fff" />
      {/* 嘴 */}
      <path d="M28 46 Q32 49 36 46" stroke="var(--s-deep)" strokeWidth="1.6" fill="none" />
      {evolved && (
        <g>
          <circle cx="32" cy="34" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 26 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--gold)" />
        </g>
      )}
    </svg>
  )
}

/** 伊布：语文代表（一般系·棕） */
export function Eevee({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 64 64" style={s} className={className} aria-hidden>
      {/* 耳朵 */}
      <path d="M20 12 L16 30 L26 24 Z" fill="var(--s)" />
      <path d="M44 12 L48 30 L38 24 Z" fill="var(--s)" />
      {/* 身体 */}
      <ellipse cx="32" cy="42" rx="19" ry="17" fill="var(--s)" />
      {/* 蓬松尾巴 */}
      <path d="M50 44 Q60 40 58 30 Q54 40 50 44 Z" fill="var(--s)" />
      {/* 眼睛 */}
      <circle cx="26" cy="36" r="3" fill="var(--s-deep)" />
      <circle cx="38" cy="36" r="3" fill="var(--s-deep)" />
      <circle cx="27" cy="35" r="1" fill="#fff" />
      <circle cx="39" cy="35" r="1" fill="#fff" />
      {/* 嘴 */}
      <path d="M28 42 Q32 46 36 42" stroke="var(--s-deep)" strokeWidth="1.6" fill="none" />
      {evolved && (
        <g>
          <circle cx="32" cy="20" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 12 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--gold)" />
        </g>
      )}
    </svg>
  )
}

/** 水伊布：英语代表（水系·蓝） */
export function Vaporeon({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 64 64" style={s} className={className} aria-hidden>
      {/* 耳朵 */}
      <path d="M20 12 L16 30 L26 24 Z" fill="var(--s)" />
      <path d="M44 12 L48 30 L38 24 Z" fill="var(--s)" />
      {/* 身体 */}
      <ellipse cx="32" cy="42" rx="19" ry="17" fill="var(--s)" />
      {/* 鱼鳍尾 */}
      <path d="M50 44 Q60 40 58 30 Q54 40 50 44 Z" fill="var(--s)" />
      <path d="M50 44 L60 48 L52 50 Z" fill="var(--s-deep)" opacity="0.5" />
      {/* 眼睛 */}
      <circle cx="26" cy="36" r="3" fill="var(--s-deep)" />
      <circle cx="38" cy="36" r="3" fill="var(--s-deep)" />
      <circle cx="27" cy="35" r="1" fill="#fff" />
      <circle cx="39" cy="35" r="1" fill="#fff" />
      {evolved && (
        <g>
          <circle cx="32" cy="20" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 12 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--gold)" />
        </g>
      )}
    </svg>
  )
}

/** 太阳伊布：政治代表（超能力·紫） */
export function Espeon({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 64 64" style={s} className={className} aria-hidden>
      {/* 耳朵 */}
      <path d="M20 12 L16 30 L26 24 Z" fill="var(--s)" />
      <path d="M44 12 L48 30 L38 24 Z" fill="var(--s)" />
      {/* 身体 */}
      <ellipse cx="32" cy="42" rx="19" ry="17" fill="var(--s)" />
      {/* 尾巴 */}
      <path d="M50 44 Q60 40 58 30 Q54 40 50 44 Z" fill="var(--s)" />
      {/* 额头宝石 */}
      <circle cx="32" cy="28" r="3" fill="var(--gold)" />
      {/* 眼睛 */}
      <circle cx="26" cy="36" r="3" fill="var(--s-deep)" />
      <circle cx="38" cy="36" r="3" fill="var(--s-deep)" />
      <circle cx="27" cy="35" r="1" fill="#fff" />
      <circle cx="39" cy="35" r="1" fill="#fff" />
      {evolved && (
        <g>
          <circle cx="32" cy="20" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 12 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--gold)" />
        </g>
      )}
    </svg>
  )
}

/** 月亮伊布：历史代表（恶系·黑） */
export function Umbreon({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 64 64" style={s} className={className} aria-hidden>
      {/* 耳朵 */}
      <path d="M20 12 L16 30 L26 24 Z" fill="var(--s)" />
      <path d="M44 12 L48 30 L38 24 Z" fill="var(--s)" />
      {/* 身体 */}
      <ellipse cx="32" cy="42" rx="19" ry="17" fill="var(--s)" />
      {/* 尾巴 */}
      <path d="M50 44 Q60 40 58 30 Q54 40 50 44 Z" fill="var(--s)" />
      {/* 黄色环纹 */}
      <circle cx="32" cy="30" r="2.5" fill="var(--gold)" />
      <circle cx="24" cy="40" r="2" fill="var(--gold)" />
      <circle cx="40" cy="40" r="2" fill="var(--gold)" />
      {/* 眼睛 */}
      <circle cx="26" cy="36" r="3" fill="var(--gold)" />
      <circle cx="38" cy="36" r="3" fill="var(--gold)" />
      {evolved && (
        <g>
          <circle cx="32" cy="20" r="10" fill="none" stroke="var(--gold)" strokeWidth="1.5" opacity="0.7" />
          <path d="M32 12 l2 4 4 1 -3 3 1 4 -4 -2 -4 2 1 -4 -3 -3 4 -1 z" fill="var(--gold)" />
        </g>
      )}
    </svg>
  )
}

/** 学科 id → 宝可梦组件 */
export const POKEMON_BY_SUBJECT: Record<
  string,
  (props: MascotProps) => JSX.Element
> = {
  chinese: Eevee,
  math: Pikachu,
  english: Vaporeon,
  physics: Pikachu,
  chemistry: Charmander,
  biology: Bulbasaur,
  politics: Espeon,
  history: Umbreon,
  geography: Squirtle,
  misc: Pikachu,
}

/** 宝可梦 key → 组件（供图鉴/成就使用） */
export const POKEMON_BY_KEY: Record<string, (props: MascotProps) => JSX.Element> = {
  pikachu: Pikachu,
  charmander: Charmander,
  squirtle: Squirtle,
  bulbasaur: Bulbasaur,
  eevee: Eevee,
  vaporeon: Vaporeon,
  espeon: Espeon,
  umbreon: Umbreon,
}

/** 宝可梦 key → 中文名 */
export const POKEMON_NAMES: Record<string, string> = {
  pikachu: '皮卡丘',
  charmander: '小火龙',
  squirtle: '杰尼龟',
  bulbasaur: '妙蛙种子',
  eevee: '伊布',
  vaporeon: '水伊布',
  espeon: '太阳伊布',
  umbreon: '月亮伊布',
}
