import { User } from './user'

export interface Story {
  id: string
  user: User
  mediaUrl: string
  mediaType: 'image' | 'video'
  createdAt: string
  expiresAt: string
  seenByUser: boolean
  viewerCount: number
}