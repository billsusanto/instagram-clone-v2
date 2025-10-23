import { User } from '@/lib/types'
import { MOCK_USERS } from './mockData'
import { mockDelay } from './mockDelay'

export async function getProfile(username: string): Promise<User | null> {
  await mockDelay(400)
  return MOCK_USERS.find((user) => user.username === username) || null
}

export async function getUserPosts(username: string) {
  await mockDelay(500)
  
  const user = MOCK_USERS.find((u) => u.username === username)
  if (!user) return []
  
  // Return posts from this user
  return []
}

export async function followUser(userId: string): Promise<{ success: boolean }> {
  await mockDelay(300)
  return { success: true }
}

export async function searchUsers(query: string): Promise<User[]> {
  await mockDelay(400)
  
  if (!query) return []
  
  const lowerQuery = query.toLowerCase()
  return MOCK_USERS.filter(
    (user) =>
      user.username.toLowerCase().includes(lowerQuery) ||
      user.fullName.toLowerCase().includes(lowerQuery)
  ).slice(0, 10)
}