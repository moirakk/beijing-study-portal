/* eslint-disable */
// 截图脚本：node shots.mjs <outdir> [dark]
import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const outdir = process.argv[2] || 'shots'
mkdirSync(outdir, { recursive: true })

const BASE = 'http://localhost:4180'
const pages = [
  ['home', '/#/'],
  ['semester-7a', '/#/semester/7a'],
  ['subject-math', '/#/subject/math'],
  ['topic', '/#/topic/math-7a-1-3'],
  ['search', '/#/search?q=有理数'],
]

const browser = await chromium.launch()

for (const [w, tag] of [[1280, 'desktop'], [390, 'mobile']]) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } })
  const page = await ctx.newPage()
  for (const [name, path] of pages) {
    await page.goto(BASE + path, { waitUntil: 'networkidle' })
    await page.waitForTimeout(400)
    await page.screenshot({ path: `${outdir}/${name}-${tag}.png`, fullPage: true })
  }
  // 暗色模式首页
  await page.goto(BASE + '/#/', { waitUntil: 'networkidle' })
  await page.evaluate(() => {
    localStorage.setItem('bsp-theme', 'dark')
  })
  await page.reload({ waitUntil: 'networkidle' })
  await page.waitForTimeout(400)
  // 若 app 不读 localStorage，兜底直接加 class
  await page.evaluate(() => {
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark')
    }
  })
  await page.waitForTimeout(200)
  await page.screenshot({ path: `${outdir}/home-dark-${tag}.png`, fullPage: true })
  await ctx.close()
}

await browser.close()
console.log('done:', outdir)
