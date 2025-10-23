'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { ProfileHeader } from '@/components/profile/ProfileHeader'
import { ProfileTabs } from '@/components/profile/ProfileTabs'
import { ProfileGrid } from '@/components/profile/ProfileGrid'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'

// Mock data - in a real app, this would come from an API
const mockUser = {
  id: '1',
  username: 'johndoe',
  fullName: 'John Doe',
  avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe',
  bio: 'Photographer 📸 | Traveler ✈️ | Coffee lover ☕',
  verified: true,
  followerCount: 125000,
  followingCount: 450,
  postCount: 287,
  createdAt: new Date('2020-01-15').toISOString(),
}

const mockPosts = Array.from({ length: 12 }, (_, i) => ({
  id: `post-${i}`,
  user: mockUser,
  images: [{
    id: `image-${i}`,
    url: `https://picsum.photos/seed/${i}/400/400`,
    altText: `Post ${i + 1} image`,
    width: 400,
    height: 400,
  }],
  caption: `Post #${i + 1}`,
  likeCount: Math.floor(Math.random() * 10000),
  commentCount: Math.floor(Math.random() * 500),
  likedByUser: false,
  savedByUser: false,
  createdAt: new Date(Date.now() - i * 86400000).toISOString(),
}))

type ProfileTab = 'posts' | 'reels' | 'saved'

export default function ProfilePage() {
  const params = useParams()
  const username = params.username as string

  const [activeTab, setActiveTab] = useState<ProfileTab>('posts')
  const [isFollowing, setIsFollowing] = useState(false)

  // In a real app, you would fetch user data based on username
  const isOwnProfile = username === 'yourname'

  return (
    <div className="min-h-screen bg-white">
      <ProfileHeader
        user={{ ...mockUser, username }}
        isOwnProfile={isOwnProfile}
        isFollowing={isFollowing}
        onFollowToggle={() => setIsFollowing(!isFollowing)}
      />

      <div className="border-t border-ig-border">
        <div className="max-w-[935px] mx-auto">
          <ProfileTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
            showSaved={isOwnProfile}
          />

          <div className="py-4">
            {activeTab === 'posts' && <ProfileGrid posts={mockPosts} />}
            {activeTab === 'reels' && (
              <div className="text-center py-16 text-ig-text-secondary">
                No reels yet
              </div>
            )}
            {activeTab === 'saved' && (
              <div className="text-center py-16 text-ig-text-secondary">
                Only you can see what you&apos;ve saved
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
