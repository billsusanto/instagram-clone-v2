import Link from 'next/link'
import { MoreHorizontal } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { User } from '@/lib/types'

interface PostHeaderProps {
  user: User
  location?: string
  postId: string
}

export function PostHeader({ user, location }: PostHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-ig-border-light">
      <div className="flex items-center gap-3">
        <Link href={`/${user.username}`}>
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatarUrl} alt={user.username} />
            <AvatarFallback>{user.username[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </Link>

        <div className="flex flex-col">
          <Link
            href={`/${user.username}`}
            className="text-sm font-semibold hover:opacity-70"
          >
            {user.username}
            {user.verified && (
              <span className="ml-1 text-ig-primary">✓</span>
            )}
          </Link>
          {location && (
            <span className="text-xs text-ig-text-secondary">{location}</span>
          )}
        </div>
      </div>

      <button
        className="p-2 hover:opacity-70"
        aria-label="More options"
      >
        <MoreHorizontal className="h-5 w-5" />
      </button>
    </div>
  )
}