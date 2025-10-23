import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Comment as CommentType } from '@/lib/types'
import { formatRelativeTime } from '@/lib/utils/formatDate'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface CommentProps {
  comment: CommentType
}

export function Comment({ comment }: CommentProps) {
  return (
    <div className="flex gap-3">
      <Link href={`/${comment.user.username}`}>
        <Avatar className="h-8 w-8">
          <AvatarImage src={comment.user.avatarUrl} alt={comment.user.username} />
          <AvatarFallback>{comment.user.username[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      </Link>

      <div className="flex-1">
        <p className="text-sm">
          <Link
            href={`/${comment.user.username}`}
            className="font-semibold hover:opacity-70"
          >
            {comment.user.username}
          </Link>
          <span className="ml-2">{comment.text}</span>
        </p>

        <div className="mt-2 flex items-center gap-4 text-xs text-ig-text-secondary">
          <span>{formatRelativeTime(comment.createdAt)}</span>
          {comment.likeCount > 0 && (
            <span className="font-semibold">{comment.likeCount} likes</span>
          )}
          <button className="font-semibold hover:text-ig-text-primary">
            Reply
          </button>
        </div>
      </div>

      <button
        className="self-start text-ig-text-secondary hover:text-ig-text-primary"
        aria-label="Like comment"
      >
        <Heart className="h-3 w-3" />
      </button>
    </div>
  )
}