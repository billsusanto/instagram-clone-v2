'use client'

import { useState, useEffect, useCallback } from 'react'
import { Story } from '@/lib/types'
import { StoryProgress } from './StoryProgress'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { X, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { formatRelativeTime } from '@/lib/utils/formatDate'

interface StoryViewerProps {
  stories: Story[]
  initialIndex: number
  onClose: () => void
}

const STORY_DURATION = 5000 // 5 seconds

export function StoryViewer({ stories, initialIndex, onClose }: StoryViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isPaused, setIsPaused] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  const currentStory = stories[currentIndex]

  const handleNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      onClose()
    }
  }, [currentIndex, stories.length, onClose])

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }, [currentIndex])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      } else if (e.key === 'ArrowRight') {
        handleNext()
      } else if (e.key === 'ArrowLeft') {
        handlePrev()
      } else if (e.key === ' ') {
        e.preventDefault()
        setIsPaused((prev) => !prev)
      }
    },
    [onClose, handleNext, handlePrev]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  if (!currentStory) return null

  return (
    <div className="fixed inset-0 z-modal bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4">
        <div className="max-w-[500px] mx-auto">
          {/* Progress bars */}
          <StoryProgress
            total={stories.length}
            current={currentIndex}
            duration={STORY_DURATION}
            isPaused={isPaused}
            onComplete={handleNext}
          />

          {/* User info */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage
                  src={currentStory.user.avatarUrl}
                  alt={currentStory.user.username}
                />
                <AvatarFallback>
                  {currentStory.user.username[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">
                  {currentStory.user.username}
                </span>
                <span className="text-xs text-white/70">
                  {formatRelativeTime(currentStory.createdAt)}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className="text-white hover:text-white/70 transition-colors"
                aria-label={isPaused ? 'Play' : 'Pause'}
              >
                {isPaused ? (
                  <Play className="h-6 w-6" />
                ) : (
                  <Pause className="h-6 w-6" />
                )}
              </button>

              <button
                onClick={() => setIsMuted((prev) => !prev)}
                className="text-white hover:text-white/70 transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="h-6 w-6" />
                ) : (
                  <Volume2 className="h-6 w-6" />
                )}
              </button>

              <button
                onClick={onClose}
                className="text-white hover:text-white/70 transition-colors"
                aria-label="Close"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Story content */}
      <div className="h-full flex items-center justify-center">
        <div className="max-w-[500px] w-full h-full flex items-center justify-center">
          <img
            src={currentStory.mediaUrl}
            alt="Story"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      {/* Navigation areas */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-0 bottom-0 w-1/3 cursor-pointer"
        aria-label="Previous story"
        disabled={currentIndex === 0}
      />
      <button
        onClick={handleNext}
        className="absolute right-0 top-0 bottom-0 w-1/3 cursor-pointer"
        aria-label="Next story"
      />
      <button
        onClick={() => setIsPaused((prev) => !prev)}
        className="absolute inset-0"
        aria-label="Toggle pause"
        style={{ zIndex: -1 }}
      />
    </div>
  )
}
