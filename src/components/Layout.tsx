import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

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
    <div className="min-h-screen bg-paper text-ink">
      <header className="nav-blur">
        <div className="mx-auto flex h-12 max-w-[980px] items-center gap-1.5 px-4">
          <Link
            to="/"
            className="mr-auto shrink-0 text-sm font-bold tracking-wide"
          >
            <span className="text-gold">北京</span>初高中学习门户
          </Link>

          <nav className="flex items-center gap-1.5">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              学科
            </NavLink>
            <NavLink
              to="/search"
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              搜索
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

      <main className="mx-auto max-w-[980px] px-5 pb-24 pt-6">
        <Outlet />
      </main>

      <footer className="border-t border-line py-6 text-center text-[12.5px] text-ink-soft">
        北京初高中学习门户 · 图文讲义
      </footer>
    </div>
  )
}
