import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/subjects', label: '学科' },
  { to: '/progress', label: '进度' },
]

const THEME_KEY = 'bsp-theme'

function loadTheme(): 'light' | 'dark' {
  return localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'
}

/**
 * 全局布局：顶栏（品牌 + 导航 + 搜索框 + 暗色切换）+ 主内容区。
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
    <div className="min-h-screen bg-paper text-ink dark:bg-neutral-900 dark:text-neutral-100">
      <header className="sticky top-0 z-10 border-b border-line bg-card/90 backdrop-blur dark:border-neutral-700 dark:bg-neutral-800/90">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4 md:gap-6">
          <Link to="/" className="shrink-0 font-serif text-base font-bold tracking-wide md:text-lg">
            <span className="text-gold">北京</span>初高中学习门户
          </Link>

          <nav className="flex items-center gap-3 text-sm md:gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'font-medium text-gold-dark dark:text-gold-light'
                    : 'text-ink-soft hover:text-ink dark:text-neutral-400 dark:hover:text-neutral-100'
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto hidden w-56 sm:block md:w-64">
            <input
              ref={searchRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && submitSearch()}
              placeholder="搜索知识点…（按 / 聚焦）"
              className="w-full rounded-full border border-line bg-paper px-4 py-1.5 text-sm outline-none placeholder:text-ink-faint focus:border-gold dark:border-neutral-600 dark:bg-neutral-900 dark:placeholder:text-neutral-500"
            />
          </div>

          <Link
            to="/search"
            className="text-lg sm:hidden"
            aria-label="搜索"
            title="搜索"
          >
            🔍
          </Link>

          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="切换暗色模式"
            title="切换暗色模式"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-base hover:bg-paper dark:border-neutral-600 dark:hover:bg-neutral-700"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        <Outlet />
      </main>
    </div>
  )
}
