'use client'

import { useState } from 'react'
import { Post } from '@/lib/types'
import { PostHeader } from './PostHeader'
import { PostImage } from './PostImage'
import { PostActions } from './PostActions'
import { PostCaption } from './PostCaption'
import { PostComments } from './PostComments'

interface PostCardProps {
  post: Post
}

export function PostCard({ post }: PostCardProps) {
  const [showComments, setShowComments] = useState(false)

  return (
    <article className="bg-white border border-ig-border rounded-lg overflow-hidden shadow-ig-card">
      <PostHeader
        user={post.user}
        location={post.location}
        postId={post.id}
      />

      <PostImage 
        images={post.images} 
        postId={post.id}
        isLiked={post.likedByUser}
      />

      <PostActions
        postId={post.id}
        likeCount={post.likeCount}
        commentCount={post.commentCount}
        isLiked={post.likedByUser}
        isSaved={post.savedByUser}
        onCommentClick={() => setShowComments(true)}
      />

      <PostCaption
        username={post.user.username}
        caption={post.caption}
        createdAt={post.createdAt}
      />

      {post.commentCount > 0 && !showComments && (
        <button
          onClick={() => setShowComments(true)}
          className="px-4 pb-2 text-sm text-ig-text-secondary hover:text-ig-text-primary"
        >
          View all {post.commentCount} comments
        </button>
      )}

      {showComments && <PostComments postId={post.id} />}
    </article>
  )
}