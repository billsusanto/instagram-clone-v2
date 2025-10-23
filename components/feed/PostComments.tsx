'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCommentsByPost } from '@/lib/api'
import { useAddComment } from '@/lib/hooks/feed/useAddComment'
import { queryKeys } from '@/lib/constants/queryKeys'
import { CommentInput } from './CommentInput'
import { Comment } from './Comment'
import { Skeleton } from '@/components/ui/skeleton'

interface PostCommentsProps {
  postId: string
}

export function PostComments({ postId }: PostCommentsProps) {
  const [commentText, setCommentText] = useState('')
  
  const { data: comments, isLoading } = useQuery({
    queryKey: queryKeys.comments.byPost(postId),
    queryFn: () => getCommentsByPost(postId),
  })

  const addCommentMutation = useAddComment()

  const handleSubmit = () => {
    if (!commentText.trim()) return

    addCommentMutation.mutate(
      {
        postId,
        text: commentText,
      },
      {
        onSuccess: () => {
          setCommentText('')
        },
      }
    )
  }

  return (
    <div className="border-t border-ig-border-light">
      <div className="max-h-[400px] overflow-y-auto px-4 py-3">
        {isLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        ) : (
          <div className="space-y-3">
            {comments?.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </div>

      <CommentInput
        value={commentText}
        onChange={setCommentText}
        onSubmit={handleSubmit}
        isSubmitting={addCommentMutation.isPending}
      />
    </div>
  )
}