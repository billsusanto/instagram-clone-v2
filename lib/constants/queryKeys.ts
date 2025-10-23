export const queryKeys = {
  feed: {
    infinite: ['feed', 'infinite'] as const,
    all: ['feed'] as const,
  },
  post: {
    byId: (id: string) => ['post', id] as const,
    all: ['posts'] as const,
  },
  user: {
    profile: (username: string) => ['user', 'profile', username] as const,
    posts: (username: string) => ['user', 'posts', username] as const,
    all: ['users'] as const,
  },
  comments: {
    byPost: (postId: string) => ['comments', postId] as const,
    all: ['comments'] as const,
  },
  stories: {
    all: ['stories'] as const,
  },
  search: {
    users: (query: string) => ['search', 'users', query] as const,
  },
}