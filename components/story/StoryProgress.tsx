'use client'

import { useEffect, useState } from 'react'

interface StoryProgressProps {
  total: number
  current: number
  duration: number
  isPaused: boolean
  onComplete: () => void
}

export function StoryProgress({ total, current, duration, isPaused, onComplete }: StoryProgressProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isPaused) return

    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (100 / duration) * 50 // Update every 50ms
        if (next >= 100) {
          clearInterval(interval)
          onComplete()
          return 100
        }
        return next
      })
    }, 50)

    return () => clearInterval(interval)
  }, [current, duration, isPaused, onComplete])

  return (
    <div className="flex gap-1">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden"
        >
          <div
            className="h-full bg-white transition-all duration-50 ease-linear"
            style={{
              width: `${
                index < current ? 100 : index === current ? progress : 0
              }%`,
            }}
          />
        </div>
      ))}
    </div>
  )
}
