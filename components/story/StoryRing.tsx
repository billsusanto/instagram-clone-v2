'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface StoryRingProps {
  username: string
  avatarUrl: string
  hasUnviewedStory: boolean
  onClick: () => void
}

export function StoryRing({ username, avatarUrl, hasUnviewedStory, onClick }: StoryRingProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1 min-w-[66px]"
      aria-label={`View ${username}'s story`}
    >
      <div
        className={`rounded-full p-[2px] ${
          hasUnviewedStory
            ? 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500'
            : 'bg-ig-border'
        }`}
      >
        <div className="rounded-full p-[2px] bg-white">
          <Avatar className="h-14 w-14">
            <AvatarImage src={avatarUrl} alt={`${username}'s avatar`} />
            <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <span className="text-xs text-ig-text-primary truncate max-w-[66px]">
        {username}
      </span>
    </button>
  )
}
