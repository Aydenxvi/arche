import { browserPath } from './browserPath.mjs'
import puppeteer from 'puppeteer-core'
import { mkdirSync } from 'node:fs'

const OUT = '/tmp/shots'
mkdirSync(OUT, { recursive: true })
const base = 'http://localhost:4173'

const routes = process.argv[2] ? JSON.parse(process.argv[2]) : [
  ['home', '/'], ['projects', '/projects'], ['project', '/projects/monolith-house'],
  ['studio', '/studio'], ['expertise', '/expertise'], ['journal', '/journal'],
  ['article', '/journal/light-and-the-hours'], ['contact', '/contact'], ['notfound', '/nope'],
]
const width = Number(process.env.W || 1440)
const height = Number(process.env.H || 900)
const panels = Number(process.env.PANELS || 3)
const tag = process.env.TAG || 'd'

const browser = await puppeteer.launch({
  executablePath: browserPath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars', '--font-render-hinting=none'],
})
const page = await browser.newPage()
await page.setViewport({ width, height, deviceScaleFactor: 1 })

for (const [name, path] of routes) {
  await page.goto(base + path, { waitUntil: 'domcontentloaded', timeout: 45000 })
  await new Promise((r) => setTimeout(r, 900))
  for (let i = 0; i < panels; i++) {
    if (i > 0) {
      await page.evaluate((h) => window.scrollBy(0, h * 0.92), height)
      await new Promise((r) => setTimeout(r, 1100))
    }
    await page.screenshot({ path: `${OUT}/${tag}-${name}-${i}.png` })
  }
  await page.evaluate(() => window.scrollTo(0, 0))
}
console.log('shots done')
await browser.close()
