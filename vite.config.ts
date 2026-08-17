import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync, readdirSync } from 'fs'
import { dirname, join, relative, sep } from 'path'
import { fileURLToPath } from 'url'

const CONTENT_DIR = join(dirname(fileURLToPath(import.meta.url)), 'content')

/**
 * 扫描 content/ 下全部 note.md 的 frontmatter：
 * status: draft → 该知识点为"骨架占位"，收集其 contentPath（相对 content/）。
 * 无 frontmatter 或 status != draft 视为真内容。
 */
function scanDraftPaths(): string[] {
  const drafts: string[] = []
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, entry.name)
      if (entry.isDirectory()) {
        walk(p)
      } else if (entry.name === 'note.md') {
        const head = readFileSync(p, 'utf8').slice(0, 600)
        const fm = head.match(/^---\r?\n([\s\S]*?)\r?\n---/)
        if (fm && /^status:\s*draft\s*$/m.test(fm[1])) {
          drafts.push(relative(CONTENT_DIR, dirname(p)).split(sep).join('/'))
        }
      }
    }
  }
  walk(CONTENT_DIR)
  return drafts.sort()
}

const VIRTUAL_ID = 'virtual:content-status'
const RESOLVED_ID = '\0' + VIRTUAL_ID

/** 虚拟模块：构建/启动时静态扫描 draft contentPath 列表，运行时零开销 */
function contentStatusPlugin(): Plugin {
  return {
    name: 'content-status',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id === RESOLVED_ID) {
        return `export const draftPaths = ${JSON.stringify(scanDraftPaths())}\n`
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/beijing-study-portal/' : '/',
  plugins: [react(), contentStatusPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'framer': ['framer-motion'],
          'markdown': ['react-markdown', 'remark-gfm', 'remark-math', 'rehype-katex', 'rehype-raw'],
        }
      }
    }
  }
})
