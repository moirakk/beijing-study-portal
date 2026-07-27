import { Link } from 'react-router-dom'

export interface Crumb {
  label: string
  to?: string
}

/** 面包屑导航：所有页面常驻，如 首页 > 数学 > 初一上 > 第一章 > 有理数 */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-ink-soft dark:text-neutral-400">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-ink-faint dark:text-neutral-600">›</span>}
          {item.to ? (
            <Link
              to={item.to}
              className="hover:text-gold-dark hover:underline dark:hover:text-gold-light"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-ink dark:text-neutral-200">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
