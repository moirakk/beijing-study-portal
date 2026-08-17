/**
 * Mermaid 图表渲染组件：动态加载 mermaid，将代码块渲染为 SVG。
 * 功能：暗色模式感知 · 学科主题色（从 URL 解析） · 节点层次分级（SVG 拓扑分析）
 */
import { useEffect, useRef, useState } from 'react'

// ---------------------------------------------------------------------------
// 学科颜色调色板（与 constants.ts SUBJECT_THEMES 保持色系一致，补充 dark 版本）
// ---------------------------------------------------------------------------
interface Palette {
  primary: string   // 节点主填充
  border: string    // 节点边框
  text: string      // 节点文字
  secondary: string // 次级节点填充
  line: string      // 连线颜色
  edgeBg: string    // 边标签背景
}

const PALETTES: Record<string, { light: Palette; dark: Palette }> = {
  chinese: {
    light: { primary: '#f7ece3', border: '#8B4513', text: '#3d1a08', secondary: '#faf5f0', line: '#b08060', edgeBg: '#faf5f0' },
    dark:  { primary: '#3a1e0e', border: '#c4754a', text: '#f0e0d0', secondary: '#2e1808', line: '#8a5838', edgeBg: '#261408' },
  },
  math: {
    light: { primary: '#e6eff8', border: '#2E5A9A', text: '#1a3560', secondary: '#f0f5fb', line: '#6888c0', edgeBg: '#f0f5fb' },
    dark:  { primary: '#0f2240', border: '#6090d4', text: '#c0d4f0', secondary: '#0a1a32', line: '#405888', edgeBg: '#081628' },
  },
  english: {
    light: { primary: '#e5f0e8', border: '#4A7C59', text: '#1e4028', secondary: '#f0f6f2', line: '#68a07c', edgeBg: '#f0f6f2' },
    dark:  { primary: '#142a1a', border: '#7ab88a', text: '#c0e0c8', secondary: '#0d2014', line: '#386848', edgeBg: '#0a1c10' },
  },
  physics: {
    light: { primary: '#ede9f5', border: '#6B5B95', text: '#2e2460', secondary: '#f4f2f9', line: '#8878b8', edgeBg: '#f4f2f9' },
    dark:  { primary: '#221840', border: '#a090d0', text: '#c8c0e8', secondary: '#1a1230', line: '#504878', edgeBg: '#160e28' },
  },
  chemistry: {
    light: { primary: '#f8e8e5', border: '#C84C3C', text: '#5a1a14', secondary: '#faf2f1', line: '#c07868', edgeBg: '#faf2f1' },
    dark:  { primary: '#3d1410', border: '#e07060', text: '#f0c8c0', secondary: '#2e0e0a', line: '#884038', edgeBg: '#280a08' },
  },
  biology: {
    light: { primary: '#e1f0e8', border: '#2E8B57', text: '#14401e', secondary: '#edf7f2', line: '#58a070', edgeBg: '#edf7f2' },
    dark:  { primary: '#0d2d1e', border: '#6abd8a', text: '#b8e4c8', secondary: '#081e14', line: '#306848', edgeBg: '#081610' },
  },
  politics: {
    light: { primary: '#f5edda', border: '#B8860B', text: '#4a3200', secondary: '#faf5ea', line: '#c09838', edgeBg: '#faf5ea' },
    dark:  { primary: '#332600', border: '#d4a020', text: '#f0d880', secondary: '#261c00', line: '#806010', edgeBg: '#1c1400' },
  },
  history: {
    light: { primary: '#f5eee3', border: '#9A5B2A', text: '#3e1e08', secondary: '#faf5ee', line: '#b08058', edgeBg: '#faf5ee' },
    dark:  { primary: '#2a1a0c', border: '#c4804a', text: '#f0d0b0', secondary: '#1e1008', line: '#7a5030', edgeBg: '#180e06' },
  },
  geography: {
    light: { primary: '#dff0f2', border: '#16697A', text: '#0a2c38', secondary: '#edf6f7', line: '#489db0', edgeBg: '#edf6f7' },
    dark:  { primary: '#0a1e24', border: '#40a0b8', text: '#a8d8e4', secondary: '#081418', line: '#205870', edgeBg: '#061012' },
  },
  misc: {
    light: { primary: '#fdefd2', border: '#c08a3e', text: '#29251f', secondary: '#fdf6ec', line: '#b5a494', edgeBg: '#fef9f4' },
    dark:  { primary: '#3d3628', border: '#d3a35a', text: '#eae4d8', secondary: '#2e2a21', line: '#7a7264', edgeBg: '#26221c' },
  },
}

/** 从 URL hash 解析当前学科（格式：#/topic/chinese-7a-1-xxx） */
function getSubjectFromUrl(): string {
  const m = window.location.hash.match(/\/topic\/([a-z]+)-/)
  const id = m ? m[1] : 'misc'
  return PALETTES[id] ? id : 'misc'
}

let mermaidModule: Promise<typeof import('mermaid')['default']> | null = null

function loadMermaid() {
  if (!mermaidModule) {
    mermaidModule = import('mermaid').then((m) => m.default)
  }
  return mermaidModule
}

function getMermaidConfig(dark: boolean, subject: string) {
  const pal = (PALETTES[subject] ?? PALETTES.misc)[dark ? 'dark' : 'light']
  return {
    startOnLoad: false,
    theme: 'base' as const,
    themeVariables: {
      primaryColor: pal.primary,
      primaryBorderColor: pal.border,
      primaryTextColor: pal.text,
      secondaryColor: pal.secondary,
      secondaryBorderColor: pal.border + 'aa',
      secondaryTextColor: pal.text,
      tertiaryColor: dark ? '#1c1916' : '#fefcf9',
      tertiaryBorderColor: dark ? '#504840' : '#e7e0d4',
      tertiaryTextColor: dark ? '#a09888' : '#6e665c',
      lineColor: pal.line,
      edgeLabelBackground: pal.edgeBg,
      clusterBkg: pal.secondary,
      clusterBorder: pal.border,
      titleColor: pal.text,
      fontFamily: 'inherit',
      fontSize: '14px',
      background: 'transparent',
      mainBkg: pal.primary,
      nodeBorder: pal.border,
      labelBackground: pal.edgeBg,
    },
    securityLevel: 'loose' as const,
    flowchart: {
      curve: 'basis' as const,
      htmlLabels: true,
      nodeSpacing: 60,
      rankSpacing: 70,
    },
    mindmap: {
      padding: 24,
    },
  }
}

/**
 * 分析 SVG 拓扑结构，为节点添加层次 class：
 *   mmd-node-root  → 无 incoming edge（中心/根节点）
 *   mmd-node-branch → 直接连自根节点（一级分支）
 *   mmd-node-leaf  → 其余（叶子/二级）
 *
 * 利用 Mermaid 11 flowchart edgePath 的 "LS-{src}" / "LE-{tgt}" class 提取拓扑。
 */
function classifyNodes(container: HTMLDivElement) {
  const nodeEls = Array.from(container.querySelectorAll<SVGGElement>('g.node'))
  if (nodeEls.length === 0) return

  // 从 edgePath 的 class 提取 source→target 关系
  const srcTargetPairs: Array<{ src: string; tgt: string }> = []
  const allTargets = new Set<string>()

  container.querySelectorAll<SVGGElement>('g.edgePath').forEach(ep => {
    const cls = Array.from(ep.classList)
    const src = cls.find(c => c.startsWith('LS-'))?.slice(3) ?? ''
    const tgt = cls.find(c => c.startsWith('LE-'))?.slice(3) ?? ''
    if (src && tgt) {
      srcTargetPairs.push({ src, tgt })
      allTargets.add(tgt)
    }
  })

  const hasEdgeData = srcTargetPairs.length > 0

  // 提取每个 node 的短 label（从 id "flowchart-{label}-{n}" 中提取 label 部分）
  function extractLabel(id: string): string {
    return id.replace(/^flowchart-/, '').replace(/-\d+$/, '')
  }

  const rootLabels = new Set<string>()
  const branchLabels = new Set<string>()

  if (hasEdgeData) {
    nodeEls.forEach(n => {
      const label = extractLabel(n.id)
      if (!allTargets.has(label)) rootLabels.add(label)
    })

    srcTargetPairs.forEach(({ src, tgt }) => {
      if (rootLabels.has(src)) branchLabels.add(tgt)
    })
  }

  nodeEls.forEach((n, i) => {
    n.classList.remove('mmd-node-root', 'mmd-node-branch', 'mmd-node-leaf')
    const label = extractLabel(n.id)

    if (hasEdgeData) {
      if (rootLabels.has(label)) n.classList.add('mmd-node-root')
      else if (branchLabels.has(label)) n.classList.add('mmd-node-branch')
      else n.classList.add('mmd-node-leaf')
    } else {
      // 退化：按 index 分级（适配无 LS-/LE- 的 Mermaid 版本）
      const leafStart = Math.max(3, Math.ceil(nodeEls.length * 0.3))
      if (i === 0) n.classList.add('mmd-node-root')
      else if (i < leafStart) n.classList.add('mmd-node-branch')
      else n.classList.add('mmd-node-leaf')
    }
  })
}

let idCounter = 0

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState(false)
  const [inView, setInView] = useState(false)
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )
  const [subject, setSubject] = useState(() => getSubjectFromUrl())

  // 监听暗色模式切换
  useEffect(() => {
    const mo = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => mo.disconnect()
  }, [])

  // 监听 SPA hash 路由变化（学科切换时更新配色）
  useEffect(() => {
    const handler = () => setSubject(getSubjectFromUrl())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  // 懒渲染：进入视口才触发
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  // 渲染图表（chart / isDark / subject 三维变化时重新渲染）
  useEffect(() => {
    if (!inView) return
    let cancelled = false
    loadMermaid()
      .then(async (mermaid) => {
        mermaid.initialize(getMermaidConfig(isDark, subject))
        return mermaid.render(`mmd-${++idCounter}`, chart)
      })
      .then(({ svg }) => {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg
          classifyNodes(ref.current)
        }
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [chart, inView, isDark, subject])

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
        {chart}
      </pre>
    )
  }
  return <div ref={ref} className="mermaid-diagram my-4 flex justify-center overflow-x-auto" />
}
