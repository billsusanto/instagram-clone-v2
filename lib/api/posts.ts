import { Post, InfinitePostsResponse } from '@/lib/types'
import { MOCK_POSTS } from './mockData'
import { mockDelay } from './mockDelay'

const POSTS_PER_PAGE = 10

export async function getInfinitePosts(cursor?: string): Promise<InfinitePostsResponse> {
  await mockDelay(800)

  const cursorIndex = cursor ? parseInt(cursor) : 0
  const posts = MOCK_POSTS.slice(cursorIndex, cursorIndex + POSTS_PER_PAGE)
  const hasMore = cursorIndex + POSTS_PER_PAGE < MOCK_POSTS.length
  const nextCursor = hasMore ? (cursorIndex + POSTS_PER_PAGE).toString() : null

  return {
    posts,
    nextCursor,
    hasMore,
  }
}

export async function getPostById(id: string): Promise<Post | null> {
  await mockDelay(300)
  return MOCK_POSTS.find((post) => post.id === id) || null
}

export async function likePost(postId: string): Promise<{ success: boolean }> {
  await mockDelay(200)
  
  // In real app, this would update the database
  const post = MOCK_POSTS.find((p) => p.id === postId)
  if (post) {
    post.likedByUser = !post.likedByUser
    post.likeCount += post.likedByUser ? 1 : -1
  }
  
  return { success: true }
}

export async function savePost(postId: string): Promise<{ success: boolean }> {
  await mockDelay(200)
  
  const post = MOCK_POSTS.find((p) => p.id === postId)
  if (post) {
    post.savedByUser = !post.savedByUser
  }
  
  return { success: true }
}