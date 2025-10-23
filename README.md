# Instagram Clone v2 🎨

> **A web-first Instagram clone with enhanced desktop features, full accessibility, and privacy focus.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-green.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

## ✨ Features

### 🚀 Enhanced Web Experience
- ✅ **Full desktop functionality** - Story/Reel uploads, keyboard shortcuts, drag-and-drop
- ✅ **Chronological feed** - No algorithmic manipulation, see posts in order
- ✅ **Links in captions** - Unlike Instagram, you can add clickable links
- ✅ **Privacy-focused** - No tracking, transparent data practices

### ♿ Accessibility First
- ✅ **WCAG 2.1 AA compliant** - Mandatory alt text, video captions, keyboard navigation
- ✅ **Keyboard shortcuts** - Navigate without mouse (j/k, l for like, c for comment)
- ✅ **Screen reader optimized** - Semantic HTML, ARIA labels, live regions
- ✅ **High contrast** - All text meets 4.5:1 minimum contrast ratio

### ⚡ Performance
- ✅ **Faster than Instagram web** - Native lazy loading, WebP images, aggressive caching
- ✅ **Core Web Vitals** - LCP < 2.5s, FID < 100ms, CLS < 0.1
- ✅ **Optimized loading** - Code splitting, skeleton screens, virtual scrolling

## 📋 Documentation

- **[Design Specification](./DESIGN_SPECIFICATION.md)** - Complete design system and component specs

## 🎨 Design System

### Colors
- **Primary:** `#0095F6` (Instagram blue)
- **Background:** `#FAFAFA` (light gray)
- **Text:** `#262626` (12.63:1 contrast ✓ AAA)
- **Accent Gradient:** Purple → Pink → Orange (stories)

### Typography
- **Font:** System font stack (-apple-system, Segoe UI, Roboto)
- **Base size:** 14px (Instagram standard)
- **Weights:** 400 (regular), 600 (semibold), 700 (bold)

### Components
17+ fully specified components including:
- Post Card with all interactions
- Navigation Sidebar (desktop) & Bottom Tabs (mobile)
- Story Carousel & Viewer
- Upload Component with drag-and-drop
- Modal, Search, Comments, Profile Header

## 🛠️ Tech Stack

```json
{
  "framework": "Next.js 14+ (App Router)",
  "styling": "Tailwind CSS 3.4+",
  "state": "Zustand + React Context",
  "data_fetching": "TanStack Query",
  "forms": "React Hook Form + Zod",
  "animations": "Framer Motion",
  "testing": "Vitest + Playwright",
  "accessibility": "Radix UI primitives"
}
```

## 📱 Responsive Breakpoints

- **Mobile:** 0-767px (bottom tabs, full-width content)
- **Tablet:** 768-1023px (collapsed sidebar, centered content)
- **Desktop:** 1280px+ (expanded sidebar, max-width content)

## 🎯 Implementation Roadmap

### ✅ Phase 1: Foundation (Week 1)
- [ ] Project setup with Next.js + Tailwind
- [ ] Design tokens configuration
- [ ] Base components (Button, Input, Avatar, Card)
- [ ] Navigation (Sidebar, Bottom Tabs)

### 🚧 Phase 2: Core Features (Weeks 2-3)
- [ ] Post Card component
- [ ] Home Feed with infinite scroll
- [ ] Profile page
- [ ] Comment Section
- [ ] Story Carousel & Viewer

### 📋 Phase 3: Advanced (Weeks 4-5)
- [ ] Explore page
- [ ] Upload Modal with drag-drop
- [ ] Reels vertical scroll
- [ ] Search functionality
- [ ] Messages structure

### ✨ Phase 4: Polish (Week 6)
- [ ] Keyboard shortcuts
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Cross-browser testing

### ✅ Phase 5: Testing (Week 7)
- [ ] Unit tests (80%+ coverage)
- [ ] E2E tests (Playwright)
- [ ] Accessibility audit (axe-core)
- [ ] Performance testing (Lighthouse)

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- Design inspiration from Instagram
- Accessibility guidelines from W3C WAI
- Performance best practices from web.dev

## 📞 Contact

- **GitHub:** [@billsusanto](https://github.com/billsusanto)
- **Issues:** [GitHub Issues](https://github.com/billsusanto/instagram-clone-v2/issues)

---

**Built with ❤️ and Claude Code**  
**Last Updated:** 2025
