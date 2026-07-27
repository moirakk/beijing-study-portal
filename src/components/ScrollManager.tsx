import { useEffect, useLayoutEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const positions = new Map<string, number>()

/**
 * 滚动管理：
 * - 前进（PUSH/REPLACE）→ 回到页面顶部
 * - 浏览器返回/前进（POP）→ 恢复离开时的滚动位置
 */
export default function ScrollManager() {
  const location = useLocation()
  const navType = useNavigationType()
  const key = location.key

  // 离开页面前记录滚动位置
  useEffect(() => {
    return () => {
      positions.set(key, window.scrollY)
    }
  }, [key])

  useLayoutEffect(() => {
    // 用 instant 避开全局 scroll-behavior: smooth，切页不产生滚动动画
    if (navType === 'POP') {
      const y = positions.get(key)
      if (y != null) {
        window.scrollTo({ top: y, behavior: 'instant' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [key, navType])

  return null
}
