/**
 * Markdown 渲染器：GFM + KaTeX 数学公式 + Obsidian wikilink（预转换为 #/topic 链接）。
 */
import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { transformWikilinks } from '../lib/obsidian'

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
        rehypePlugins={[rehypeKatex]}
        components={{
          a: ({ href, children }) => (
            <a href={href} className="text-gold-dark underline decoration-gold-light underline-offset-2 hover:text-gold dark:text-gold-light">
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
