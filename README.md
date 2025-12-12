# AccruLabs.ai Website Redesign

A comprehensive redesign of AccruLabs.ai website to match or exceed nas.io quality standards with full responsive support for mobile, tablet, and desktop devices.

## 🚀 Project Status

**Phase 5: Polish, Optimization & Launch** ✅ **COMPLETED**

- ✅ SEO enhancements (meta tags, Open Graph, structured data, sitemap)
- ✅ Performance optimizations (image optimization, code splitting, bundle optimization)
- ✅ Accessibility features (WCAG 2.1 AA compliance, keyboard navigation, ARIA labels)
- ✅ All pages have proper metadata and structured data
- ✅ Benchmark testing framework ready

## 📋 Implementation Plan

This project follows a 5-phase implementation plan:

1. **Phase 1: Foundation & Design System** ✅
2. **Phase 2: Homepage & Core Pages Enhancement** ✅
3. **Phase 3: AccruTrain Landing Page** ✅
4. **Phase 4: Services Pages** ✅
5. **Phase 5: Polish, Optimization & Launch** ✅

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom design system (mobile-first)
- **Responsive Design**: Tailwind breakpoints + custom device detection
- **Animations**: Framer Motion (with reduced motion support)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component with responsive srcset

## 📁 Project Structure

```
app/
├── page.tsx (Homepage)
├── layout.tsx
└── globals.css

components/
├── Header.tsx (responsive with mobile menu)
├── Footer.tsx (responsive)
├── MobileMenu.tsx (hamburger menu)
├── Card.tsx (responsive glassmorphism)
├── Badge.tsx (responsive)
├── Button.tsx (responsive)
├── Section.tsx (responsive)
├── Hero.tsx (responsive)
├── Grid.tsx (responsive)
├── Accordion.tsx (responsive)
├── Calendar.tsx (responsive - mobile list, desktop grid)
├── InstructorCard.tsx (responsive)
├── SocialProof.tsx (responsive)
└── ResponsiveImage.tsx (device-aware images)

hooks/
├── useDevice.ts (device detection)
└── useResponsive.ts (responsive utilities)

lib/
├── design-system.ts (design tokens)
├── device-detection.ts (device detection logic)
└── utils.ts (utilities)
```

## 🎨 Design System

### Colors
- **Background**: Dark (#020617, #030712, #0f172a)
- **Primary**: Cyan (#38bdf8)
- **Accent**: Purple (#a855f7)
- **Text**: Light grays (#f8fafc, #cbd5e1, #94a3b8)

### Typography
- **Font**: Inter (Google Fonts)
- **Responsive sizes**: Mobile-first approach

### Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development

The development server will start on `http://localhost:3000`

## 🧪 Testing

**IMPORTANT**: Tests must pass before marking any phase as complete. This prevents issues from arising after phase updates.

### Quick Test Commands

```bash
# Run all tests
npm run test:all

# Unit tests only
npm test              # Run once
npm run test:watch    # Watch mode
npm run test:coverage # With coverage report

# E2E tests only
npm run test:e2e      # Headless
npm run test:e2e:ui   # With UI
```

### Testing Strategy

- **Unit Tests**: Test individual components (`components/__tests__/`)
- **E2E Tests**: Test full user flows (`e2e/`)
- **Performance**: Lighthouse benchmarks (manual or CI)
- **Pre-commit**: Tests run automatically before commits

See [TESTING.md](./TESTING.md) for complete testing guide and checklist.

## 📱 Responsive Design

All components are built with mobile-first responsive design:

- **Mobile** (< 640px): Touch-optimized, stacked layouts, hamburger menu
- **Tablet** (640px - 1024px): Hybrid layouts, touch + mouse support
- **Desktop** (> 1024px): Full feature set, hover effects, multi-column layouts

## ♿ Accessibility

- WCAG 2.1 AA compliance target
- Keyboard navigation support
- Screen reader compatible
- Touch targets meet minimum size (44x44px)
- Reduced motion support

## 📊 Performance Targets

- **Lighthouse Performance**: 95+ (mobile & desktop)
- **Lighthouse Accessibility**: 100
- **Page Load**: < 2s (desktop), < 3s (mobile)
- **First Contentful Paint**: < 1.5s (desktop), < 2s (mobile)

## 📝 Component Usage

### Hero Component

```tsx
import { Hero } from "@/components/Hero";

<Hero
  headline="Your Headline Here"
  description="Your description"
  badge="Badge Text"
  ctaPrimary={{ label: "Primary CTA", href: "/link" }}
  ctaSecondary={{ label: "Secondary CTA", href: "/link" }}
/>
```

### Card Component

```tsx
import { Card } from "@/components/Card";

<Card variant="glass" hover>
  Your content here
</Card>
```

### Button Component

```tsx
import { Button } from "@/components/Button";

<Button variant="gradient" size="lg" fullWidth={isMobile}>
  Click Me
</Button>
```

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete deployment guide and checklist.

### Quick Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm start

# Run benchmark tests
node scripts/benchmark.js
```

## 📊 SEO & Performance

### SEO Features
- ✅ Meta tags for all pages
- ✅ Open Graph tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt (`/robots.txt`)
- ✅ Canonical URLs

### Performance Optimizations
- ✅ Image optimization (WebP, AVIF, lazy loading)
- ✅ Code splitting and bundle optimization
- ✅ Font optimization
- ✅ Static generation where possible
- ✅ CDN-ready configuration

## 🔄 Next Steps

1. ✅ **Phase 1-5**: All phases completed
2. 🎯 **Production**: Ready for deployment
3. 📈 **Monitoring**: Set up analytics and monitoring

## 📄 License

Private - AccruLabs.ai

---

*Built with ❤️ following nas.io quality standards*

