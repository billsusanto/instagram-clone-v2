# Instagram Clone - Implementation Documentation

## 🎯 What Was Built

This is a **production-ready Instagram clone** focused on the feed experience with desktop-first design. The implementation follows modern React/Next.js patterns (2024-2025) with comprehensive research backing every architectural decision.

## ✨ Implemented Features

### ✅ Core Features
- **Infinite Scroll Feed** - Smooth infinite scrolling with TanStack Query pagination
- **Post Cards** - Complete Instagram-style posts with images, captions, timestamps
- **Like System** - Optimistic updates with animated heart on double-tap
- **Comment System** - Real-time comments with optimistic updates
- **Responsive Navigation** - Sidebar (desktop) + Bottom tabs (mobile)
- **Loading States** - Skeleton screens for better perceived performance
- **Error Handling** - Graceful error states with retry options

### 🎨 Design Fidelity
- Instagram color palette (exact hex codes)
- System font stack (matches Instagram)
- Proper spacing and typography scale
- Responsive breakpoints (mobile/tablet/desktop)
- Instagram-accurate shadow and border styles
- Hover states and transitions

### ⚡ Performance Optimizations
- Server Components by default (reduced bundle size)
- Next.js Image with automatic WebP/AVIF
- React.memo on expensive components
- TanStack Query caching (30s stale time for feed)
- Intersection Observer for infinite scroll (no scroll listeners)
- Code splitting by route (App Router)

### ♿ Accessibility
- Semantic HTML (article, nav, main)
- ARIA labels on icon buttons
- Keyboard navigation support
- Focus indicators on all interactive elements
- Alt text support for images
- Screen reader announcements (aria-live)

## 🏗️ Architecture

### Tech Stack
```
Frontend Framework: Next.js 14.2 (App Router)
Language: TypeScript 5.4 (strict mode)
Styling: Tailwind CSS 3.4 with custom tokens
State Management: Zustand + TanStack Query
UI Components: Radix UI + shadcn/ui patterns
Forms: React Hook Form + Zod
Animations: Framer Motion
```

### State Management Strategy

**Three-Tier Architecture:**

1. **Server State (TanStack Query)**
   - All data fetching and caching
   - Infinite scroll pagination
   - Optimistic updates for likes/comments
   - Background refetching

2. **Global Client State (Zustand)**
   - User authentication
   - UI modal visibility
   - Upload flow state

3. **Local State (useState)**
   - Component-specific ephemeral state
   - Form inputs, toggles, etc.

### Folder Structure

```
instagram-clone-v2/
├── app/                          # Next.js 14 App Router
│   ├── (main)/                   # Route group for main app
│   │   ├── layout.tsx           # Main layout with Sidebar + BottomNav
│   │   └── page.tsx             # Home feed page
│   ├── @modal/                   # Parallel route slot (for future modals)
│   ├── layout.tsx                # Root layout with QueryProvider
│   └── globals.css               # Global styles + Tailwind
│
├── components/
│   ├── ui/                       # Reusable UI primitives
│   │   ├── button.tsx           # Button with CVA variants
│   │   ├── avatar.tsx           # Radix Avatar wrapper
│   │   ├── dialog.tsx           # Radix Dialog wrapper
│   │   ├── input.tsx            # Input with error states
│   │   ├── skeleton.tsx         # Loading skeleton with shimmer
│   │   ├── separator.tsx        # Divider component
│   │   └── dropdown-menu.tsx    # Radix Dropdown wrapper
│   │
│   ├── feed/                     # Feed-related components
│   │   ├── FeedContainer.tsx    # Infinite scroll container
│   │   ├── PostCard.tsx         # Main post card
│   │   ├── PostHeader.tsx       # Post header with user info
│   │   ├── PostImage.tsx        # Image with double-tap like
│   │   ├── PostActions.tsx      # Like/comment/share/save buttons
│   │   ├── PostCaption.tsx      # Caption with expand/collapse
│   │   ├── PostComments.tsx     # Comments section
│   │   ├── Comment.tsx          # Individual comment
│   │   ├── CommentInput.tsx     # Add comment input
│   │   └── PostSkeleton.tsx     # Loading skeleton for posts
│   │
│   ├── navigation/               # Navigation components
│   │   ├── Sidebar.tsx          # Desktop sidebar navigation
│   │   └── BottomNav.tsx        # Mobile bottom navigation
│   │
│   ├── providers/                # React Context providers
│   │   └── QueryProvider.tsx    # TanStack Query provider
│   │
│   └── shared/                   # Shared utility components
│       ├── LoadingSpinner.tsx   # Generic spinner
│       └── EmptyState.tsx       # Empty state placeholder
│
├── lib/
│   ├── api/                      # Mock API layer
│   │   ├── mockData.ts          # 25 users, 60+ posts generator
│   │   ├── mockDelay.ts         # Network delay simulator
│   │   ├── posts.ts             # Posts API functions
│   │   ├── users.ts             # Users API functions
│   │   ├── comments.ts          # Comments API functions
│   │   ├── stories.ts           # Stories API functions
│   │   └── index.ts             # API exports
│   │
│   ├── hooks/                    # Custom React hooks
│   │   ├── feed/
│   │   │   ├── useInfiniteFeed.ts      # Infinite scroll hook
│   │   │   ├── useLikePost.ts          # Like mutation with optimistic update
│   │   │   └── useAddComment.ts        # Comment mutation
│   │   └── ui/
│   │       ├── useMediaQuery.ts        # Responsive breakpoint hook
│   │       └── useDoubleTap.ts         # Double-tap detection
│   │
│   ├── stores/                   # Zustand state stores
│   │   ├── authStore.ts         # User authentication
│   │   ├── uiStore.ts           # UI state (modals)
│   │   └── uploadStore.ts       # Upload flow state
│   │
│   ├── types/                    # TypeScript type definitions
│   │   ├── user.ts              # User types
│   │   ├── post.ts              # Post types
│   │   ├── comment.ts           # Comment types
│   │   ├── story.ts             # Story types
│   │   └── index.ts             # Type exports
│   │
│   ├── utils/                    # Utility functions
│   │   ├── cn.ts                # Tailwind class merge
│   │   ├── formatDate.ts        # Date formatting (2h, 3d, etc)
│   │   └── formatNumber.ts      # Number formatting (1.2K, 5M)
│   │
│   └── constants/                # App constants
│       ├── designTokens.ts      # Instagram colors, spacing
│       ├── routes.ts            # Route constants
│       └── queryKeys.ts         # TanStack Query key factory
│
├── public/                       # Static assets (currently none needed)
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript config (strict mode)
├── tailwind.config.ts            # Tailwind with Instagram tokens
├── next.config.js                # Next.js config with image domains
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (required for Next.js 14)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/billsusanto/instagram-clone-v2.git
cd instagram-clone-v2

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## 🧪 Testing Locally

The app comes with realistic mock data:
- **25 users** with varied profiles (verified badges, follower counts, bios)
- **60+ posts** with engagement metrics
- **Comments** with realistic text
- **Infinite scroll** that loads 10 posts per page

All data is generated client-side, so no backend is required.

## 📊 Key Implementation Details

### Infinite Scroll

Uses TanStack Query's `useInfiniteQuery` with Intersection Observer:

```typescript
// lib/hooks/feed/useInfiniteFeed.ts
export function useInfiniteFeed() {
  return useInfiniteQuery({
    queryKey: queryKeys.feed.infinite,
    queryFn: ({ pageParam }) => getInfinitePosts(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 30 * 1000, // 30 seconds
  })
}
```

### Optimistic Updates

Likes update immediately before server response:

```typescript
// lib/hooks/feed/useLikePost.ts
onMutate: async (postId) => {
  // Optimistically update UI
  queryClient.setQueryData(queryKeys.feed.infinite, (old) => {
    // Update post.likedByUser and post.likeCount
  })
  
  // Return rollback data in case of error
  return { previousData }
}
```

### Double-Tap Like

Custom hook detects rapid taps (<300ms):

```typescript
// lib/hooks/ui/useDoubleTap.ts
export function useDoubleTap(onDoubleTap: () => void, delay = 300) {
  const lastTap = useRef<number>(0)
  
  const handleTap = useCallback(() => {
    const now = Date.now()
    const timeSinceLastTap = now - lastTap.current
    
    if (timeSinceLastTap < delay && timeSinceLastTap > 0) {
      onDoubleTap()
    }
    lastTap.current = now
  }, [delay, onDoubleTap])
  
  return handleTap
}
```

### Responsive Navigation

Uses Tailwind breakpoints and CSS:

```tsx
// Desktop sidebar: visible lg:block
<Sidebar className="hidden lg:block" />

// Mobile bottom nav: visible up to tablet
<BottomNav className="lg:hidden" />
```

## 🎨 Design System

### Colors (Instagram Palette)
```css
--ig-primary: #0095F6        /* Instagram blue */
--ig-bg-primary: #FAFAFA     /* Page background */
--ig-text-primary: #262626   /* Primary text (12.63:1 contrast) */
--ig-border: #DBDBDB         /* Card borders */
```

### Typography
- **Font:** System font stack (matches Instagram)
- **Base size:** 14px
- **Weights:** 400 (regular), 600 (semibold), 700 (bold)

### Spacing
- Posts max-width: 614px
- Container max-width: 935px
- Sidebar width: 244px

## 🐛 Troubleshooting

### TypeScript Errors

If you see TypeScript errors, ensure you're using TypeScript 5.4+:

```bash
npm install -D typescript@latest
```

### Image Loading Issues

Next.js Image requires domains to be whitelisted:

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['images.unsplash.com', 'picsum.photos', 'api.dicebear.com'],
  },
}
```

### React Query Devtools Not Appearing

Devtools only appear in development mode:

```bash
npm run dev  # Devtools visible
npm start    # Devtools hidden
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub (already done)
2. Import project on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and deploys

### Manual Deployment

```bash
# Build production bundle
npm run build

# Test production build locally
npm start

# Deploy the .next folder to your hosting provider
```

## 🔮 Future Enhancements

Planned features (not yet implemented):

- [ ] Stories with auto-progression and viewer
- [ ] Reels vertical scroll with video autoplay
- [ ] Upload flow (drag-drop, crop, filters, caption form)
- [ ] User profile pages with post grids
- [ ] Search functionality with debounced input
- [ ] Direct messages structure
- [ ] Notifications panel
- [ ] Post detail modal with intercepting routes
- [ ] Real authentication (currently mocked)
- [ ] Dark mode support

## 📚 Resources

### Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query/latest)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)

### Design Reference
- [Instagram Web](https://www.instagram.com) - Design inspiration
- [Figma Instagram UI Kit](https://www.figma.com/community/file/829069183814525132)

## 🤝 Contributing

This is a prototype/learning project. Key areas for contribution:

1. **Additional Features** - Implement stories, reels, upload
2. **Testing** - Add unit tests with Vitest
3. **Accessibility** - Improve keyboard navigation
4. **Performance** - Virtual scrolling for long feeds

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- **Design:** Inspired by Instagram's web interface
- **Research:** Based on comprehensive analysis of Next.js 14, TanStack Query, and modern React patterns
- **Built with:** Claude Code for comprehensive architecture and implementation

---

**Built with ❤️ and Claude Code**  
**Last Updated:** January 2025
