'use client'

import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useInfiniteFeed } from '@/lib/hooks/feed/useInfiniteFeed'
import { PostCard } from './PostCard'
import { PostSkeleton } from './PostSkeleton'
import { LoadingSpinner } from '@/components/shared/LoadingSpinner'
import { EmptyState } from '@/components/shared/EmptyState'

export function FeedContainer() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteFeed()

  const { ref, inView } = useInView({
    threshold: 0,
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) {
    return (
      <div className="space-y-6">
        <PostSkeleton />
        <PostSkeleton />
        <PostSkeleton />
      </div>
    )
  }

  if (isError) {
    return (
      <EmptyState
        title="Something went wrong"
        description="We couldn't load the feed. Please try again."
      />
    )
  }

  const posts = data?.pages.flatMap((page) => page.posts) ?? []

  if (posts.length === 0) {
    return (
      <EmptyState
        title="No posts yet"
        description="Start following people to see their posts here."
      />
    )
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}

      {/* Load more trigger */}
      {hasNextPage && (
        <div ref={ref} className="flex justify-center py-8">
          {isFetchingNextPage && <LoadingSpinner />}
        </div>
      )}
    </div>
  )
}