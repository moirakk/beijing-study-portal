import { useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const positions = new Map<string, number>()

/** 最近一次用户滚动后的位置（DOM 换页导致的高度收缩不会立即污染它） */
let lastScrollY = 0
if (typeof window !== 'undefined') {
  // 关闭浏览器原生滚动恢复，避免与手动恢复互相覆盖
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'
  }
  lastScrollY = window.scrollY
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY
  }, { passive: true })
}

/**
 * 滚动管理：
 * - 前进（PUSH/REPLACE）→ 回到页面顶部
 * - 浏览器返回/前进（POP）→ 恢复离开时的滚动位置
 *
 * 记录时机：useLayoutEffect 的 cleanup 在新页面 DOM 提交后同步执行，
 * 此时 window.scrollY 可能已被内容收缩截断，因此改用 scroll 监听器
 * 缓存的 lastScrollY（滚动事件异步派发，尚未被换页污染）。
 */
export default function ScrollManager() {
  const location = useLocation()
  const navType = useNavigationType()
  const key = location.key

  useLayoutEffect(() => {
    // 用 instant 避开全局 scroll-behavior: smooth，切页不产生滚动动画
    if (navType === 'POP') {
      const y = positions.get(key)
      if (y != null) {
        window.scrollTo({ top: y, behavior: 'instant' })
        lastScrollY = y
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
      lastScrollY = 0
    }
    return () => {
      positions.set(key, lastScrollY)
    }
  }, [key, navType])

  return null
}
