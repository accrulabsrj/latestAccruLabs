# Testing Guide

This document outlines the testing strategy and procedures for the AccruLabs.ai website project.

## 🎯 Testing Philosophy

**We test BEFORE marking phases complete, not after issues arise.**

Every phase update must pass all relevant tests before being considered complete. This prevents regression and ensures quality at each stage.

## 📋 Test Types

### 1. Unit Tests (Jest + React Testing Library)
- **Location**: `components/__tests__/`, `lib/__tests__/`, `hooks/__tests__/`
- **Purpose**: Test individual components and utilities in isolation
- **Run**: `npm test` or `npm run test:watch`

### 2. Integration Tests (Jest + React Testing Library)
- **Location**: `app/__tests__/`
- **Purpose**: Test component interactions and page-level functionality
- **Run**: `npm test`

### 3. End-to-End Tests (Playwright)
- **Location**: `e2e/`
- **Purpose**: Test full user flows across the application
- **Run**: `npm run test:e2e`

### 4. Performance Tests (Lighthouse)
- **Purpose**: Ensure performance benchmarks are met
- **Run**: Manual via Chrome DevTools or CI/CD

## 🚀 Quick Start

### Running All Tests
```bash
npm run test:all
```

### Running Unit Tests
```bash
npm test              # Run once
npm run test:watch    # Watch mode
npm run test:coverage # With coverage report
```

### Running E2E Tests
```bash
npm run test:e2e      # Headless
npm run test:e2e:ui   # With UI
```

## ✅ Pre-Phase Completion Checklist

Before marking any phase as complete, ensure:

- [ ] All unit tests pass: `npm test`
- [ ] All E2E tests pass: `npm run test:e2e`
- [ ] No console errors in browser
- [ ] All pages load successfully
- [ ] Navigation works on all pages
- [ ] Responsive design verified (mobile, tablet, desktop)
- [ ] No TypeScript errors: `npm run build`
- [ ] No linting errors: `npm run lint`
- [ ] Performance benchmarks met (Lighthouse)
- [ ] Accessibility score 95+ (Lighthouse)

## 📊 Coverage Requirements

- **Minimum Coverage**: 70% for branches, functions, lines, statements
- **Target Coverage**: 80%+
- **Critical Components**: 90%+ (Header, Footer, Forms, Navigation)

## 🧪 Writing Tests

### Component Test Example

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### E2E Test Example

```typescript
import { test, expect } from '@playwright/test';

test('should navigate to contact page', async ({ page }) => {
  await page.goto('/');
  await page.click('text=Contact');
  await expect(page).toHaveURL(/.*contact/);
});
```

## 🔍 What to Test

### Components
- ✅ Rendering with different props
- ✅ User interactions (clicks, form inputs)
- ✅ Responsive behavior
- ✅ Accessibility (ARIA labels, keyboard navigation)
- ✅ Error states
- ✅ Loading states

### Pages
- ✅ Page loads without errors
- ✅ All sections render correctly
- ✅ Navigation works
- ✅ Forms submit correctly
- ✅ Links work
- ✅ Images load
- ✅ Responsive layout

### E2E Flows
- ✅ User can navigate entire site
- ✅ User can complete forms
- ✅ User can access all features
- ✅ Mobile experience works
- ✅ No broken links or images

## 🐛 Debugging Failed Tests

### Unit Tests
```bash
npm test -- --verbose
npm test -- Button.test.tsx  # Run specific test
```

### E2E Tests
```bash
npm run test:e2e:ui  # Use UI mode for debugging
npm run test:e2e -- --debug  # Debug mode
```

## 📈 Continuous Integration

Tests run automatically on:
- Pull requests
- Before merging to main
- Before deployment

**No code should be merged if tests fail.**

## 🎯 Phase-Specific Testing

### Phase 1: Foundation
- ✅ All components render
- ✅ Design system tokens work
- ✅ Responsive utilities function

### Phase 2: Core Pages
- ✅ All pages load
- ✅ Navigation works
- ✅ Forms functional
- ✅ Performance targets met

### Phase 3: AccruTrain
- ✅ Calendar component works
- ✅ Registration flows work
- ✅ All interactive elements functional

### Phase 4: Services
- ✅ All service pages load
- ✅ Interactive demos work
- ✅ Consistent design

### Phase 5: Polish
- ✅ All tests pass
- ✅ Performance 95+
- ✅ Accessibility 100
- ✅ Zero console errors

## 🚨 Common Issues & Solutions

### Issue: Tests fail after phase update
**Solution**: Run tests BEFORE marking phase complete. Fix issues immediately.

### Issue: E2E tests timeout
**Solution**: Check if dev server is running. Increase timeout if needed.

### Issue: Component tests fail with hooks
**Solution**: Ensure components are wrapped in proper providers if needed.

### Issue: Tests pass locally but fail in CI
**Solution**: Check environment differences. Ensure all dependencies are in package.json.

## 📝 Best Practices

1. **Write tests FIRST** for new features (TDD when possible)
2. **Test user behavior**, not implementation details
3. **Keep tests simple** and focused
4. **Update tests** when changing functionality
5. **Run tests frequently** during development
6. **Never skip tests** to "save time" - it causes more problems later

## 🔗 Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [Next.js Testing Guide](https://nextjs.org/docs/testing)

---

**Remember**: Testing is not optional. It's a requirement for quality code.

