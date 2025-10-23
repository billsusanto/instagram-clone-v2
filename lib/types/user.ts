export interface User {
  id: string
  username: string
  fullName: string
  avatarUrl: string
  bio: string
  verified: boolean
  followerCount: number
  followingCount: number
  postCount: number
  createdAt: string
}

export interface UserSuggestion extends User {
  mutualFollowers: number
  isFollowing: boolean
}