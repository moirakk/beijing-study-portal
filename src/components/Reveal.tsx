import { useEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'

/** 共享的 IntersectionObserver（全部 Reveal 复用一个实例） */
let sharedObserver: IntersectionObserver | null = null

function getObserver(): IntersectionObserver | null {
  if (typeof IntersectionObserver === 'undefined') return null
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            sharedObserver?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
    )
  }
  return sharedObserver
}

/**
 * 滚动渐入容器：进入视口后触发一次淡入上浮动画。
 * - delay：stagger 延迟（毫秒），通过 --reveal-delay 注入
 * - 不支持 IO / reduced-motion 时直接显示（CSS 侧已兜底）
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = getObserver()
    if (!observer) {
      el.classList.add('in')
      return
    }
    // 已在视口内且接近顶部的元素（如首屏内容）立即显示由 IO 首次回调处理
    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  const style =
    delay > 0 ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined

  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  )
}
