/* eslint-disable */
// 学生视角走查脚本：node scripts/visual/journey.mjs <outdir>
// 真实点击/输入/后退，每一步截图
import { chromium } from 'playwright'
import { mkdirSync } from 'fs'

const outdir = process.argv[2] || 'journey'
mkdirSync(outdir, { recursive: true })
const BASE = 'http://localhost:4180'

const browser = await chromium.launch()
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } })
const page = await ctx.newPage()
let n = 0
const shot = async (name, fullPage = false) => {
  n++
  const p = `${outdir}/${String(n).padStart(2, '0')}-${name}.png`
  await page.screenshot({ path: p, fullPage })
  console.log('shot:', p)
}
const log = (...a) => console.log('▶', ...a)

// ============ 场景1：明天考有理数，找复习资料 ============
log('场景1：首页找有理数')
await page.goto(BASE + '/#/', { waitUntil: 'networkidle' })
await page.waitForTimeout(300)
await shot('s1-home-viewport') // 首屏：能否一眼看到入口？
// 学生：我看到"数学"已选中，往下滚看目录
await page.mouse.wheel(0, 600)
await page.waitForTimeout(300)
await shot('s1-home-scrolled-toc')
// 点"有理数"章节下第一个知识点
const topicLink = page.locator('a[href*="topic"]', { hasText: '有理数的加减法' }).first()
await topicLink.click()
await page.waitForTimeout(500)
await shot('s1-topic-opened')
// 例题能否展开？
const expandBtn = page.locator('button', { hasText: '展开解析' }).first()
if (await expandBtn.count()) {
  await expandBtn.scrollIntoViewIfNeeded()
  await expandBtn.click()
  await page.waitForTimeout(300)
  await shot('s1-example-expanded')
} else {
  log('!! 未找到"展开解析"按钮')
  await shot('s1-example-missing', true)
}

// ============ 场景2：搜索"绝对值" ============
log('场景2：搜索绝对值')
await page.goto(BASE + '/#/', { waitUntil: 'networkidle' })
await page.waitForTimeout(300)
// 用 / 快捷键聚焦
await page.keyboard.press('/')
await page.waitForTimeout(200)
await shot('s2-slash-focus') // 搜索框是否聚焦？
await page.keyboard.type('绝对值')
await page.waitForTimeout(200)
await shot('s2-typed')
await page.keyboard.press('Enter')
await page.waitForTimeout(500)
await shot('s2-results', true)
// 点第一个结果
const firstResult = page.locator('main a[href*="topic"]').first()
if (await firstResult.count()) {
  await firstResult.click()
  await page.waitForTimeout(500)
  await shot('s2-result-opened')
}
// 无结果场景：搜"函数"
await page.goto(BASE + '/#/search?q=函数', { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
await shot('s2-no-results')

// ============ 场景3：学期系统复习 ============
log('场景3：学期专页')
await page.goto(BASE + '/#/', { waitUntil: 'networkidle' })
await page.waitForTimeout(200)
await page.locator('a', { hasText: '初一上' }).first().click()
await page.waitForTimeout(500)
await shot('s3-semester-top')
await page.mouse.wheel(0, 1200)
await page.waitForTimeout(300)
await shot('s3-semester-mid')
await page.keyboard.press('End')
await page.waitForTimeout(400)
await shot('s3-semester-bottom') // 空学科占位观感

// ============ 场景4：完整读一个知识点（桌面） ============
log('场景4：完整阅读')
await page.goto(BASE + '/#/topic/math-7a-1-3', { waitUntil: 'networkidle' })
await page.waitForTimeout(500)
await shot('s4-top')
await page.mouse.wheel(0, 1500)
await page.waitForTimeout(300)
await shot('s4-mid-formulas')
await page.keyboard.press('End')
await page.waitForTimeout(400)
await shot('s4-bottom-nav') // 底部：上一个/下一个是否存在？
await shot('s4-full', true)

// ============ 场景5：暗色模式 ============
log('场景5：暗色模式')
await page.evaluate(() => localStorage.setItem('bsp-theme', 'dark'))
await page.goto(BASE + '/#/topic/math-7a-1-3', { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
await page.evaluate(() => {
  if (!document.documentElement.classList.contains('dark'))
    document.documentElement.classList.add('dark')
})
await page.waitForTimeout(200)
await shot('s5-dark-topic-top')
await page.mouse.wheel(0, 1800)
await page.waitForTimeout(300)
await shot('s5-dark-topic-mid')
await page.goto(BASE + '/#/semester/7a', { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
await shot('s5-dark-semester')
await page.evaluate(() => localStorage.setItem('bsp-theme', 'light'))

// ============ 场景6：迷路测试 ============
log('场景6：导航回退')
await page.goto(BASE + '/#/', { waitUntil: 'networkidle' })
await page.waitForTimeout(300)
await page.mouse.wheel(0, 800)
await page.waitForTimeout(200)
const beforeY = await page.evaluate(() => window.scrollY)
await page.locator('a[href*="topic"]').first().click()
await page.waitForTimeout(500)
await shot('s6-topic-breadcrumb') // 面包屑完整吗？
// 面包屑逐级返回
const crumbChapter = page.locator('nav a').nth(3) // 第一章链接
if (await crumbChapter.count()) {
  await crumbChapter.click()
  await page.waitForTimeout(500)
  await shot('s6-crumb-back-chapter')
}
// 浏览器后退到首页，检查滚动恢复
await page.goBack()
await page.waitForTimeout(400)
await page.goBack()
await page.waitForTimeout(600)
const afterY = await page.evaluate(() => window.scrollY)
log(`滚动恢复: before=${beforeY} after=${afterY} ${Math.abs(afterY - beforeY) < 50 ? 'OK' : '!! 未恢复'}`)
await shot('s6-back-scroll-restored')

// ============ 场景4b：手机宽度 ============
log('场景4b：390px 手机')
const mctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
const mp = await mctx.newPage()
const mshot = async (name, fullPage = false) => {
  n++
  const p = `${outdir}/${String(n).padStart(2, '0')}-${name}.png`
  await mp.screenshot({ path: p, fullPage })
  console.log('shot:', p)
}
await mp.goto(BASE + '/#/topic/math-7a-1-3', { waitUntil: 'networkidle' })
await mp.waitForTimeout(500)
await mshot('s4m-top')
await mp.mouse.wheel(0, 1500)
await mp.waitForTimeout(300)
await mshot('s4m-formulas')
await mp.keyboard.press('End')
await mp.waitForTimeout(400)
await mshot('s4m-bottom')
await mp.goto(BASE + '/#/', { waitUntil: 'networkidle' })
await mp.waitForTimeout(400)
await mshot('s4m-home')
await mctx.close()

await ctx.close()
await browser.close()
console.log('done:', outdir)
