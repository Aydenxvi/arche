import { useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { ToneContext } from '../../hooks/useHeaderTone'

export function HeaderToneProvider({ children }: { children: ReactNode }) {
  const [overDark, setOverDark] = useState(false)
  const value = useMemo(() => ({ overDark, setOverDark }), [overDark])
  return <ToneContext.Provider value={value}>{children}</ToneContext.Provider>
}
