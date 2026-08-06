/**
 * Markdown 渲染器：GFM + KaTeX 数学公式 + Obsidian wikilink（预转换为 #/topic 链接）。
 */
import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import { transformWikilinks } from '../lib/obsidian'
import Mermaid from './Mermaid'

interface Props {
  markdown: string
  /** 是否去掉第一行 H1 标题（区块已有标题时避免重复） */
  stripH1?: boolean
}

function Markdown({ markdown, stripH1 }: Props) {
  let text = transformWikilinks(markdown)
  if (stripH1) {
    text = text.replace(/^#\s+.*\n+/, '')
  }
  return (
    <div className="markdown-body">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        components={{
          pre: ({ children, ...props }) => {
            const child = children as { props?: { className?: string } } | undefined
            if (/language-mermaid/.test(child?.props?.className ?? '')) {
              return <>{children}</>
            }
            return <pre {...props}>{children}</pre>
          },
          code: ({ className, children, ...props }) => {
            if (/language-mermaid/.test(className ?? '')) {
              return <Mermaid chart={String(children).trim()} />
            }
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-[var(--s)] underline decoration-[var(--s-soft)] underline-offset-2 hover:decoration-[var(--s)]"
            >
              {children}
            </a>
          ),
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  )
}

export default memo(Markdown)
