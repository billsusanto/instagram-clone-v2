'use client'

import { useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { Story } from '@/lib/types'
import { StoryRing } from './StoryRing'
import { StoryViewer } from './StoryViewer'
import { ChevronRight, ChevronLeft } from 'lucide-react'

interface StoryCarouselProps {
  stories: Story[]
}

export function StoryCarousel({ stories }: StoryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
  })
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null)

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev())
      setCanScrollNext(emblaApi.canScrollNext())
    }

    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi])

  // Group stories by user
  const groupedStories = stories.reduce((acc, story) => {
    const userId = story.user.id
    if (!acc[userId]) {
      acc[userId] = []
    }
    acc[userId].push(story)
    return {}
  }, {} as Record<string, Story[]>)

  // Get unique users with stories
  const uniqueUsers = Array.from(
    new Map(stories.map((story) => [story.user.id, story.user])).values()
  )

  return (
    <>
      <div className="relative bg-white border border-ig-border rounded-lg p-4 mb-6">
        {canScrollPrev && (
          <button
            onClick={() => emblaApi?.scrollPrev()}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Previous stories"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {uniqueUsers.map((user, index) => {
              const userStories = stories.filter((s) => s.user.id === user.id)
              const hasUnviewed = userStories.some((s) => !s.seenByUser)

              return (
                <div key={user.id} className="flex-[0_0_auto]">
                  <StoryRing
                    username={user.username}
                    avatarUrl={user.avatarUrl}
                    hasUnviewedStory={hasUnviewed}
                    onClick={() => setSelectedStoryIndex(index)}
                  />
                </div>
              )
            })}
          </div>
        </div>

        {canScrollNext && (
          <button
            onClick={() => emblaApi?.scrollNext()}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-6 w-6 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Next stories"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {selectedStoryIndex !== null && (
        <StoryViewer
          stories={stories}
          initialIndex={selectedStoryIndex}
          onClose={() => setSelectedStoryIndex(null)}
        />
      )}
    </>
  )
}
