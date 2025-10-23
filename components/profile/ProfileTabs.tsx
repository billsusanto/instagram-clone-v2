'use client'

import { Grid3x3, Bookmark, UserSquare, Film } from 'lucide-react'
import { useState } from 'react'

interface ProfileTabsProps {
  activeTab?: 'posts' | 'reels' | 'saved' | 'tagged'
  onTabChange?: (tab: 'posts' | 'reels' | 'saved' | 'tagged') => void
  showSaved?: boolean
}

export function ProfileTabs({ activeTab = 'posts', onTabChange, showSaved = true }: ProfileTabsProps) {
  const [currentTab, setCurrentTab] = useState(activeTab)

  const handleTabClick = (tab: 'posts' | 'reels' | 'saved' | 'tagged') => {
    setCurrentTab(tab)
    onTabChange?.(tab)
  }

  return (
    <div className="flex border-t border-ig-border">
      <button
        onClick={() => handleTabClick('posts')}
        className={`flex flex-1 items-center justify-center gap-1 border-t py-3 text-xs font-semibold uppercase tracking-wide ${
          currentTab === 'posts'
            ? 'border-ig-text-primary text-ig-text-primary'
            : 'border-transparent text-ig-text-secondary'
        }`}
        aria-label="Posts"
        aria-current={currentTab === 'posts' ? 'page' : undefined}
      >
        <Grid3x3 className="h-3 w-3" />
        <span>Posts</span>
      </button>

      <button
        onClick={() => handleTabClick('reels')}
        className={`flex flex-1 items-center justify-center gap-1 border-t py-3 text-xs font-semibold uppercase tracking-wide ${
          currentTab === 'reels'
            ? 'border-ig-text-primary text-ig-text-primary'
            : 'border-transparent text-ig-text-secondary'
        }`}
        aria-label="Reels"
        aria-current={currentTab === 'reels' ? 'page' : undefined}
      >
        <Film className="h-3 w-3" />
        <span>Reels</span>
      </button>

      {showSaved && (
        <button
          onClick={() => handleTabClick('saved')}
          className={`flex flex-1 items-center justify-center gap-1 border-t py-3 text-xs font-semibold uppercase tracking-wide ${
            currentTab === 'saved'
              ? 'border-ig-text-primary text-ig-text-primary'
              : 'border-transparent text-ig-text-secondary'
          }`}
          aria-label="Saved"
          aria-current={currentTab === 'saved' ? 'page' : undefined}
        >
          <Bookmark className="h-3 w-3" />
          <span>Saved</span>
        </button>
      )}

      <button
        onClick={() => handleTabClick('tagged')}
        className={`flex flex-1 items-center justify-center gap-1 border-t py-3 text-xs font-semibold uppercase tracking-wide ${
          currentTab === 'tagged'
            ? 'border-ig-text-primary text-ig-text-primary'
            : 'border-transparent text-ig-text-secondary'
        }`}
        aria-label="Tagged"
        aria-current={currentTab === 'tagged' ? 'page' : undefined}
      >
        <UserSquare className="h-3 w-3" />
        <span>Tagged</span>
      </button>
    </div>
  )
}
