export const ROUTES = {
  HOME: '/',
  EXPLORE: '/explore',
  REELS: '/reels',
  MESSAGES: '/direct',
  PROFILE: (username: string) => `/${username}`,
  POST: (id: string) => `/p/${id}`,
} as const