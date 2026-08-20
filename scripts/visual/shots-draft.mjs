/* eslint-disable */
// 验收截图：node scripts/visual/shots-draft.mjs <outdir>
// 覆盖：首页目录树（数学=有真内容 / 历史=全 draft）、draft 知识点页、真内容页、学期页、搜索结果
// 桌面 + 移动 + 暗色
import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const outdir = process.argv[2] || 'shots-draft'
mkdirSync(outdir, { recursive: true })

const BASE = 'http://localhost:4180'
const REAL_TOPIC = 'math-7a-1-11zhengshuhefushu' // 数学真内容
const DRAFT_TOPIC = 'history-7a-1-yuanshishehuiyuzhonghuawenmi' // 历史 draft 骨架

const pages = [
  ['home-math', '/#/', '数学'], // 点击"数学"科目胶囊后截图
  ['home-history', '/#/', '历史'], // 点击"历史"科目胶囊后截图
  ['semester-7a', '/#/semester/7a', null],
  ['topic-real', `/#/topic/${REAL_TOPIC}`, null],
  ['topic-draft', `/#/topic/${DRAFT_TOPIC}`, null],
  ['search', '/#/search?q=正数', null],
]

const browser = await chromium.launch()

for (const [w, tag] of [[1280, 'desktop'], [390, 'mobile']]) {
  for (const dark of [false, true]) {
    // 暗色只截桌面，控制截图数量
    if (dark && w !== 1280) continue
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
    const page = await ctx.newPage()
    if (dark) {
      await page.addInitScript(() => localStorage.setItem('bsp-theme', 'dark'))
    }
    for (const [name, path, clickSubject] of pages) {
      await page.goto(BASE + path, { waitUntil: 'networkidle' })
      if (clickSubject) {
        await page.click(`button:has-text("${clickSubject}")`)
        await page.waitForTimeout(300)
      }
      // 搜索页等待索引构建完成
      if (name === 'search') {
        await page.waitForSelector('ul li a.card', { timeout: 20000 }).catch(() => {})
      }
      await page.waitForTimeout(500)
      await page.screenshot({
        path: `${outdir}/${name}-${tag}${dark ? '-dark' : ''}.png`,
        fullPage: true,
      })
    }
    await ctx.close()
  }
}

await browser.close()
console.log('done:', outdir)
