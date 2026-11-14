import { createContext, useContext, useEffect } from 'react'

export interface ToneValue {
  overDark: boolean
  setOverDark: (value: boolean) => void
}

export const ToneContext = createContext<ToneValue>({ overDark: false, setOverDark: () => {} })

export function useHeaderTone() {
  return useContext(ToneContext)
}

export function useDarkHero(active = true) {
  const { setOverDark } = useHeaderTone()
  useEffect(() => {
    setOverDark(active)
    return () => setOverDark(false)
  }, [active, setOverDark])
}
