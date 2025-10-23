'use client'

import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'
import { useLikePost } from '@/lib/hooks/feed/useLikePost'
import { formatNumber } from '@/lib/utils/formatNumber'
import { cn } from '@/lib/utils/cn'

interface PostActionsProps {
  postId: string
  likeCount: number
  commentCount: number
  isLiked: boolean
  isSaved: boolean
  onCommentClick: () => void
}

export function PostActions({
  postId,
  likeCount,
  isLiked,
  isSaved,
  onCommentClick,
}: PostActionsProps) {
  const likeMutation = useLikePost()

  const handleLike = () => {
    likeMutation.mutate(postId)
  }

  return (
    <div>
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-4">
          <button
            onClick={handleLike}
            className={cn(
              'transition-transform hover:scale-110 active:scale-95',
              isLiked && 'animate-heartBeat'
            )}
            aria-label={isLiked ? 'Unlike' : 'Like'}
          >
            <Heart
              className={cn('h-6 w-6', isLiked && 'fill-ig-error text-ig-error')}
            />
          </button>

          <button
            onClick={onCommentClick}
            className="transition-transform hover:scale-110 active:scale-95"
            aria-label="Comment"
          >
            <MessageCircle className="h-6 w-6" />
          </button>

          <button
            className="transition-transform hover:scale-110 active:scale-95"
            aria-label="Share"
          >
            <Send className="h-6 w-6" />
          </button>
        </div>

        <button
          className="transition-transform hover:scale-110 active:scale-95"
          aria-label={isSaved ? 'Unsave' : 'Save'}
        >
          <Bookmark
            className={cn('h-6 w-6', isSaved && 'fill-current')}
          />
        </button>
      </div>

      {likeCount > 0 && (
        <div className="px-4 pb-2">
          <span className="text-sm font-semibold">
            {formatNumber(likeCount)} likes
          </span>
        </div>
      )}
    </div>
  )
}