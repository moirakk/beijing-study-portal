import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// React 挂载后淡出并移除入场 Splash（保证最短展示时长，避免闪烁）
const splash = document.getElementById('splash')
if (splash) {
  const MIN_SHOW = 500
  const start = performance.now()
  requestAnimationFrame(() => {
    const wait = Math.max(0, MIN_SHOW - (performance.now() - start))
    setTimeout(() => {
      splash.classList.add('done')
      splash.addEventListener('transitionend', () => splash.remove(), { once: true })
      // reduced-motion 下无过渡，兜底直接移除
      setTimeout(() => splash.remove(), 600)
    }, wait)
  })
}
