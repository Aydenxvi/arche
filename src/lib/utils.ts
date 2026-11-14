export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function formatIndex(n: number) {
  return String(n + 1).padStart(2, '0')
}
