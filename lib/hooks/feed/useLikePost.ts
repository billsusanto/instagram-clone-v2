import { useMutation, useQueryClient } from '@tanstack/react-query'
import { likePost } from '@/lib/api'
import { queryKeys } from '@/lib/constants/queryKeys'
import { Post } from '@/lib/types'

export function useLikePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: likePost,
    onMutate: async (postId) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: queryKeys.feed.infinite })

      // Snapshot previous value
      const previousData = queryClient.getQueryData(queryKeys.feed.infinite)

      // Optimistically update
      queryClient.setQueryData(queryKeys.feed.infinite, (old: any) => {
        if (!old) return old

        return {
          ...old,
          pages: old.pages.map((page: any) => ({
            ...page,
            posts: page.posts.map((post: Post) => {
              if (post.id === postId) {
                return {
                  ...post,
                  likedByUser: !post.likedByUser,
                  likeCount: post.likedByUser
                    ? post.likeCount - 1
                    : post.likeCount + 1,
                }
              }
              return post
            }),
          })),
        }
      })

      return { previousData }
    },
    onError: (err, postId, context) => {
      // Rollback on error
      if (context?.previousData) {
        queryClient.setQueryData(queryKeys.feed.infinite, context.previousData)
      }
    },
  })
}