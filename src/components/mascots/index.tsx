/**
 * 宝可梦致敬版 SVG 组件 v2（高质量手绘风，官方配色 + 渐变光影）
 * 自绘二次创作致敬版，不搬运官方美术资源。
 * 版权说明：宝可梦为任天堂/Game Freak 版权 IP，本站为私人学习用途。
 */
import type { CSSProperties } from 'react'

interface MascotProps {
  /** 尺寸（px） */
  size?: number
  /** 是否显示进化形态 */
  evolved?: boolean
  className?: string
}

/** 皮卡丘：全站主向导 + 数学/物理代表（电系·黄） */
export function Pikachu({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 128 128" style={s} className={className} aria-hidden>
      <defs>
        <radialGradient id="pk-body" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#FFE860" />
          <stop offset="55%" stopColor="#FFCB05" />
          <stop offset="100%" stopColor="#C89A00" />
        </radialGradient>
        <radialGradient id="pk-shadow" cx="50%" cy="20%" r="80%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#A07800" stopOpacity="0.22" />
        </radialGradient>
        <radialGradient id="pk-cheek" cx="45%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FF9898" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#CC1010" stopOpacity="0.7" />
        </radialGradient>
      </defs>

      {/* 闪电尾（在身体之前画，显示在后） */}
      <path
        d="M86 84 L112 66 L97 84 L118 74 L90 114 Z"
        fill="#FFCB05" stroke="#C09000" strokeWidth="1.5" strokeLinejoin="round"
      />
      <path
        d="M86 84 L108 70 L97 84 L114 76 L90 114 Z"
        fill="#FFE030" opacity="0.5"
      />

      {/* 左耳 */}
      <path d="M30 36 L20 4 L52 10 Z" fill="url(#pk-body)" />
      <path d="M30 36 L24 18 L48 16 Z" fill="#2B2869" />
      {/* 右耳 */}
      <path d="M86 36 L76 10 L108 4 Z" fill="url(#pk-body)" />
      <path d="M86 36 L80 16 L104 18 Z" fill="#2B2869" />

      {/* 身体 */}
      <ellipse cx="58" cy="95" rx="32" ry="26" fill="url(#pk-body)" />
      <ellipse cx="58" cy="95" rx="32" ry="26" fill="url(#pk-shadow)" />

      {/* 头部 */}
      <circle cx="58" cy="60" r="31" fill="url(#pk-body)" />
      <circle cx="58" cy="60" r="31" fill="url(#pk-shadow)" />

      {/* 脸颊红晕 */}
      <ellipse cx="33" cy="68" rx="12" ry="9" fill="url(#pk-cheek)" />
      <ellipse cx="83" cy="68" rx="12" ry="9" fill="url(#pk-cheek)" />

      {/* 左眼 */}
      <g className="mascot-eye">
        <circle cx="44" cy="54" r="8" fill="#1A1A2E" />
        <circle cx="46.5" cy="51" r="3.2" fill="white" />
        <circle cx="48.5" cy="49.5" r="1.4" fill="white" opacity="0.75" />
      </g>
      {/* 右眼 */}
      <g className="mascot-eye">
        <circle cx="72" cy="54" r="8" fill="#1A1A2E" />
        <circle cx="74.5" cy="51" r="3.2" fill="white" />
        <circle cx="76.5" cy="49.5" r="1.4" fill="white" opacity="0.75" />
      </g>

      {/* 鼻子 */}
      <ellipse cx="58" cy="63" rx="3.2" ry="2.4" fill="#7A4800" />

      {/* 嘴 */}
      <path d="M48 68 Q58 77 68 68" stroke="#7A4800" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {/* 脸纹（棕色横纹，皮卡丘特有） */}
      <path d="M28 61 Q31 57 35 59" stroke="#B07A00" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.75" />
      <path d="M31 65 Q34 61 37 63" stroke="#B07A00" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />
      <path d="M88 61 Q85 57 81 59" stroke="#B07A00" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.75" />
      <path d="M85 65 Q82 61 79 63" stroke="#B07A00" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />

      {evolved && (
        <g>
          <circle cx="58" cy="26" r="11" fill="none" stroke="#FFD700" strokeWidth="1.8" opacity="0.85" />
          <path d="M58 18 l2.5 5 5 1 -3.5 3.5 1 5 -5 -2.5 -5 2.5 1 -5 -3.5 -3.5 5 -1 z" fill="#FFD700" />
        </g>
      )}
    </svg>
  )
}

/** 小火龙：化学代表（火系·橙红） */
export function Charmander({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 128 128" style={s} className={className} aria-hidden>
      <defs>
        <radialGradient id="ch-body" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#FF9B65" />
          <stop offset="55%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#C03808" />
        </radialGradient>
        <radialGradient id="ch-belly" cx="50%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#FFFEEE" />
          <stop offset="100%" stopColor="#FFF0C0" />
        </radialGradient>
        <radialGradient id="ch-flame" cx="50%" cy="90%" r="80%">
          <stop offset="0%" stopColor="#FFF080" />
          <stop offset="35%" stopColor="#FFB000" />
          <stop offset="65%" stopColor="#FF5000" />
          <stop offset="100%" stopColor="#CC1000" stopOpacity="0.85" />
        </radialGradient>
        <radialGradient id="ch-shadow" cx="50%" cy="20%" r="80%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#8A2000" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* 尾巴主体 */}
      <path
        d="M78 100 Q112 88 112 62"
        stroke="#FF6B35" strokeWidth="11" fill="none" strokeLinecap="round"
      />
      <path
        d="M78 100 Q112 88 112 62"
        stroke="#FF9B65" strokeWidth="5" fill="none" strokeLinecap="round"
      />

      {/* 火焰 (从尾端 ~112,62 向上) */}
      <path d="M112 62 Q122 46 116 28 Q108 44 104 40 Q114 24 106 12 Q98 28 94 42 Q86 30 94 58 Z"
        fill="url(#ch-flame)" />
      <path d="M112 62 Q118 50 114 36 Q108 46 106 42 Q112 30 108 20 Q102 34 100 44 Z"
        fill="#FF4500" opacity="0.85" />
      <path d="M112 62 Q116 54 112 44 Q108 52 106 48 Q108 40 106 32 Q103 42 102 50 Z"
        fill="#FFD000" opacity="0.9" />
      <ellipse cx="108" cy="56" rx="5" ry="4" fill="#FFFFA0" opacity="0.7" />

      {/* 身体 */}
      <ellipse cx="54" cy="92" rx="28" ry="26" fill="url(#ch-body)" />
      <ellipse cx="54" cy="92" rx="28" ry="26" fill="url(#ch-shadow)" />

      {/* 肚皮奶黄 */}
      <ellipse cx="52" cy="96" rx="16" ry="18" fill="url(#ch-belly)" />
      {/* 肚皮纹路（横向弧线） */}
      <path d="M40 96 Q52 100 64 96" stroke="#E8D890" strokeWidth="1.2" fill="none" opacity="0.5" />
      <path d="M40 104 Q52 108 64 104" stroke="#E8D890" strokeWidth="1.2" fill="none" opacity="0.4" />

      {/* 头部 */}
      <circle cx="52" cy="56" r="30" fill="url(#ch-body)" />
      <circle cx="52" cy="56" r="30" fill="url(#ch-shadow)" />

      {/* 左眼 */}
      <g className="mascot-eye">
        <circle cx="40" cy="50" r="8.5" fill="#162420" />
        <circle cx="42.5" cy="47" r="3.5" fill="white" />
        <circle cx="44.5" cy="45.5" r="1.5" fill="white" opacity="0.75" />
      </g>
      {/* 右眼 */}
      <g className="mascot-eye">
        <circle cx="64" cy="50" r="8.5" fill="#162420" />
        <circle cx="66.5" cy="47" r="3.5" fill="white" />
        <circle cx="68.5" cy="45.5" r="1.5" fill="white" opacity="0.75" />
      </g>

      {/* 鼻孔 */}
      <ellipse cx="49" cy="58" rx="2.2" ry="1.8" fill="#7A2800" />
      <ellipse cx="55" cy="58" rx="2.2" ry="1.8" fill="#7A2800" />

      {/* 嘴 */}
      <path d="M42 64 Q52 73 62 64" stroke="#7A2800" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {evolved && (
        <g>
          <circle cx="52" cy="24" r="11" fill="none" stroke="#FFD700" strokeWidth="1.8" opacity="0.85" />
          <path d="M52 16 l2.5 5 5 1 -3.5 3.5 1 5 -5 -2.5 -5 2.5 1 -5 -3.5 -3.5 5 -1 z" fill="#FFD700" />
        </g>
      )}
    </svg>
  )
}

/** 杰尼龟：地理代表（水系·蓝） */
export function Squirtle({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 128 128" style={s} className={className} aria-hidden>
      <defs>
        <radialGradient id="sq-body" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#AEE4F8" />
          <stop offset="55%" stopColor="#77C8E8" />
          <stop offset="100%" stopColor="#3C8CB8" />
        </radialGradient>
        <radialGradient id="sq-shell-outer" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#C8A070" />
          <stop offset="55%" stopColor="#A6734B" />
          <stop offset="100%" stopColor="#6A4220" />
        </radialGradient>
        <radialGradient id="sq-shell-inner" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#B89060" />
          <stop offset="100%" stopColor="#7A5030" />
        </radialGradient>
        <radialGradient id="sq-belly" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#FEFEF0" />
          <stop offset="100%" stopColor="#EDE8C8" />
        </radialGradient>
        <radialGradient id="sq-shadow" cx="50%" cy="20%" r="80%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#1C5878" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* 龟壳（在身体后方） */}
      <ellipse cx="62" cy="90" rx="38" ry="30" fill="url(#sq-shell-outer)" />
      {/* 壳中央六边形纹 */}
      <ellipse cx="62" cy="88" rx="22" ry="18" fill="url(#sq-shell-inner)" />
      {/* 壳分格线 */}
      <line x1="62" y1="70" x2="62" y2="106" stroke="#6A4220" strokeWidth="1.5" opacity="0.6" />
      <line x1="42" y1="79" x2="82" y2="97" stroke="#6A4220" strokeWidth="1.5" opacity="0.6" />
      <line x1="82" y1="79" x2="42" y2="97" stroke="#6A4220" strokeWidth="1.5" opacity="0.6" />
      {/* 壳边缘横条 */}
      <line x1="26" y1="90" x2="30" y2="90" stroke="#8A6040" strokeWidth="2" opacity="0.5" />
      <line x1="94" y1="90" x2="98" y2="90" stroke="#8A6040" strokeWidth="2" opacity="0.5" />

      {/* 卷尾 */}
      <path d="M90 104 Q110 102 116 88 Q120 74 106 72"
        stroke="#77C8E8" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d="M90 104 Q110 102 116 88 Q120 74 106 72"
        stroke="#AEE4F8" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="106" cy="72" r="5" fill="#AEE4F8" />

      {/* 身体（蓝色前身） */}
      <ellipse cx="60" cy="92" rx="28" ry="22" fill="url(#sq-body)" />
      <ellipse cx="60" cy="92" rx="28" ry="22" fill="url(#sq-shadow)" />

      {/* 肚皮 */}
      <ellipse cx="60" cy="95" rx="16" ry="16" fill="url(#sq-belly)" />

      {/* 头部 */}
      <circle cx="60" cy="56" r="30" fill="url(#sq-body)" />
      <circle cx="60" cy="56" r="30" fill="url(#sq-shadow)" />

      {/* 耳朵（小圆耳） */}
      <circle cx="34" cy="44" r="9" fill="url(#sq-body)" />
      <circle cx="86" cy="44" r="9" fill="url(#sq-body)" />
      <circle cx="34" cy="44" r="6" fill="#AEE4F8" opacity="0.4" />
      <circle cx="86" cy="44" r="6" fill="#AEE4F8" opacity="0.4" />

      {/* 左眼 */}
      <g className="mascot-eye">
        <ellipse cx="46" cy="51" rx="8" ry="9" fill="#18342A" />
        <circle cx="48.5" cy="48" r="3.5" fill="white" />
        <circle cx="50.5" cy="46.5" r="1.5" fill="white" opacity="0.75" />
      </g>
      {/* 右眼 */}
      <g className="mascot-eye">
        <ellipse cx="74" cy="51" rx="8" ry="9" fill="#18342A" />
        <circle cx="76.5" cy="48" r="3.5" fill="white" />
        <circle cx="78.5" cy="46.5" r="1.5" fill="white" opacity="0.75" />
      </g>

      {/* 嘴（微笑 + 下巴弧线） */}
      <path d="M50 62 Q60 71 70 62" stroke="#2A5A7A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M48 67 Q60 75 72 67" stroke="#AEE4F8" strokeWidth="1.5" fill="none" opacity="0.55" />

      {evolved && (
        <g>
          <circle cx="60" cy="22" r="11" fill="none" stroke="#FFD700" strokeWidth="1.8" opacity="0.85" />
          <path d="M60 14 l2.5 5 5 1 -3.5 3.5 1 5 -5 -2.5 -5 2.5 1 -5 -3.5 -3.5 5 -1 z" fill="#FFD700" />
        </g>
      )}
    </svg>
  )
}

/** 妙蛙种子：生物代表（草系·绿） */
export function Bulbasaur({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 128 128" style={s} className={className} aria-hidden>
      <defs>
        <radialGradient id="bl-body" cx="36%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#A8E070" />
          <stop offset="55%" stopColor="#78C850" />
          <stop offset="100%" stopColor="#409030" />
        </radialGradient>
        <radialGradient id="bl-bulb" cx="40%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#98DA68" />
          <stop offset="55%" stopColor="#60A840" />
          <stop offset="100%" stopColor="#346820" />
        </radialGradient>
        <radialGradient id="bl-shadow" cx="50%" cy="20%" r="80%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#204810" stopOpacity="0.22" />
        </radialGradient>
      </defs>

      {/* 背上球茎（在身体后方） */}
      <ellipse cx="64" cy="52" rx="26" ry="24" fill="url(#bl-bulb)" />
      <ellipse cx="64" cy="52" rx="26" ry="24" fill="url(#bl-shadow)" />
      {/* 球茎上的纹路 */}
      <path d="M64 30 Q70 40 64 52 Q58 40 64 30 Z" fill="#347820" opacity="0.55" />
      <path d="M42 46 Q52 49 64 52 Q52 55 42 46 Z" fill="#347820" opacity="0.4" />
      <path d="M86 46 Q76 49 64 52 Q76 55 86 46 Z" fill="#347820" opacity="0.4" />
      {/* 球茎顶部光泽 */}
      <ellipse cx="58" cy="37" rx="8" ry="6" fill="#B8E890" opacity="0.35" />

      {/* 身体 */}
      <ellipse cx="62" cy="90" rx="34" ry="28" fill="url(#bl-body)" />
      <ellipse cx="62" cy="90" rx="34" ry="28" fill="url(#bl-shadow)" />

      {/* 身上深绿斑点 */}
      <circle cx="38" cy="86" r="7" fill="#50A030" opacity="0.5" />
      <circle cx="82" cy="80" r="6" fill="#50A030" opacity="0.5" />
      <circle cx="70" cy="100" r="5.5" fill="#50A030" opacity="0.45" />
      <circle cx="46" cy="100" r="4.5" fill="#50A030" opacity="0.4" />

      {/* 头部 */}
      <circle cx="60" cy="63" r="28" fill="url(#bl-body)" />
      <circle cx="60" cy="63" r="28" fill="url(#bl-shadow)" />

      {/* 头部斑点 */}
      <circle cx="42" cy="56" r="5.5" fill="#50A030" opacity="0.45" />
      <circle cx="74" cy="54" r="4.5" fill="#50A030" opacity="0.45" />

      {/* 眼睛（妙蛙种子有大红眼） */}
      <g className="mascot-eye">
        <circle cx="46" cy="58" r="9" fill="#CC2828" />
        <circle cx="46" cy="58" r="6.5" fill="#881818" />
        <circle cx="48.5" cy="55" r="3.2" fill="white" />
        <circle cx="50.5" cy="53.5" r="1.4" fill="white" opacity="0.75" />
      </g>
      <g className="mascot-eye">
        <circle cx="74" cy="58" r="9" fill="#CC2828" />
        <circle cx="74" cy="58" r="6.5" fill="#881818" />
        <circle cx="76.5" cy="55" r="3.2" fill="white" />
        <circle cx="78.5" cy="53.5" r="1.4" fill="white" opacity="0.75" />
      </g>

      {/* 嘴 */}
      <path d="M50 70 Q60 78 70 70" stroke="#307820" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {evolved && (
        <g>
          <circle cx="62" cy="24" r="11" fill="none" stroke="#FFD700" strokeWidth="1.8" opacity="0.85" />
          <path d="M62 16 l2.5 5 5 1 -3.5 3.5 1 5 -5 -2.5 -5 2.5 1 -5 -3.5 -3.5 5 -1 z" fill="#FFD700" />
        </g>
      )}
    </svg>
  )
}

/** 伊布：语文代表（一般系·棕） */
export function Eevee({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 128 128" style={s} className={className} aria-hidden>
      <defs>
        <radialGradient id="ev-body" cx="36%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#D8B878" />
          <stop offset="55%" stopColor="#C09050" />
          <stop offset="100%" stopColor="#805820" />
        </radialGradient>
        <radialGradient id="ev-ruff" cx="48%" cy="35%" r="68%">
          <stop offset="0%" stopColor="#FFFBF5" />
          <stop offset="55%" stopColor="#F8E8D0" />
          <stop offset="100%" stopColor="#E0C898" />
        </radialGradient>
        <radialGradient id="ev-tail" cx="32%" cy="22%" r="72%">
          <stop offset="0%" stopColor="#DECA90" />
          <stop offset="55%" stopColor="#C09050" />
          <stop offset="100%" stopColor="#785020" />
        </radialGradient>
        <radialGradient id="ev-shadow" cx="50%" cy="20%" r="80%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#5A2800" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* 蓬松大尾巴 */}
      <path
        d="M76 96 Q102 84 116 64 Q108 72 104 68 Q118 50 110 36 Q96 56 90 66 Q108 48 96 38 Q78 58 76 78 Z"
        fill="url(#ev-tail)"
      />
      {/* 尾巴尖端奶油色 */}
      <path
        d="M90 66 Q108 48 96 38 Q84 54 82 66 Z"
        fill="url(#ev-ruff)" opacity="0.8"
      />
      {/* 尾巴光泽 */}
      <path d="M80 84 Q98 72 108 56" stroke="#DECA90" strokeWidth="3" fill="none" opacity="0.45" strokeLinecap="round" />

      {/* 左耳（大尖耳） */}
      <path d="M30 44 L18 8 L52 18 Z" fill="url(#ev-body)" />
      <path d="M32 42 L22 14 L50 22 Z" fill="#603010" opacity="0.4" />
      {/* 右耳 */}
      <path d="M76 44 L96 8 L68 18 Z" fill="url(#ev-body)" />
      <path d="M74 42 L90 14 L66 22 Z" fill="#603010" opacity="0.4" />

      {/* 奶油领（蓬松感，多个椭圆叠加） */}
      <ellipse cx="54" cy="86" rx="32" ry="22" fill="url(#ev-ruff)" />
      <ellipse cx="54" cy="82" rx="26" ry="18" fill="url(#ev-ruff)" />
      <ellipse cx="54" cy="78" rx="20" ry="14" fill="url(#ev-ruff)" />

      {/* 身体 */}
      <ellipse cx="54" cy="92" rx="26" ry="22" fill="url(#ev-body)" />
      <ellipse cx="54" cy="92" rx="26" ry="22" fill="url(#ev-shadow)" />

      {/* 头部 */}
      <circle cx="54" cy="56" r="30" fill="url(#ev-body)" />
      <circle cx="54" cy="56" r="30" fill="url(#ev-shadow)" />

      {/* 下巴领延伸 */}
      <ellipse cx="54" cy="78" rx="18" ry="10" fill="url(#ev-ruff)" />

      {/* 左眼 */}
      <g className="mascot-eye">
        <circle cx="42" cy="52" r="8.5" fill="#1E100A" />
        <circle cx="44.5" cy="49" r="3.4" fill="white" />
        <circle cx="46.5" cy="47.5" r="1.5" fill="white" opacity="0.75" />
      </g>
      {/* 右眼 */}
      <g className="mascot-eye">
        <circle cx="66" cy="52" r="8.5" fill="#1E100A" />
        <circle cx="68.5" cy="49" r="3.4" fill="white" />
        <circle cx="70.5" cy="47.5" r="1.5" fill="white" opacity="0.75" />
      </g>

      {/* 鼻子（小椭圆） */}
      <ellipse cx="54" cy="60" rx="3.2" ry="2.6" fill="#5A2800" />

      {/* 嘴 */}
      <path d="M46 65 Q54 73 62 65" stroke="#5A2800" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {evolved && (
        <g>
          <circle cx="54" cy="22" r="11" fill="none" stroke="#FFD700" strokeWidth="1.8" opacity="0.85" />
          <path d="M54 14 l2.5 5 5 1 -3.5 3.5 1 5 -5 -2.5 -5 2.5 1 -5 -3.5 -3.5 5 -1 z" fill="#FFD700" />
        </g>
      )}
    </svg>
  )
}

/** 水伊布：英语代表（水系·蓝） */
export function Vaporeon({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 128 128" style={s} className={className} aria-hidden>
      <defs>
        <radialGradient id="va-body" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#A0C8FF" />
          <stop offset="55%" stopColor="#6890F0" />
          <stop offset="100%" stopColor="#3050C0" />
        </radialGradient>
        <radialGradient id="va-fin" cx="38%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#E8F8FF" />
          <stop offset="55%" stopColor="#BFDFFF" />
          <stop offset="100%" stopColor="#80B8E8" />
        </radialGradient>
        <radialGradient id="va-shadow" cx="50%" cy="20%" r="80%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#1830A0" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* 鱼形尾巴 */}
      <path d="M44 114 Q36 122 28 118 Q44 116 60 114 Q76 116 92 118 Q84 122 76 114 Z"
        fill="url(#va-fin)" />
      <path d="M48 112 Q60 108 72 112 Q64 104 60 102 Q56 104 48 112 Z"
        fill="url(#va-body)" />

      {/* 头顶背鳍 */}
      <path d="M54 38 Q50 20 54 6 Q58 20 62 38 Z" fill="url(#va-fin)" />
      <path d="M56 36 Q54 24 56 12 Q58 24 60 36 Z" fill="#A8D8FF" opacity="0.5" />

      {/* 颈部鳍领（左右 + 中间） */}
      <path d="M32 76 Q22 60 28 44 Q38 62 48 70 Z" fill="url(#va-fin)" opacity="0.88" />
      <path d="M88 76 Q98 60 92 44 Q82 62 72 70 Z" fill="url(#va-fin)" opacity="0.88" />
      <ellipse cx="60" cy="80" rx="30" ry="14" fill="url(#va-fin)" opacity="0.65" />

      {/* 身体 */}
      <ellipse cx="60" cy="94" rx="28" ry="22" fill="url(#va-body)" />
      <ellipse cx="60" cy="94" rx="28" ry="22" fill="url(#va-shadow)" />
      {/* 腹部浅色 */}
      <ellipse cx="60" cy="97" rx="16" ry="16" fill="url(#va-fin)" opacity="0.45" />

      {/* 头部 */}
      <circle cx="60" cy="56" r="30" fill="url(#va-body)" />
      <circle cx="60" cy="56" r="30" fill="url(#va-shadow)" />

      {/* 耳朵 */}
      <path d="M36 42 L26 10 L52 22 Z" fill="url(#va-body)" />
      <path d="M84 42 L94 10 L68 22 Z" fill="url(#va-body)" />

      {/* 头部蓝色六边纹（水伊布特征） */}
      <circle cx="60" cy="52" r="18" fill="none" stroke="#BFDFFF" strokeWidth="2" opacity="0.5" />
      <circle cx="60" cy="52" r="12" fill="none" stroke="#BFDFFF" strokeWidth="1.5" opacity="0.35" />

      {/* 左眼（深蓝色） */}
      <g className="mascot-eye">
        <circle cx="46" cy="52" r="8.5" fill="#1830A0" />
        <circle cx="46" cy="52" r="6" fill="#0820D8" />
        <circle cx="48.5" cy="49" r="3.2" fill="white" />
        <circle cx="50.5" cy="47.5" r="1.4" fill="white" opacity="0.75" />
      </g>
      {/* 右眼 */}
      <g className="mascot-eye">
        <circle cx="74" cy="52" r="8.5" fill="#1830A0" />
        <circle cx="74" cy="52" r="6" fill="#0820D8" />
        <circle cx="76.5" cy="49" r="3.2" fill="white" />
        <circle cx="78.5" cy="47.5" r="1.4" fill="white" opacity="0.75" />
      </g>

      {/* 嘴 */}
      <path d="M50 62 Q60 70 70 62" stroke="#2040A0" strokeWidth="2.2" fill="none" strokeLinecap="round" />

      {evolved && (
        <g>
          <circle cx="60" cy="22" r="11" fill="none" stroke="#FFD700" strokeWidth="1.8" opacity="0.85" />
          <path d="M60 14 l2.5 5 5 1 -3.5 3.5 1 5 -5 -2.5 -5 2.5 1 -5 -3.5 -3.5 5 -1 z" fill="#FFD700" />
        </g>
      )}
    </svg>
  )
}

/** 太阳伊布：政治代表（超能力·紫） */
export function Espeon({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 128 128" style={s} className={className} aria-hidden>
      <defs>
        <radialGradient id="es-body" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#F0C0F0" />
          <stop offset="55%" stopColor="#D8A0D8" />
          <stop offset="100%" stopColor="#9060A0" />
        </radialGradient>
        <radialGradient id="es-gem" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#FF90B8" />
          <stop offset="55%" stopColor="#CC3366" />
          <stop offset="100%" stopColor="#880020" />
        </radialGradient>
        <radialGradient id="es-shadow" cx="50%" cy="20%" r="80%">
          <stop offset="60%" stopColor="transparent" />
          <stop offset="100%" stopColor="#5A2080" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* 分叉尾（太阳伊布标志） */}
      <path d="M52 112 Q42 122 30 126" stroke="#D8A0D8" strokeWidth="11" fill="none" strokeLinecap="round" />
      <path d="M52 112 Q42 122 30 126" stroke="#F0C0F0" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M68 112 Q78 122 90 126" stroke="#D8A0D8" strokeWidth="11" fill="none" strokeLinecap="round" />
      <path d="M68 112 Q78 122 90 126" stroke="#F0C0F0" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* 尾根 */}
      <ellipse cx="60" cy="108" rx="12" ry="8" fill="url(#es-body)" />

      {/* 身体（纤细猫形） */}
      <ellipse cx="60" cy="90" rx="24" ry="22" fill="url(#es-body)" />
      <ellipse cx="60" cy="90" rx="24" ry="22" fill="url(#es-shadow)" />
      {/* 腹部浅色 */}
      <ellipse cx="60" cy="93" rx="13" ry="13" fill="#F5D8F5" opacity="0.45" />

      {/* 左耳（大而尖） */}
      <path d="M32 46 L20 8 L54 20 Z" fill="url(#es-body)" />
      <path d="M34 44 L24 14 L52 24 Z" fill="#8050A0" opacity="0.4" />
      {/* 右耳 */}
      <path d="M88 46 L104 8 L70 20 Z" fill="url(#es-body)" />
      <path d="M86 44 L100 14 L72 24 Z" fill="#8050A0" opacity="0.4" />

      {/* 头部 */}
      <circle cx="60" cy="56" r="30" fill="url(#es-body)" />
      <circle cx="60" cy="56" r="30" fill="url(#es-shadow)" />

      {/* 额头红宝石（太阳伊布特征） */}
      <ellipse cx="60" cy="41" rx="7" ry="8" fill="url(#es-gem)" />
      <ellipse cx="58" cy="39" rx="2.8" ry="3.5" fill="white" opacity="0.4" />
      <ellipse cx="57" cy="38.5" rx="1.2" ry="1.5" fill="white" opacity="0.55" />

      {/* 左眼（紫色） */}
      <g className="mascot-eye">
        <circle cx="46" cy="56" r="8.5" fill="#4A1060" />
        <circle cx="46" cy="56" r="6" fill="#7020A0" />
        <circle cx="48.5" cy="53" r="3.2" fill="white" />
        <circle cx="50.5" cy="51.5" r="1.4" fill="white" opacity="0.75" />
      </g>
      {/* 右眼 */}
      <g className="mascot-eye">
        <circle cx="74" cy="56" r="8.5" fill="#4A1060" />
        <circle cx="74" cy="56" r="6" fill="#7020A0" />
        <circle cx="76.5" cy="53" r="3.2" fill="white" />
        <circle cx="78.5" cy="51.5" r="1.4" fill="white" opacity="0.75" />
      </g>

      {/* 嘴 */}
      <path d="M52 64 Q60 71 68 64" stroke="#7030A0" strokeWidth="2" fill="none" strokeLinecap="round" />

      {evolved && (
        <g>
          <circle cx="60" cy="16" r="11" fill="none" stroke="#FFD700" strokeWidth="1.8" opacity="0.85" />
          <path d="M60 8 l2.5 5 5 1 -3.5 3.5 1 5 -5 -2.5 -5 2.5 1 -5 -3.5 -3.5 5 -1 z" fill="#FFD700" />
        </g>
      )}
    </svg>
  )
}

/** 月亮伊布：历史代表（恶系·黑） */
export function Umbreon({ size = 48, evolved = false, className }: MascotProps) {
  const s: CSSProperties = { width: size, height: size }
  return (
    <svg viewBox="0 0 128 128" style={s} className={className} aria-hidden>
      <defs>
        <radialGradient id="um-body" cx="36%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#3C3C58" />
          <stop offset="55%" stopColor="#1E1E32" />
          <stop offset="100%" stopColor="#0A0A16" />
        </radialGradient>
        <radialGradient id="um-ring" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#FFE840" />
          <stop offset="55%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#B89000" />
        </radialGradient>
        <radialGradient id="um-eye" cx="38%" cy="32%" r="62%">
          <stop offset="0%" stopColor="#FF9090" />
          <stop offset="55%" stopColor="#FF1010" />
          <stop offset="100%" stopColor="#880000" />
        </radialGradient>
        <radialGradient id="um-highlight" cx="35%" cy="30%" r="65%">
          <stop offset="0%" stopColor="#5A5A80" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      {/* 尾巴 */}
      <path d="M78 100 Q108 90 114 66 Q108 72 102 70 Q112 54 108 42"
        stroke="#1E1E32" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M78 100 Q108 90 114 66 Q108 72 102 70 Q112 54 108 42"
        stroke="#3C3C58" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* 尾巴金环 */}
      <circle cx="106" cy="70" r="6" fill="none" stroke="url(#um-ring)" strokeWidth="3" />

      {/* 左耳 */}
      <path d="M30 44 L20 8 L52 18 Z" fill="url(#um-body)" />
      <path d="M30 44 L20 8 L52 18 Z" fill="url(#um-highlight)" />
      {/* 左耳金环 */}
      <ellipse cx="33" cy="28" rx="6" ry="8" fill="none" stroke="url(#um-ring)" strokeWidth="3" />

      {/* 右耳 */}
      <path d="M82 44 L96 8 L70 18 Z" fill="url(#um-body)" />
      <path d="M82 44 L96 8 L70 18 Z" fill="url(#um-highlight)" />
      {/* 右耳金环 */}
      <ellipse cx="81" cy="28" rx="6" ry="8" fill="none" stroke="url(#um-ring)" strokeWidth="3" />

      {/* 身体 */}
      <ellipse cx="58" cy="90" rx="28" ry="24" fill="url(#um-body)" />
      <ellipse cx="58" cy="90" rx="28" ry="24" fill="url(#um-highlight)" />
      {/* 身上金环（左右各一） */}
      <circle cx="38" cy="86" r="7" fill="none" stroke="url(#um-ring)" strokeWidth="3" />
      <circle cx="78" cy="86" r="7" fill="none" stroke="url(#um-ring)" strokeWidth="3" />

      {/* 头部 */}
      <circle cx="58" cy="56" r="30" fill="url(#um-body)" />
      <circle cx="58" cy="56" r="30" fill="url(#um-highlight)" />
      {/* 额头金环（月亮伊布特征） */}
      <circle cx="58" cy="42" r="7" fill="none" stroke="url(#um-ring)" strokeWidth="3" />

      {/* 左眼（红色发光） */}
      <g className="mascot-eye">
        <circle cx="44" cy="58" r="9" fill="#880000" />
        <circle cx="44" cy="58" r="6.5" fill="url(#um-eye)" />
        <circle cx="46.5" cy="55.5" r="2.8" fill="white" opacity="0.55" />
        <circle cx="48" cy="54.5" r="1.2" fill="white" opacity="0.45" />
      </g>
      {/* 右眼 */}
      <g className="mascot-eye">
        <circle cx="72" cy="58" r="9" fill="#880000" />
        <circle cx="72" cy="58" r="6.5" fill="url(#um-eye)" />
        <circle cx="74.5" cy="55.5" r="2.8" fill="white" opacity="0.55" />
        <circle cx="76" cy="54.5" r="1.2" fill="white" opacity="0.45" />
      </g>

      {/* 嘴（神秘微笑） */}
      <path d="M50 66 Q58 73 66 66" stroke="#4C4C70" strokeWidth="2" fill="none" strokeLinecap="round" />

      {evolved && (
        <g>
          <circle cx="58" cy="20" r="11" fill="none" stroke="#FFD700" strokeWidth="1.8" opacity="0.85" />
          <path d="M58 12 l2.5 5 5 1 -3.5 3.5 1 5 -5 -2.5 -5 2.5 1 -5 -3.5 -3.5 5 -1 z" fill="#FFD700" />
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
