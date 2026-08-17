import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Suspense } from 'react'
import PageSkeleton from './PageSkeleton'
import AmbientBackground from './AmbientBackground'
import Mascot from './Mascot'

const THEME_KEY = 'bsp-theme'

function loadTheme(): 'light' | 'dark' {
  return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'
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
            <span><span className="text-gold">北京</span><span className="hidden sm:inline">初高中学习门户</span></span>
          </Link>

          <nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar mask-edge">
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
          className="mx-auto w-full max-w-[980px] px-5 pb-24 pt-6"
        >
          <Suspense fallback={<PageSkeleton />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-line py-6 text-center text-[12.5px] text-ink-soft">
        北京初高中学习门户 · 图文讲义
      </footer>
    </div>
  )
}
