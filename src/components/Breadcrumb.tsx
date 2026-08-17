import { Link } from 'react-router-dom'

export interface Crumb {
  label: string
  to?: string
}

/** 面包屑导航：所有页面常驻，如 首页 › 数学 › 初一上 › 第一章 › 有理数 */
export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-[13.5px] text-ink-soft">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span className="text-ink-faint">›</span>}
          {item.to ? (
            <Link to={item.to} className="transition-colors hover:text-gold">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
