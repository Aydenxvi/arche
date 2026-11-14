import { browserPath } from './browserPath.mjs'
import puppeteer from 'puppeteer-core'

const base = 'http://localhost:4173'
const routes = ['/', '/projects', '/projects/casa-vela', '/projects/stone-and-light', '/studio',
  '/expertise', '/journal', '/journal/material-honesty', '/contact', '/definitely-not-a-page']
const widths = [320, 375, 768, 1366, 1920, 2560]

const browser = await puppeteer.launch({
  executablePath: browserPath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-gpu', '--hide-scrollbars'],
})
const page = await browser.newPage()
const problems = []
const consoleErrors = []
page.on('console', (m) => { if (m.type() === 'error') consoleErrors.push(`${page.url()} :: ${m.text()}`) })
page.on('pageerror', (e) => consoleErrors.push(`${page.url()} :: ${e.message}`))
page.on('requestfailed', (r) => consoleErrors.push(`REQUEST FAILED ${r.url()} (${r.failure()?.errorText})`))

for (const route of routes) {
  for (const width of widths) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 })
    await page.goto(base + route, { waitUntil: 'domcontentloaded', timeout: 45000 })
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
    await new Promise((r) => setTimeout(r, 450))
    const result = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth
      const overflowing = [...document.querySelectorAll('body *')]
        .filter((el) => {
          const r = el.getBoundingClientRect()
          return r.width > 0 && r.right > window.innerWidth + 1.5
        })
        .slice(0, 4)
        .map((el) => `${el.tagName.toLowerCase()}.${(el.className || '').toString().split(' ').slice(0, 3).join('.')}`)
      const imgs = [...document.querySelectorAll('img')]
      return {
        docW,
        innerW: window.innerWidth,
        overflowing,
        title: document.title,
        h1: document.querySelectorAll('h1').length,
        imgs: imgs.length,
        noAlt: imgs.filter((i) => i.alt === null || i.alt === undefined).length,
        broken: imgs.filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc).slice(0, 3),
        main: document.querySelectorAll('main').length,
        skip: Boolean(document.querySelector('a[href="#main"]')),
      }
    })
    if (result.docW > result.innerW + 1) {
      problems.push(`OVERFLOW ${route} @${width}px: doc ${result.docW} > ${result.innerW} [${result.overflowing.join(', ')}]`)
    }
    if (result.broken.length) problems.push(`BROKEN IMG ${route} @${width}: ${result.broken.join(', ')}`)
    if (width === 1366) {
      if (result.h1 !== 1) problems.push(`H1 COUNT ${route}: ${result.h1}`)
      if (!result.title || result.title === 'ARCHÉ — Spaces shaped by thought.' && route !== '/') {
        problems.push(`TITLE not route-specific on ${route}: "${result.title}"`)
      }
      if (result.main !== 1) problems.push(`MAIN landmark count ${route}: ${result.main}`)
      if (!result.skip) problems.push(`SKIP LINK missing on ${route}`)
      console.log(`${route.padEnd(34)} imgs=${String(result.imgs).padStart(2)} h1=${result.h1} title="${result.title}"`)
    }
  }
}

console.log('\n--- problems ---')
console.log(problems.length ? problems.join('\n') : 'none')
console.log('\n--- console/network errors ---')
const unique = [...new Set(consoleErrors)]
console.log(unique.length ? unique.slice(0, 12).join('\n') : 'none')
await browser.close()
