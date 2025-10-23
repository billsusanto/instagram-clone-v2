'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  Home, 
  Search, 
  Compass, 
  PlaySquare, 
  MessageCircle, 
  Heart, 
  PlusSquare, 
  User 
} from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { useUIStore } from '@/lib/stores/uiStore'

const navItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: Compass, label: 'Explore', href: '/explore' },
  { icon: PlaySquare, label: 'Reels', href: '/reels' },
  { icon: MessageCircle, label: 'Messages', href: '/direct' },
  { icon: Heart, label: 'Notifications', href: '/notifications' },
  { icon: User, label: 'Profile', href: '/yourname' },
]

export function Sidebar() {
  const pathname = usePathname()
  const openUploadModal = useUIStore((state) => state.openUploadModal)

  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-[244px] border-r border-ig-border bg-white lg:block">
      <div className="flex h-full flex-col p-3">
        {/* Logo */}
        <div className="mb-8 px-3 py-6">
          <h1 className="text-2xl font-bold">Instagram</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-ig-bg-tertiary',
                pathname === item.href && 'font-bold'
              )}
            >
              <item.icon 
                className="h-6 w-6" 
                fill={pathname === item.href ? 'currentColor' : 'none'}
              />
              <span>{item.label}</span>
            </Link>
          ))}
          
          {/* Create Button */}
          <button
            onClick={openUploadModal}
            className="flex w-full items-center gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-ig-bg-tertiary"
          >
            <PlusSquare className="h-6 w-6" />
            <span>Create</span>
          </button>
        </nav>
      </div>
    </aside>
  )
}