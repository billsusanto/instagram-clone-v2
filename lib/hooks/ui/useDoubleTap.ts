import { useRef, useCallback } from 'react'

export function useDoubleTap(onDoubleTap: () => void, delay: number = 300) {
  const lastTap = useRef<number>(0)

  const handleTap = useCallback(() => {
    const now = Date.now()
    const timeSinceLastTap = now - lastTap.current

    if (timeSinceLastTap < delay && timeSinceLastTap > 0) {
      onDoubleTap()
      lastTap.current = 0
    } else {
      lastTap.current = now
    }
  }, [delay, onDoubleTap])

  return handleTap
}