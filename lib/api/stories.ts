import { Story } from '@/lib/types'
import { MOCK_STORIES } from './mockData'
import { mockDelay } from './mockDelay'

export async function getStories(): Promise<Story[]> {
  await mockDelay(400)
  
  // Filter out expired stories
  const now = Date.now()
  return MOCK_STORIES.filter((story) => new Date(story.expiresAt).getTime() > now)
}