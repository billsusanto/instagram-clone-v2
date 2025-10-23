'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, PlusSquare, PlaySquare, User } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { useUIStore } from '@/lib/stores/uiStore'

const navItems = [
  { icon: Home, href: '/' },
  { icon: Search, href: '/search' },
  { icon: PlusSquare, href: '#', isCreate: true },
  { icon: PlaySquare, href: '/reels' },
  { icon: User, href: '/yourname' },
]

export function BottomNav() {
  const pathname = usePathname()
  const openUploadModal = useUIStore((state) => state.openUploadModal)

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-ig-border bg-white lg:hidden">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          
          if (item.isCreate) {
            return (
              <button
                key={index}
                onClick={openUploadModal}
                className="flex items-center justify-center p-2"
                aria-label="Create"
              >
                <item.icon className="h-6 w-6" />
              </button>
            )
          }
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center justify-center p-2',
                isActive && 'text-ig-text-primary'
              )}
            >
              <item.icon 
                className="h-6 w-6" 
                fill={isActive ? 'currentColor' : 'none'}
              />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}