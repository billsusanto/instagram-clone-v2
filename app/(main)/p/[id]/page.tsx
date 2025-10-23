'use client'

import { useParams } from 'next/navigation'
import { PostCard } from '@/components/feed/PostCard'

// Mock post data - in a real app, this would be fetched based on ID
const mockPost = {
  id: '1',
  user: {
    id: '1',
    username: 'johndoe',
    fullName: 'John Doe',
    avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=johndoe',
    bio: '',
    verified: true,
    followerCount: 125000,
    followingCount: 450,
    postCount: 287,
    createdAt: new Date('2020-01-15').toISOString(),
  },
  images: [{
    id: 'image-1',
    url: 'https://picsum.photos/seed/1/600/600',
    altText: 'Beautiful sunset at the beach',
    width: 600,
    height: 600,
  }],
  caption: 'Beautiful sunset at the beach 🌅',
  location: 'Malibu, California',
  likeCount: 1243,
  commentCount: 89,
  likedByUser: false,
  savedByUser: false,
  createdAt: new Date(Date.now() - 3600000).toISOString(),
}

export default function PostPage() {
  const params = useParams()
  const postId = params.id as string

  return (
    <div className="py-8 px-4">
      <div className="max-w-[614px] mx-auto">
        <PostCard post={{ ...mockPost, id: postId }} />
      </div>
    </div>
  )
}
