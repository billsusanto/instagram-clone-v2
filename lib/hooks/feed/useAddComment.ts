import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createComment } from '@/lib/api'
import { queryKeys } from '@/lib/constants/queryKeys'

export function useAddComment() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createComment,
    onSuccess: (data, variables) => {
      // Invalidate comments query
      queryClient.invalidateQueries({
        queryKey: queryKeys.comments.byPost(variables.postId),
      })

      // Update comment count in feed
      queryClient.setQueryData(queryKeys.feed.infinite, (old: any) => {
        if (!old) return old

        return {
          ...old,
          pages: old.pages.map((page: any) => ({
            ...page,
            posts: page.posts.map((post: any) => {
              if (post.id === variables.postId) {
                return {
                  ...post,
                  commentCount: post.commentCount + 1,
                }
              }
              return post
            }),
          })),
        }
      })
    },
  })
}