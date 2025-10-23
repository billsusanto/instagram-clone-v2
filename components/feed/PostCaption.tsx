'use client'

import { useState } from 'react'
import Link from 'next/link'
import { formatRelativeTime } from '@/lib/utils/formatDate'

interface PostCaptionProps {
  username: string
  caption: string
  createdAt: string
}

export function PostCaption({ username, caption, createdAt }: PostCaptionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const shouldTruncate = caption.length > 100
  const displayCaption = shouldTruncate && !isExpanded ? caption.slice(0, 100) + '...' : caption

  return (
    <div className="px-4">
      <p className="text-sm">
        <Link href={`/${username}`} className="font-semibold hover:opacity-70">
          {username}
        </Link>
        <span className="ml-2">{displayCaption}</span>
        {shouldTruncate && !isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="ml-1 text-ig-text-secondary hover:text-ig-text-primary"
          >
            more
          </button>
        )}
      </p>

      <p className="mt-2 text-xs text-ig-text-secondary uppercase">
        {formatRelativeTime(createdAt)}
      </p>
    </div>
  )
}