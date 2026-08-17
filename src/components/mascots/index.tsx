/**
 * 宝可梦像素风精灵 SVG 组件 v3（32×32 像素格）
 * 致敬版自绘，风格参考 Game Boy 时代像素精灵。
 * 版权说明：宝可梦为任天堂/Game Freak 版权 IP，本站为私人学习用途。
 */
import React from 'react'
import type { CSSProperties } from 'react'

interface MascotProps {
  size?: number
  evolved?: boolean
  className?: string
}
type Palette = Record<string, string>

function renderPixels(rows: string[], palette: Palette): React.ReactNode[] {
  const rects: React.ReactNode[] = []
  rows.forEach((row, y) => {
    let i = 0
    while (i < row.length) {
      const ch = row[i]
      if (ch !== '.' && palette[ch]) {
        let run = 1
        while (i + run < row.length && row[i + run] === ch) run++
        rects.push(<rect key={`${y}-${i}`} x={i} y={y} width={run} height={1} fill={palette[ch]} />)
        i += run
      } else {
        i++
      }
    }
  })
  return rects
}

// 像素皇冠（evolved=true 时显示），crownX/crownY 为左上角坐标
function renderCrown(crownX: number, crownY: number): React.ReactNode[] {
  const G = '#FFD700'
  const B = '#B8860B'
  // 5x4 小皇冠
  const crown = [
    // y=0: 三个尖
    { x: crownX,     y: crownY,     w: 1, h: 1, c: G },
    { x: crownX + 2, y: crownY,     w: 1, h: 1, c: G },
    { x: crownX + 4, y: crownY,     w: 1, h: 1, c: G },
    // y=1: 连接
    { x: crownX,     y: crownY + 1, w: 5, h: 1, c: G },
    // y=2: 主体
    { x: crownX,     y: crownY + 2, w: 5, h: 1, c: G },
    // y=3: 底边（暗色）
    { x: crownX,     y: crownY + 3, w: 5, h: 1, c: B },
  ]
  return crown.map((r, i) => (
    <rect key={`crown-${i}`} x={r.x} y={r.y} width={r.w} height={r.h} fill={r.c} />
  ))
}

interface PixelSvgProps {
  rows: string[]
  palette: Palette
  size: number
  className?: string
  evolved: boolean
  crownX: number
  crownY: number
}

function PixelSvg({ rows, palette, size, className, evolved, crownX, crownY }: PixelSvgProps) {
  const s: CSSProperties = { width: size, height: size, imageRendering: 'pixelated' }
  return (
    <svg
      viewBox="0 0 32 32"
      style={s}
      className={className}
      shapeRendering="crispEdges"
      aria-hidden
    >
      {renderPixels(rows, palette)}
      {evolved && renderCrown(crownX, crownY)}
    </svg>
  )
}

// ─────────────────────────────────────────────
// 皮卡丘  B=黑 Y=黄 D=暗黄 R=红 W=白
// ─────────────────────────────────────────────
const PIKACHU_PALETTE: Palette = {
  B: '#333333',
  Y: '#FFD700',
  D: '#B8860B',
  R: '#FF4444',
  W: '#FFFFFF',
}

const PIKACHU_PIXELS: string[] = [
  '....BBYBB....BBYBB..............',  // 0  耳朵顶
  '....BYYBB....BYYBB..............',  // 1
  '....BYYBB....BYYBB..............',  // 2
  '....BYYBB....BYYBB..............',  // 3
  '....BYYYB....BYYYB..............',  // 4
  '....BYYYB....BYYYB..............',  // 5
  '...BYYYYBBBBBYYYYB..............',  // 6  耳根连头
  '..BYYYYYYYYYYYYYYB..............',  // 7  头顶
  '.BYYYYYYYYYYYYYYYYB.............',  // 8
  '.BYYYYYYYYYYYYYYYYB.............',  // 9
  'BYYYYYYYYYYYYYYYYYYB............',  // 10
  'BYYBBYYYYYYYYBBYYYYB............',  // 11 眼睛行
  'BYYBWYYYYYYYYBWYYYYB............',  // 12 眼高光
  'BYYBBYYYYYYYYBBYYYYB............',  // 13
  'BYYYYYYYYYYYYYYYYYYY............',  // 14 鼻子行
  'BYYYYYBBBBYYYYYYYY..............',  // 15 嘴巴
  '.BYYYYYYYYYYYYYYYYB.............',  // 16
  '.BRRYYYYYYYYYYYYRRB.............',  // 17 脸颊
  '..BRRYYYYYYYYYYRRB..............',  // 18
  '..BYYYYYYYYYYYYYYY..............',  // 19
  '...BYYYYYYYYYYYYB...............',  // 20 颈部
  '...BYYYYYYYYYYYYB...............',  // 21
  '..BYYYYYYYYYYYYYYB..............',  // 22 身体
  '..BYYYYYYYYYYYYYYB..............',  // 23
  '..BYYYYYYYYYYYYYYB.....DDDDD....',  // 24 尾巴
  '..BYYYYYYYYYYYYYYB...DDDDDDDDD..',  // 25
  '...BYYYYYYYYYYYYB..DDDDDDDDDDD..',  // 26
  '...BYYYYYYYYYYYYB....DDDDDDD....',  // 27
  '....BBBBBBBBBBB......DDDDD......',  // 28
  '....BYYB...BYYB.......DDD.......',  // 29 腿
  '....BYYB...BYYB........D........',  // 30
  '....BYYB...BYYB.................',  // 31
]

export function Pikachu({ size = 48, evolved = false, className }: MascotProps) {
  return (
    <PixelSvg
      rows={PIKACHU_PIXELS}
      palette={PIKACHU_PALETTE}
      size={size}
      className={className}
      evolved={evolved}
      crownX={7}
      crownY={0}
    />
  )
}

// ─────────────────────────────────────────────
// 小火龙  B=黑 O=橙 D=暗橙 F=火焰黄 W=白
// ─────────────────────────────────────────────
const CHARMANDER_PALETTE: Palette = {
  B: '#333333',
  O: '#FF6B35',
  D: '#CC4400',
  F: '#FFD700',
  W: '#FFFFFF',
}

const CHARMANDER_PIXELS: string[] = [
  '..........BBBBB.................',  // 0
  '.........BOOOOOB................',  // 1
  '........BOOOOOOB................',  // 2
  '.......BOOOOOOOB................',  // 3
  '.......BOOOOOOOB................',  // 4
  '.......BOBBOOBBOB...............',  // 5  眼睛
  '.......BOBWOOOBWOB..............',  // 6  高光
  '.......BOBBOOBBOB...............',  // 7
  '.......BOOOOOOOB................',  // 8
  '........BOOOOOOB................',  // 9
  '.......BWWWWWWWB................',  // 10 腹部白
  '......BWWWWWWWWWB...............',  // 11
  '......BWWWWWWWWWB...............',  // 12
  '.....BOOOOOOOOOOB...............',  // 13 身体
  '....BOOOOOOOOOOOB...............',  // 14
  '....BOOOOOOOOOOOB...............',  // 15
  '....BOOOOOOOOOOOB...............',  // 16
  '....BOOOOOOOOOOOB...............',  // 17
  '....BOOOOOOOOOOOB...............',  // 18
  '....BOOOOOOOOOOOB...............',  // 19
  '....BOOOOOOOOOOOB...............',  // 20
  '....BOOOOOOOOOOOB...............',  // 21
  '....BOOOOOOOOOOOB...............',  // 22
  '....BOOOOOOOOOOOB...............',  // 23
  '...BOOOOOOOOOOOOOOB.............',  // 24
  '..BOOOB.....BOOOOOB.BBBBB.......',  // 25 腿+尾巴
  '..BOOOB.....BOOOOOB.BOOOOB......',  // 26
  '..BOOOB.....BOOOOOB..BOOOB......',  // 27
  '..BDDDB.....BDDDDDB...BFFB......',  // 28 爪+火焰
  '...BBB.......BBBBB....BFFB......',  // 29
  '..................BFFFB..........',  // 30 火焰
  '..................BFFFB..........',  // 31
]

export function Charmander({ size = 48, evolved = false, className }: MascotProps) {
  return (
    <PixelSvg
      rows={CHARMANDER_PIXELS}
      palette={CHARMANDER_PALETTE}
      size={size}
      className={className}
      evolved={evolved}
      crownX={10}
      crownY={0}
    />
  )
}

// ─────────────────────────────────────────────
// 杰尼龟  B=黑 L=蓝 D=暗蓝 C=肚皮 S=壳棕 W=白
// ─────────────────────────────────────────────
const SQUIRTLE_PALETTE: Palette = {
  B: '#333333',
  L: '#5BC0EB',
  D: '#2980B9',
  C: '#F5DEB3',
  S: '#8B6914',
  W: '#FFFFFF',
}

const SQUIRTLE_PIXELS: string[] = [
  '.........BBBBB..................',  // 0
  '........BLLLLB..................',  // 1
  '.......BLLLLLLB.................',  // 2
  '.......BLLLLLLB.................',  // 3
  '.......BLLLLLLB.................',  // 4
  '.......BLBBLLBBLLB..............',  // 5  眼睛
  '.......BLBWLLBWLLB..............',  // 6
  '.......BLBBLLBBLLB..............',  // 7
  '.......BLLLLLLLLB...............',  // 8
  '........BLLLLLLB................',  // 9
  '........BCCCCCCB................',  // 10 腹部
  '.......BCCCCCCCCB...............',  // 11
  '.......BCCCCCCCCB...............',  // 12
  '......BSSSSSSSSSSB..............',  // 13 龟壳
  '.....BSSSSSSSSSSSSB.............',  // 14
  '.....BSSSSSSSSSSSSB.............',  // 15
  '.....BSSSSSSSSSSSSB.............',  // 16
  '.....BSSSSSSSSSSSSB.............',  // 17
  '.....BSSSSSSSSSSSSB.............',  // 18
  '.....BSSSSSSSSSSSSB.............',  // 19
  '.....BSSSSSSSSSSSSB.............',  // 20
  '.....BSSSSSSSSSSSSB.............',  // 21
  '......BSSSSSSSSSSB..............',  // 22
  '.......BLLLLLLLLB...............',  // 23 身体下
  '.......BLLLLLLLLB...............',  // 24
  '......BLLLLLLLLLLB..............',  // 25
  '....BLLB......BLLB..............',  // 26 腿
  '....BLLB......BLLB..............',  // 27
  '....BLLB......BLLB..............',  // 28
  '....BLLB......BLLB..............',  // 29
  '....BDDB......BDDB..............',  // 30 爪
  '....BBBB......BBBB..............',  // 31
]

export function Squirtle({ size = 48, evolved = false, className }: MascotProps) {
  return (
    <PixelSvg
      rows={SQUIRTLE_PIXELS}
      palette={SQUIRTLE_PALETTE}
      size={size}
      className={className}
      evolved={evolved}
      crownX={10}
      crownY={0}
    />
  )
}

// ─────────────────────────────────────────────
// 妙蛙种子  B=黑 G=绿 D=暗绿 R=红 W=白
// ─────────────────────────────────────────────
const BULBASAUR_PALETTE: Palette = {
  B: '#333333',
  G: '#68BB59',
  D: '#3D7A33',
  R: '#E74C3C',
  W: '#FFFFFF',
}

const BULBASAUR_PIXELS: string[] = [
  '..........BDDDB..................',  // 0  球茎顶
  '.........BDDDDDB.................',  // 1
  '.........BDDDGDB.................',  // 2
  '........BDDDDDDDB................',  // 3
  '........BDDDDDDDB................',  // 4
  '........BDDDDDDDB................',  // 5
  '.........BDDDDDB.................',  // 6
  '..........BDDDB..................',  // 7
  '........BGGGGGGB.................',  // 8  头顶
  '.......BGGGGGGGGB................',  // 9
  '.......BGGGGGGGGB................',  // 10
  '.......BGRRGGGRRB................',  // 11 眼睛（红）
  '.......BGRWGGGWRB................',  // 12 高光
  '.......BGRRGGGRRB................',  // 13
  '.......BGGGGGGGGB................',  // 14
  '........BGGGGGGB.................',  // 15
  '......BGGGGGGGGGGB...............',  // 16 身体
  '.....BGGGGGGGGGGGGB..............',  // 17
  '.....BGGGGGGGGGGGGB..............',  // 18
  '.....BGGGGGGGGGGGGB..............',  // 19
  '.....BGGGGGGGGGGGGB..............',  // 20
  '.....BGGGGGGGGGGGGB..............',  // 21
  '.....BGGGGGGGGGGGGB..............',  // 22
  '.....BGGGGGGGGGGGGB..............',  // 23
  '.....BGGGGGGGGGGGGB..............',  // 24
  '....BGGGGGGGGGGGGGGB.............',  // 25
  '...BGGB..BGGGGB..BGGB............',  // 26 四肢
  '...BGGB..BGGGGB..BGGB............',  // 27
  '...BGGB..BGGGGB..BGGB............',  // 28
  '...BGGB..BGGGGB..BGGB............',  // 29
  '...BGGB..BGGGGB..BGGB............',  // 30
  '...BDDB..BDDDDB..BDDB............',  // 31 爪
]

export function Bulbasaur({ size = 48, evolved = false, className }: MascotProps) {
  return (
    <PixelSvg
      rows={BULBASAUR_PIXELS}
      palette={BULBASAUR_PALETTE}
      size={size}
      className={className}
      evolved={evolved}
      crownX={11}
      crownY={0}
    />
  )
}

// ─────────────────────────────────────────────
// 伊布  B=黑 T=棕 D=暗棕 W=奶油白
// ─────────────────────────────────────────────
const EEVEE_PALETTE: Palette = {
  B: '#333333',
  T: '#C49A6C',
  D: '#8B6914',
  W: '#FAEBD7',
}

const EEVEE_PIXELS: string[] = [
  '....BTTB....BTTB................',  // 0  耳朵
  '....BTTB....BTTB................',  // 1
  '....BTTB....BTTB................',  // 2
  '....BTTB....BTTB................',  // 3
  '....BTTB....BTTB................',  // 4
  '....BTTB....BTTB................',  // 5
  '...BTTTBBBBBTTTB................',  // 6
  '..BTTTTTTTTTTTTB................',  // 7  头
  '..BTTTTTTTTTTTTB................',  // 8
  '..BTBBTTTTTTBBTB................',  // 9  眼睛
  '..BTBWTTTTTTBWTB................',  // 10 高光
  '..BTBBTTTTTTBBTB................',  // 11
  '..BTTTTTTTTTTTTB................',  // 12
  '..BTTTTTTTTTTTTB................',  // 13
  '...BWWWWWWWWWWB.................',  // 14 领毛
  '..BWWWWWWWWWWWWB................',  // 15
  '..BWWWWWWWWWWWWB................',  // 16
  '..BWWWWWWWWWWWWB................',  // 17
  '...BTTTTTTTTTTTB................',  // 18 身体
  '...BTTTTTTTTTTTB................',  // 19
  '...BTTTTTTTTTTTB................',  // 20
  '...BTTTTTTTTTTTB................',  // 21
  '...BTTTTTTTTTTTB................',  // 22
  '...BTTTTTTTTTTTB................',  // 23
  '...BTTTTTTTTTTTB....DDDDDDDDD...',  // 24 尾巴
  '...BTTTTTTTTTTTB...DDDDDDDDDDD..',  // 25
  '...BTTTTTTTTTTTB..DDDDDDDDDDDDD.',  // 26
  '....BBBBBBBBBBB...DDDDDDDDDDDDD.',  // 27
  '....BTTB...BTTB....DDDDDDDDDDD..',  // 28 腿
  '....BTTB...BTTB.....DDDDDDDDD...',  // 29
  '....BTTB...BTTB......DDDDDDD....',  // 30
  '....BDDB...BDDB..................',  // 31
]

export function Eevee({ size = 48, evolved = false, className }: MascotProps) {
  return (
    <PixelSvg
      rows={EEVEE_PIXELS}
      palette={EEVEE_PALETTE}
      size={size}
      className={className}
      evolved={evolved}
      crownX={8}
      crownY={0}
    />
  )
}

// ─────────────────────────────────────────────
// 水伊布  B=黑 L=蓝 D=暗蓝 W=浅蓝
// ─────────────────────────────────────────────
const VAPOREON_PALETTE: Palette = {
  B: '#333333',
  L: '#5BC0EB',
  D: '#2471A3',
  W: '#D4F1F9',
}

const VAPOREON_PIXELS: string[] = [
  '........BWWB......................',  // 0  背鳍
  '.......BWWWWB.....................',  // 1
  '......BWWWWWWB....................',  // 2
  '.....BWWWWWWWWB...................',  // 3
  '....BWWWWWWWWWWB..................',  // 4
  '....BLLLLLLLLLLB..................',  // 5  头顶
  '...BLLLLLLLLLLLLB.................',  // 6
  '...BLLLLLLLLLLLLB.................',  // 7
  '...BLLLLLLLLLLLLB.................',  // 8
  '...BLBBLLLLLLBBLB.................',  // 9  眼睛
  '...BLBWLLLLLLBWLB.................',  // 10 高光
  '...BLBBLLLLLLBBLB.................',  // 11
  '...BLLLLLLLLLLLLB.................',  // 12
  '....BLLLLLLLLLLB..................',  // 13
  '....BWWWWWWWWWWB..................',  // 14 颈环
  '....BWWWWWWWWWWB..................',  // 15
  '....BLLLLLLLLLLB..................',  // 16 身体
  '....BLLLLLLLLLLB..................',  // 17
  '....BLLLLLLLLLLB..................',  // 18
  '....BLLLLLLLLLLB..................',  // 19
  '....BLLLLLLLLLLB..................',  // 20
  '....BLLLLLLLLLLB..................',  // 21
  '....BLLLLLLLLLLB..................',  // 22
  '....BLLLLLLLLLLB..................',  // 23
  '....BLLLLLLLLLLB.BDDDDDDDDDDDDDB.',  // 24 鱼尾
  '....BLLLLLLLLLLB.BDDDDDDDDDDDDDB.',  // 25
  '....BLLLLLLLLLLB.BDDDDDDDDDDDDDB.',  // 26
  '.....BBBBBBBBBBB.BDDDDDDDDDDDDDB.',  // 27
  '.....BLLB..BLLB..BDDDDDDDDDDDDDB.',  // 28 腿
  '.....BLLB..BLLB..BDDDDDDDDDDDDDB.',  // 29
  '.....BLLB..BLLB...................',  // 30
  '.....BDDB..BDDB...................',  // 31
]

export function Vaporeon({ size = 48, evolved = false, className }: MascotProps) {
  return (
    <PixelSvg
      rows={VAPOREON_PIXELS}
      palette={VAPOREON_PALETTE}
      size={size}
      className={className}
      evolved={evolved}
      crownX={9}
      crownY={0}
    />
  )
}

// ─────────────────────────────────────────────
// 太阳伊布  B=黑 P=淡紫 D=紫 R=红 W=白
// ─────────────────────────────────────────────
const ESPEON_PALETTE: Palette = {
  B: '#333333',
  P: '#D8A0D8',
  D: '#9B59B6',
  R: '#E74C3C',
  W: '#FFFFFF',
}

const ESPEON_PIXELS: string[] = [
  '....BPPB....BPPB................',  // 0  耳朵
  '....BPPB....BPPB................',  // 1
  '....BPPB....BPPB................',  // 2
  '....BPPB....BPPB................',  // 3
  '....BPPB....BPPB................',  // 4
  '....BPPB....BPPB................',  // 5
  '...BPPPBBBBBBPPPB...............',  // 6
  '..BPPPPPPPPPPPPPB...............',  // 7  头
  '..BPPPPPPPPPPPPPB...............',  // 8
  '..BPBBPPPPPPPBBPB...............',  // 9  眼睛
  '..BPBDPPPPPPPDBPB...............',  // 10 紫色眼
  '..BPBBPPPPPPPBBPB...............',  // 11
  '..BPPPPPPPPPPPPPB...............',  // 12
  '..BPPPPRPPPPPPPB................',  // 13 额头宝石
  '..BPPPPRRPPPPPPB................',  // 14
  '..BPPPPPPPPPPPPPB...............',  // 15
  '...BPPPPPPPPPPPB................',  // 16 身体
  '...BPPPPPPPPPPPB................',  // 17
  '...BPPPPPPPPPPPB................',  // 18
  '...BPPPPPPPPPPPB................',  // 19
  '...BPPPPPPPPPPPB................',  // 20
  '...BPPPPPPPPPPPB................',  // 21
  '...BPPPPPPPPPPPB................',  // 22
  '...BPPPPPPPPPPPB................',  // 23
  '...BPPPPPPPPPPPB................',  // 24
  '....BBBBBBBBBBB.................',  // 25
  '....BPPB...BPPB.BDDDDDDDB.......',  // 26 腿+分叉尾
  '....BPPB...BPPB.BDDDDDDDB.......',  // 27
  '....BPPB...BPPB.BDDDDDDDB.......',  // 28
  '....BPPB...BPPB.BDDDDDDDB.......',  // 29
  '....BPPB...BPPB.BDDDDDDDB.......',  // 30
  '....BDDB...BDDB.BDDDDDDDB.......',  // 31
]

export function Espeon({ size = 48, evolved = false, className }: MascotProps) {
  return (
    <PixelSvg
      rows={ESPEON_PIXELS}
      palette={ESPEON_PALETTE}
      size={size}
      className={className}
      evolved={evolved}
      crownX={9}
      crownY={0}
    />
  )
}

// ─────────────────────────────────────────────
// 月亮伊布  B=深黑 G=金 R=红 H=深灰 W=白
// ─────────────────────────────────────────────
const UMBREON_PALETTE: Palette = {
  B: '#1A1A2A',
  G: '#FFD700',
  R: '#E74C3C',
  H: '#444466',
  W: '#FFFFFF',
}

const UMBREON_PIXELS: string[] = [
  '....BHHB....BHHB................',  // 0  耳朵
  '....BHHB....BHHB................',  // 1
  '....BHHB....BHHB................',  // 2
  '....BGGB....BGGB................',  // 3  金环
  '....BGGB....BGGB................',  // 4
  '....BHHB....BHHB................',  // 5
  '...BHHHHBBBBHHHHB...............',  // 6
  '..BHHHHHHHHHHHHHHB..............',  // 7  头
  '..BHHHHHHHHHHHHHHB..............',  // 8
  '..BHRRHHHHHHHRRHHB..............',  // 9  红眼
  '..BHRWHHHHHHHWRHHB..............',  // 10 高光
  '..BHRRHHHHHHHRRHHB..............',  // 11
  '..BHHHHHHHHHHHHHHB..............',  // 12
  '..BHHHHHHHHHHHHHHB..............',  // 13
  '...BGGGGGGGGGGGGB...............',  // 14 金环颈
  '...BGGGGGGGGGGGGB...............',  // 15
  '...BHHHHHHHHHHHHB...............',  // 16 身体
  '...BHHHHHHHHHHHHB...............',  // 17
  '...BGGGGGGGGGGGGB...............',  // 18 金环身
  '...BGGGGGGGGGGGGB...............',  // 19
  '...BHHHHHHHHHHHHB...............',  // 20
  '...BHHHHHHHHHHHHB...............',  // 21
  '...BHHHHHHHHHHHHB...............',  // 22
  '...BHHHHHHHHHHHHB...............',  // 23
  '...BHHHHHHHHHHHHB..GGGGGGGGG...',  // 24 尾巴
  '...BHHHHHHHHHHHHB.GHHHHHHHHHHG..',  // 25
  '...BHHHHHHHHHHHHB.GHHHHHHHHHHG..',  // 26
  '....BBBBBBBBBBBBB.GHHHHHHHHHHG..',  // 27
  '....BHHB...BHHB...GGGGGGGGGGG...',  // 28 腿
  '....BHHB...BHHB..................',  // 29
  '....BHHB...BHHB..................',  // 30
  '....BGGB...BGGB..................',  // 31 金爪
]

export function Umbreon({ size = 48, evolved = false, className }: MascotProps) {
  return (
    <PixelSvg
      rows={UMBREON_PIXELS}
      palette={UMBREON_PALETTE}
      size={size}
      className={className}
      evolved={evolved}
      crownX={9}
      crownY={0}
    />
  )
}

// ─────────────────────────────────────────────
// 导出映射（保持与 v2 完全一致）
// ─────────────────────────────────────────────

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
