'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { User } from '@/lib/types'
import { CheckCircle2, Settings } from 'lucide-react'

interface ProfileHeaderProps {
  user: User
  isOwnProfile?: boolean
  isFollowing?: boolean
  onFollowToggle?: () => void
}

export function ProfileHeader({ user, isOwnProfile = false, isFollowing = false, onFollowToggle }: ProfileHeaderProps) {
  return (
    <div className="border-b border-ig-border bg-white px-5 py-8">
      <div className="mx-auto flex max-w-4xl gap-10">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <Avatar className="h-36 w-36">
            <AvatarImage src={user.avatarUrl} alt={`${user.username}'s profile`} />
            <AvatarFallback>{user.fullName.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
        </div>

        {/* Profile Info */}
        <div className="flex-1 min-w-0">
          {/* Top Row: Username and Actions */}
          <div className="mb-5 flex items-center gap-5">
            <h1 className="text-xl font-light text-ig-text-primary">{user.username}</h1>
            {user.verified && (
              <CheckCircle2 className="h-5 w-5 text-ig-primary" aria-label="Verified" />
            )}
            <div className="flex gap-2">
              {isOwnProfile ? (
                <>
                  <Button variant="secondary" size="sm">
                    Edit profile
                  </Button>
                  <Button variant="secondary" size="sm">
                    View archive
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-5 w-5" />
                  </Button>
                </>
              ) : (
                <>
                  <Button variant={isFollowing ? "secondary" : "primary"} size="sm" onClick={onFollowToggle}>
                    {isFollowing ? 'Following' : 'Follow'}
                  </Button>
                  <Button variant="secondary" size="sm">
                    Message
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Stats Row */}
          <div className="mb-5 flex gap-10">
            <button className="flex gap-1 hover:opacity-70" aria-label={`${user.postCount} posts`}>
              <span className="font-semibold">{user.postCount}</span>
              <span className="text-ig-text-primary">posts</span>
            </button>
            <button className="flex gap-1 hover:opacity-70" aria-label={`${user.followerCount} followers`}>
              <span className="font-semibold">{user.followerCount.toLocaleString()}</span>
              <span className="text-ig-text-primary">followers</span>
            </button>
            <button className="flex gap-1 hover:opacity-70" aria-label={`${user.followingCount} following`}>
              <span className="font-semibold">{user.followingCount.toLocaleString()}</span>
              <span className="text-ig-text-primary">following</span>
            </button>
          </div>

          {/* Bio */}
          <div>
            <p className="mb-1 text-sm font-semibold text-ig-text-primary">{user.fullName}</p>
            {user.bio && (
              <p className="whitespace-pre-wrap text-sm text-ig-text-primary">{user.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
