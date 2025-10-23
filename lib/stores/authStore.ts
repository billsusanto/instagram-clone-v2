import { create } from 'zustand'
import { User } from '@/lib/types'

interface AuthStore {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  setUser: (user: User | null) => void
  logout: () => void
}

// Mock current user
const CURRENT_USER: User = {
  id: 'current-user',
  username: 'yourname',
  fullName: 'Your Name',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=yourname',
  bio: 'Living my best life 🌟',
  verified: false,
  followerCount: 1234,
  followingCount: 567,
  postCount: 89,
  createdAt: new Date().toISOString(),
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: CURRENT_USER,
  isAuthenticated: true,
  isLoading: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  logout: () => set({ user: null, isAuthenticated: false }),
}))