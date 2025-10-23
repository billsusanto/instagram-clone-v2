'use client'

import Link from 'next/link'
import { Post } from '@/lib/types'
import { Heart, MessageCircle } from 'lucide-react'
import { formatNumber } from '@/lib/utils/formatNumber'

interface ProfileGridProps {
  posts: Post[]
}

export function ProfileGrid({ posts }: ProfileGridProps) {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="rounded-full border-2 border-ig-text-primary p-6 mb-4">
          <div className="h-16 w-16" />
        </div>
        <h3 className="text-2xl font-bold mb-2">No Posts Yet</h3>
        <p className="text-ig-text-secondary">
          When you share photos, they&apos;ll appear on your profile.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 gap-1 md:gap-4">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/p/${post.id}`}
          className="group relative aspect-square overflow-hidden bg-ig-bg-tertiary"
        >
          <img
            src={post.images[0].url}
            alt={post.images[0].altText}
            className="h-full w-full object-cover"
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 fill-white" />
              <span className="font-semibold">{formatNumber(post.likeCount)}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-6 w-6 fill-white" />
              <span className="font-semibold">{formatNumber(post.commentCount)}</span>
            </div>
          </div>

          {/* Multiple images indicator */}
          {post.images.length > 1 && (
            <div className="absolute top-2 right-2">
              <svg
                className="h-5 w-5 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 9.5L3 6.5C3 5.39543 3.89543 4.5 5 4.5L8 4.5M16 4.5L19 4.5C20.1046 4.5 21 5.39543 21 6.5L21 9.5M21 14.5L21 17.5C21 18.6046 20.1046 19.5 19 19.5L16 19.5M8 19.5L5 19.5C3.89543 19.5 3 18.6046 3 17.5L3 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
              </svg>
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}
