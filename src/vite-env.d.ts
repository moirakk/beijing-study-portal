/// <reference types="vite/client" />

declare module 'virtual:content-status' {
  /** frontmatter status: draft 的知识点 contentPath 列表（构建时扫描生成） */
  export const draftPaths: string[]
}
