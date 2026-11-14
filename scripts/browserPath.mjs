import { existsSync } from 'node:fs'
import { platform } from 'node:os'
const paths = platform() === 'win32'
  ? [
      `${process.env['PROGRAMFILES'] || 'C:\\Program Files'}\\Google\\Chrome\\Application\\chrome.exe`,
      `${process.env['PROGRAMFILES(X86)'] || 'C:\\Program Files (x86)'}\\Microsoft\\Edge\\Application\\msedge.exe`,
      `${process.env['PROGRAMFILES'] || 'C:\\Program Files'}\\Microsoft\\Edge\\Application\\msedge.exe`,
    ]
  : ['/usr/bin/chromium', '/usr/bin/google-chrome', '/usr/bin/chromium-browser']
export const browserPath = [process.env.CHROME_PATH, ...paths].find(p => p && existsSync(p))
if (!browserPath) throw new Error('Chromium/Chrome/Edge not found. Set CHROME_PATH to its executable before running UI tests.')
