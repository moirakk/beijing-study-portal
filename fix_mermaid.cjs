const fs = require('fs');
const code = `/**
 * Mermaid 图表渲染组件：动态加载 mermaid，将代码块渲染为 SVG。
 */
import { useEffect, useRef, useState } from 'react'

let mermaidPromise: Promise<typeof import('mermaid')['default']> | null = null

function loadMermaid() {
  if (!mermaidPromise) {
    mermaidPromise = import('mermaid').then((m) => {
      m.default.initialize({
        startOnLoad: false,
        theme: 'neutral',
        securityLevel: 'loose',
        fontFamily: 'inherit',
      })
      return m.default
    })
  }
  return mermaidPromise
}

let idCounter = 0

export default function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState(false)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return
    let cancelled = false
    loadMermaid()
      .then((mermaid) => mermaid.render(\`mmd-\${++idCounter}\`, chart))
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
  }, [chart, inView])

  if (error) {
    return (
      <pre className="overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs text-slate-500">
        {chart}
      </pre>
    )
  }
  return <div ref={ref} className="mermaid-diagram my-4 flex justify-center overflow-x-auto" />
}
`;
fs.writeFileSync('src/components/Mermaid.tsx', code);
