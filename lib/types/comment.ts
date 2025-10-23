import { User } from './user'

export interface Comment {
  id: string
  postId: string
  user: User
  text: string
  likeCount: number
  createdAt: string
  parentCommentId: string | null
  likedByUser: boolean
  replies?: Comment[]
}