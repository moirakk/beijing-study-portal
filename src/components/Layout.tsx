import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Suspense } from 'react'
import PageSkeleton from './PageSkeleton'
import AmbientBackground from './AmbientBackground'
import Mascot from './Mascot'

/** 移动端底部 Tab 栏配置 */
const BOTTOM_TABS = [
  { to: '/', label: '首页', icon: '🏠', end: true },
  { to: '/search', label: '搜索', icon: '🔍', end: false },
  { to: '/flashcards', label: '卡片', icon: '📖', end: false },
  { to: '/wrongbook', label: '错题', icon: '⚡', end: false },
] as const

const THEME_KEY = 'bsp-theme'

const WEEKDAYS = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

function loadTheme(): 'light' | 'dark' {
  return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'
}

function TodayBadge() {
  const today = new Date()
  const month = today.getMonth() + 1
  const date = today.getDate()
  const weekday = WEEKDAYS[today.getDay()]

  return (
    <div
      className="shrink-0 rounded-full border border-line bg-panel px-2.5 py-1 text-[11.5px] font-semibold text-ink-faint"
      title={`${today.getFullYear()}年${month}月${date}日 ${weekday}`}
      aria-label={`今天是${today.getFullYear()}年${month}月${date}日${weekday}`}
    >
      <span className="hidden md:inline">今天 </span>
      {month}月{date}日
      <span className="hidden sm:inline"> {weekday}</span>
    </div>
  )
}

/**
 * 全局布局：毛玻璃吸顶导航（品牌 + 导航 + 搜索框 + 暗色切换）+ 主内容区。
 * - 搜索框输入回车 → 跳转 /search?q=...
 * - 按 / 快捷键聚焦搜索框
 * - 暗色模式：html.dark class + localStorage 持久化
 */
export default function Layout() {
  const navigate = useNavigate()
  const location = useLocation()
  const searchRef = useRef<HTMLInputElement>(null)
  const [theme, setTheme] = useState<'light' | 'dark'>(loadTheme)
  const [query, setQuery] = useState('')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem(THEME_KEY, theme)
  }, [theme])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== '/') return
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable) return
      e.preventDefault()
      if (window.location.hash.startsWith('#/search')) return
      searchRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const submitSearch = () => {
    const q = query.trim()
    navigate(q ? `/search?q=${encodeURIComponent(q)}` : '/search')
  }

  return (
    <div className="min-h-screen text-ink">
      <AmbientBackground />
      <header className="nav-blur">
        <div className="mx-auto flex h-12 max-w-[980px] items-center gap-1.5 px-4">
          <Link
            to="/"
            className="mr-auto shrink-0 flex items-center gap-2 text-sm font-bold tracking-wide"
          >
            <Mascot pokemon="pikachu" size={26} state="none" className="drop-shadow-sm -mt-1" />
            <span><span className="text-gold">dby</span><span className="hidden sm:inline">赶紧学习</span></span>
          </Link>

          <nav className="hidden sm:flex items-center gap-1.5 overflow-x-auto no-scrollbar mask-edge">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              目录
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              搜索
            </NavLink>
            <NavLink
              to="/wrongbook"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              错题本
            </NavLink>
            <NavLink
              to="/flashcards"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              记忆卡片
            </NavLink>
          </nav>

          <div className="hidden w-52 sm:block md:w-60">
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && submitSearch()}
              placeholder="搜索知识点…（按 / 聚焦）"
              className="w-full rounded-full border border-line bg-panel px-4 py-1 text-[13px] outline-none placeholder:text-ink-faint focus:border-gold"
            />
          </div>

          <TodayBadge />

          {/* 移动端搜索图标（与底部 tab 栏重复，因此隐藏） */}
          <button
            type="button"
            onClick={() => navigate('/search')}
            aria-label="搜索"
            title="搜索"
            className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full border border-transparent text-sm transition-colors hover:border-line hover:bg-panel"
          >
            🔍
          </button>

          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="切换暗色模式"
            title="切换暗色模式"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-transparent text-sm transition-colors hover:border-line hover:bg-panel"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="mx-auto w-full max-w-[980px] px-5 pb-28 sm:pb-24 pt-6"
        >
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-line py-6 text-center text-[12.5px] text-ink-soft hidden sm:block">
        dby赶紧学习！· 图文讲义
      </footer>

      {/* 移动端底部 Tab 栏（sm 以下显示） */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-panel/95 backdrop-blur-sm">
        <div className="flex">
          {BOTTOM_TABS.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center justify-center gap-0.5 py-2 text-center transition-colors ${
                  isActive
                    ? 'text-gold'
                    : 'text-ink-faint hover:text-ink-soft'
                }`
              }
            >
              <span className="text-xl leading-none">{tab.icon}</span>
              <span className="text-[10px] font-semibold">{tab.label}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}
