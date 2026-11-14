import { readFileSync } from 'node:fs'
import path from 'node:path'
const root = process.cwd()
const src = readFileSync(path.join(root, 'src/data/referencePhotos.ts'), 'utf8')
const meta = readFileSync(path.join(root, 'src/data/images.ts'), 'utf8')
const projects = readFileSync(path.join(root, 'src/data/projects.ts'), 'utf8')
const photoIds = [...src.matchAll(/^\s*"([^\"]+)": \{.*?"image_url": "([^"]+)".*?"source_url": "([^"]+)"/gm)]
const metaIds = [...meta.matchAll(/^\s*"([^"]+)": \{ w: 1600,/gm)].map(m => m[1])
const refs = new Map(photoIds.map(m => [m[1], {image: m[2], source: m[3]}]))
const errors = []
const warnings = []
for (const [id, ref] of refs) {
  for (const [key, val] of Object.entries(ref)) {
    try { if (new URL(val).protocol !== 'https:') errors.push(`${id}: ${key} is not HTTPS`) }
    catch { errors.push(`${id}: malformed ${key} URL`) }
  }
}
for (const id of metaIds) {
  if (id === 'og') continue
  if (refs.has(id)) continue
  const allowed = ['home-', 'studio-', 'expertise-', 'contact-', 'notfound-', 'journal-']
  if (!allowed.some(prefix => id.startsWith(prefix))) errors.push(`Unknown referenced image: ${id}`)
}
const projectNames = ['casa-vela','monolith-house','stillwater-residence','terra-pavilion','atelier-02','the-atrium','sora-house','stone-and-light']
for (const slug of projectNames) {
  const rows = [1,2,3,4,5,6].map(i => refs.get(`${slug}-0${i}`))
  if (rows.some(r => !r)) errors.push(`${slug}: missing gallery photo records`)
  const uniqueHostSources = new Set(rows.filter(Boolean).map(r => new URL(r.source).hostname))
  if (uniqueHostSources.size > 1 && !['casa-vela','stillwater-residence','terra-pavilion'].includes(slug)) warnings.push(`${slug}: mixed photographic references across ${uniqueHostSources.size} editorial domains, correctly labeled as different buildings`)
  if (!projects.includes(`slug: '${slug}'`)) errors.push(`${slug}: gallery exists but project metadata missing`)
}
const actualFauxFiles = [...src.matchAll(/\b(?:render|generated-by-ai|raytraced)\b/gi)]
if (actualFauxFiles.length) warnings.push('Photo descriptions contain generated-art terminology; inspect labels')
console.log(`ARCHÉ 008 | ${refs.size} external photo records | ${metaIds.length} visual slots | ${projectNames.length} architecture studies`)
console.log(`Structure errors: ${errors.length}; editorial warnings: ${warnings.length}`)
for (const item of errors) console.error('ERROR ' + item)
for (const item of warnings) console.warn('CHECK ' + item)
console.log('NOTE: This script does not verify that URLs return images or that publishing rights exist.')
if (errors.length) process.exitCode = 1
