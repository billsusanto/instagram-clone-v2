import { Comment } from '@/lib/types'
import { generateCommentsForPost } from './mockData'
import { mockDelay } from './mockDelay'

// Cache comments per post
const commentsCache = new Map<string, Comment[]>()

export async function getCommentsByPost(postId: string): Promise<Comment[]> {
  await mockDelay(500)
  
  if (!commentsCache.has(postId)) {
    commentsCache.set(postId, generateCommentsForPost(postId))
  }
  
  return commentsCache.get(postId) || []
}

export async function createComment({
  postId,
  text,
  parentCommentId,
}: {
  postId: string
  text: string
  parentCommentId?: string | null
}): Promise<Comment> {
  await mockDelay(400)
  
  const newComment: Comment = {
    id: `comment-${Date.now()}`,
    postId,
    user: {
      id: 'current-user',
      username: 'yourname',
      fullName: 'Your Name',
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yourname',
      bio: '',
      verified: false,
      followerCount: 0,
      followingCount: 0,
      postCount: 0,
      createdAt: new Date().toISOString(),
    },
    text,
    likeCount: 0,
    createdAt: new Date().toISOString(),
    parentCommentId: parentCommentId || null,
    likedByUser: false,
  }
  
  const comments = commentsCache.get(postId) || []
  comments.unshift(newComment)
  commentsCache.set(postId, comments)
  
  return newComment
}

export async function likeComment(commentId: string): Promise<{ success: boolean }> {
  await mockDelay(200)
  return { success: true }
}