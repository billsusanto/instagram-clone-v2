import { User } from './user'

export interface Post {
  id: string
  user: User
  images: PostImage[]
  caption: string
  location?: string
  likeCount: number
  commentCount: number
  createdAt: string
  likedByUser: boolean
  savedByUser: boolean
}

export interface PostImage {
  id: string
  url: string
  altText: string
  width: number
  height: number
}

export interface InfinitePostsResponse {
  posts: Post[]
  nextCursor: string | null
  hasMore: boolean
}