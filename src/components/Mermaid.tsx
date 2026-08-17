/**
 * Mermaid 图表渲染组件：动态加载 mermaid，将代码块渲染为 SVG。
 * 支持暗色模式感知，使用暖色学术风格主题。
 */
import { useEffect, useRef, useState } from 'react'

let mermaidModule: Promise<typeof import('mermaid')['default']> | null = null

function loadMermaid() {
  if (!mermaidModule) {
    mermaidModule = import('mermaid').then((m) => m.default)
  }
  return mermaidModule
}

function getMermaidConfig(dark: boolean) {
  return {
    startOnLoad: false,
    theme: 'base' as const,
    themeVariables: dark
      ? {
          // 暗色：深暖棕底色，金色边框，奶白文字
          primaryColor: '#3d3628',
          primaryBorderColor: '#d3a35a',
          primaryTextColor: '#eae4d8',
          secondaryColor: '#2e2a21',
          secondaryBorderColor: '#7a6b55',
          secondaryTextColor: '#d4cdc0',
          tertiaryColor: '#26221c',
          tertiaryBorderColor: '#5a5040',
          tertiaryTextColor: '#b0a898',
          lineColor: '#7a7264',
          edgeLabelBackground: '#26221c',
          clusterBkg: '#2e2a21',
          clusterBorder: '#7a6b55',
          titleColor: '#eae4d8',
          fontFamily: 'inherit',
          fontSize: '14px',
          background: 'transparent',
          mainBkg: '#3d3628',
          nodeBorder: '#d3a35a',
          labelBackground: '#26221c',
        }
      : {
          // 亮色：暖琥珀填充，金色边框，深墨文字
          primaryColor: '#fdefd2',
          primaryBorderColor: '#c08a3e',
          primaryTextColor: '#29251f',
          secondaryColor: '#fdf6ec',
          secondaryBorderColor: '#d4bc90',
          secondaryTextColor: '#3d3320',
          tertiaryColor: '#fefaf4',
          tertiaryBorderColor: '#e7e0d4',
          tertiaryTextColor: '#5a5040',
          lineColor: '#b5a494',
          edgeLabelBackground: '#fef9f4',
          clusterBkg: '#fdf6ec',
          clusterBorder: '#d4bc90',
          titleColor: '#29251f',
          fontFamily: 'inherit',
          fontSize: '14px',
          background: 'transparent',
          mainBkg: '#fdefd2',
          nodeBorder: '#c08a3e',
          labelBackground: '#fef9f4',
        },
    securityLevel: 'loose' as const,
    flowchart: {
      curve: 'basis' as const,
      htmlLabels: true,
      nodeSpacing: 50,
      rankSpacing: 55,
    },
    mindmap: {
      padding: 22,
    },
  }
}

let idCounter = 0

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState(false)
  const [inView, setInView] = useState(false)
  const [isDark, setIsDark] = useState(() =>
    document.documentElement.classList.contains('dark')
  )

  // 监听暗色模式切换
  useEffect(() => {
    const mo = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => mo.disconnect()
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

  // 渲染图表（chart 或 isDark 变化时重新渲染）
  useEffect(() => {
    if (!inView) return
    let cancelled = false
    loadMermaid()
      .then(async (mermaid) => {
        mermaid.initialize(getMermaidConfig(isDark))
        return mermaid.render(`mmd-${++idCounter}`, chart)
      })
      .then(({ svg }) => {
        if (!cancelled && ref.current) {
          ref.current.innerHTML = svg
        }
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
    return () => {
      cancelled = true
    }
  }, [chart, inView, isDark])

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
        {chart}
      </pre>
    )
  }
  return <div ref={ref} className="mermaid-diagram my-4 flex justify-center overflow-x-auto" />
}
