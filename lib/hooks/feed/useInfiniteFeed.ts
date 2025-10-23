import { useInfiniteQuery } from '@tanstack/react-query'
import { getInfinitePosts } from '@/lib/api'
import { queryKeys } from '@/lib/constants/queryKeys'

export function useInfiniteFeed() {
  return useInfiniteQuery({
    queryKey: queryKeys.feed.infinite,
    queryFn: ({ pageParam }) => getInfinitePosts(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: undefined as string | undefined,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
  })
}