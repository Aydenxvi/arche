import { browserPath } from './browserPath.mjs'
import puppeteer from 'puppeteer-core'

const base = 'http://localhost:4173'
const results = []
const ok = (name, pass, detail = '') => results.push(`${pass ? 'PASS' : 'FAIL'}  ${name}${detail ? ' — ' + detail : ''}`)
const wait = (ms) => new Promise((r) => setTimeout(r, ms))
async function waitFor(fn, timeout = 6000, step = 120) {
  const t0 = Date.now()
  for (;;) {
    if (await fn()) return true
    if (Date.now() - t0 > timeout) return false
    await wait(step)
  }
}

const browser = await puppeteer.launch({
  executablePath: browserPath, headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1366, height: 900 })

await page.goto(`${base}/projects`, { waitUntil: 'domcontentloaded' })
const GRID = 'main ul li a[href^="/projects/"]'
const total = await page.$$eval(GRID, (a) => a.length)
await page.evaluate(() => {
  const btn = [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === 'Residential')
  btn.click()
})
await waitFor(async () => (await page.$$eval(GRID, (a) => a.length)) < total)
const filtered = await page.$$eval(GRID, (a) => a.length)
const pressed = await page.evaluate(() =>
  [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === 'Residential')?.getAttribute('aria-pressed'))
ok('Projects filter narrows the grid', total === 8 && filtered === 4, `all=${total} residential=${filtered}`)
ok('Filter sets aria-pressed', pressed === 'true')
await page.evaluate(() => {
  const btn = [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === 'All'); btn.click()
})
await waitFor(async () => (await page.$$eval(GRID, (a) => a.length)) === 8)
ok('Filter resets to all', (await page.$$eval(GRID, (a) => a.length)) === 8)

await page.click('a[href="/projects/casa-vela"]')
await wait(1200)
ok('Navigates to a project detail', page.url().endsWith('/projects/casa-vela'),
   await page.$eval('h1', (h) => h.textContent))

await page.evaluate(() => document.querySelector('button[aria-label^="Open image"]').click())
await wait(700)
let dialog = await page.$('[role="dialog"]')
ok('Lightbox opens from a gallery plate', Boolean(dialog))
const firstSrc = await page.$eval('[role="dialog"] img', (i) => i.getAttribute('src'))
await page.keyboard.press('ArrowRight')
await wait(700)
const secondSrc = await page.$eval('[role="dialog"] img', (i) => i.getAttribute('src'))
ok('ArrowRight advances the lightbox', firstSrc !== secondSrc)
const label = await page.$eval('[role="dialog"]', (d) => d.getAttribute('aria-label'))
ok('Lightbox announces position', /Image \d+ of \d+/.test(label), label)
const trapped = await page.evaluate(() => document.querySelector('[role="dialog"]').contains(document.activeElement))
ok('Focus moves inside the lightbox', trapped)
await page.keyboard.press('Escape')
ok('Escape closes the lightbox', await waitFor(async () => !(await page.$('[role="dialog"]'))))

await page.goto(`${base}/expertise#interiors`, { waitUntil: 'domcontentloaded' })
await waitFor(async () => (await page.evaluate(() => window.scrollY)) > 400)
const scrolled = await page.evaluate(() => window.scrollY)
ok('Expertise anchor deep-link scrolls', scrolled > 400, `scrollY=${Math.round(scrolled)}`)

await page.goto(`${base}/journal`, { waitUntil: 'domcontentloaded' })
const allPosts = await page.$$eval('main a[href^="/journal/"]', (a) => a.length)
await page.evaluate(() => {
  const btn = [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === 'Practice'); btn.click()
})
await waitFor(async () => (await page.$$eval('main a[href^="/journal/"]', (a) => a.length)) < allPosts)
ok('Journal topic filter works', (await page.$$eval('main a[href^="/journal/"]', (a) => a.length)) < allPosts)

await page.goto(`${base}/contact`, { waitUntil: 'domcontentloaded' })
await page.click('button[type="submit"]')
await wait(500)
const errs = await page.$$eval('[role="alert"]', (n) => n.map((e) => e.textContent))
ok('Empty contact form reports errors', errs.length >= 3, `${errs.length} messages`)
await page.type('#name', 'A. Visitor')
await page.type('#email', 'not-an-email')
await page.select('#projectType', 'Private residence')
await page.type('#message', 'A small house on a steep site near the lake, ready to start next spring.')
await page.click('button[type="submit"]')
await wait(500)
const emailErr = await page.$$eval('[role="alert"]', (n) => n.map((e) => e.textContent).join(' | '))
ok('Invalid email is rejected', /email/i.test(emailErr), emailErr)
const invalid = await page.$eval('#email', (e) => e.getAttribute('aria-invalid'))
ok('Invalid field marked aria-invalid', invalid === 'true')

await page.setViewport({ width: 390, height: 844 })
await page.goto(base, { waitUntil: 'domcontentloaded' })
await wait(600)
await page.evaluate(() => document.querySelector('button[aria-controls="mobile-menu"]').click())
await wait(1500)
const menu = await page.$('#mobile-menu')
ok('Mobile menu opens', Boolean(menu))
const menuLinks = await page.$$eval('#mobile-menu a[href^="/"]', (a) => a.length)
ok('Mobile menu lists every page', menuLinks >= 5, `${menuLinks} links`)
const expanded = await page.$eval('button[aria-controls="mobile-menu"]', (b) => b.getAttribute('aria-expanded'))
ok('Menu button reports expanded', expanded === 'true')
await page.keyboard.press('Escape')
ok('Escape closes the mobile menu', await waitFor(async () => !(await page.$('#mobile-menu'))))

await page.setViewport({ width: 1366, height: 900 })
await page.goto(base, { waitUntil: 'domcontentloaded' })
await page.keyboard.press('Tab')
const focused = await page.evaluate(() => document.activeElement?.getAttribute('href'))
ok('First tab stop is the skip link', focused === '#main', `focus=${focused}`)

await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
await page.goto(`${base}/studio`, { waitUntil: 'domcontentloaded' })
await wait(1500)
const visible = await page.evaluate(() => {
  const h = document.querySelector('h1')
  return h ? getComputedStyle(h).opacity : '0'
})
ok('Content renders under reduced motion', Number(visible) > 0.9, `h1 opacity=${visible}`)

console.log(results.join('\n'))
console.log(`\n${results.filter((r) => r.startsWith('PASS')).length}/${results.length} passed`)
await browser.close()
