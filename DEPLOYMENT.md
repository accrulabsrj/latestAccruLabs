# Deployment Guide

Complete guide for deploying AccruLabs.ai website to production.

## 📋 Pre-Deployment Checklist

### 1. Code Quality
- [ ] All tests pass: `npm run test:all`
- [ ] Build succeeds: `npm run build`
- [ ] No linting errors: `npm run lint`
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] No console errors in browser

### 2. Performance
- [ ] Lighthouse Performance: 95+ (mobile & desktop)
- [ ] Lighthouse Accessibility: 100
- [ ] Lighthouse Best Practices: 100
- [ ] Lighthouse SEO: 100
- [ ] Page load time: < 2s (desktop), < 3s (mobile)
- [ ] Bundle size optimized
- [ ] Images optimized (WebP/AVIF)

### 3. SEO
- [ ] All pages have meta tags
- [ ] Open Graph tags present
- [ ] Structured data (JSON-LD) on all pages
- [ ] Sitemap.xml accessible
- [ ] Robots.txt configured
- [ ] Canonical URLs set

### 4. Accessibility
- [ ] WCAG 2.1 AA compliance verified
- [ ] Keyboard navigation works
- [ ] Screen reader tested
- [ ] Color contrast meets standards
- [ ] Focus indicators visible
- [ ] ARIA labels present

### 5. Cross-Browser Testing
- [ ] Chrome (latest) - tested
- [ ] Firefox (latest) - tested
- [ ] Safari (latest) - tested
- [ ] Edge (latest) - tested
- [ ] Mobile browsers (iOS Safari, Chrome Mobile) - tested

### 6. Functionality
- [ ] All pages load successfully
- [ ] Navigation works
- [ ] Forms submit correctly
- [ ] All links work
- [ ] No broken images
- [ ] Interactive elements work

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

#### Steps:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Production Deploy**:
   ```bash
   vercel --prod
   ```

4. **Environment Variables** (if needed):
   - Add in Vercel dashboard: Settings → Environment Variables
   - Or via CLI: `vercel env add VARIABLE_NAME`

#### Vercel Configuration

Create `vercel.json` (if needed):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"]
}
```

### Option 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm i -g netlify-cli
   ```

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Option 3: Self-Hosted (Node.js Server)

1. **Build**:
   ```bash
   npm run build
   ```

2. **Start Production Server**:
   ```bash
   npm start
   ```

3. **Use PM2 for Process Management**:
   ```bash
   npm install -g pm2
   pm2 start npm --name "accrulabs" -- start
   pm2 save
   pm2 startup
   ```

### Option 4: Docker

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:18-alpine AS base

   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package.json package-lock.json ./
   RUN npm ci

   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   # Production image, copy all the files and run next
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   USER nextjs
   EXPOSE 3000
   ENV PORT 3000
   CMD ["node", "server.js"]
   ```

2. **Build and Run**:
   ```bash
   docker build -t accrulabs .
   docker run -p 3000:3000 accrulabs
   ```

## 🔧 Environment Variables

Create `.env.production` with required variables:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://accrulabs.ai

# Analytics (if using)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Form (if using external service)
CONTACT_FORM_ENDPOINT=your-endpoint-url
```

## 📊 Post-Deployment

### 1. Verify Deployment

- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Forms functional
- [ ] Images load
- [ ] No console errors

### 2. Performance Monitoring

- [ ] Run Lighthouse audit
- [ ] Check PageSpeed Insights
- [ ] Monitor Core Web Vitals
- [ ] Set up error tracking (Sentry, etc.)

### 3. SEO Verification

- [ ] Submit sitemap to Google Search Console
- [ ] Verify robots.txt
- [ ] Check meta tags with SEO tools
- [ ] Test structured data with Google Rich Results Test

### 4. Analytics Setup

- [ ] Google Analytics (if using)
- [ ] Search Console verification
- [ ] Error tracking
- [ ] Performance monitoring

## 🔄 Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test:all
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🐛 Troubleshooting

### Build Fails

1. Check Node.js version (requires 18+)
2. Clear `.next` folder: `rm -rf .next`
3. Clear node_modules: `rm -rf node_modules && npm install`
4. Check for TypeScript errors: `npx tsc --noEmit`

### Performance Issues

1. Check bundle size: `npm run build` and review output
2. Optimize images: Use WebP/AVIF formats
3. Enable compression on server
4. Use CDN for static assets

### SEO Issues

1. Verify sitemap: `https://yoursite.com/sitemap.xml`
2. Check robots.txt: `https://yoursite.com/robots.txt`
3. Validate structured data: Use Google Rich Results Test
4. Check meta tags: Use browser dev tools

## 📞 Support

For deployment issues, refer to:
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- Project README.md

---

**Last Updated**: Phase 5 Completion
**Status**: Ready for Production Deployment












