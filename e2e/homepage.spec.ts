import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page title/headline is visible
    await expect(page.getByText(/The Applied AI Lab for Finance/i)).toBeVisible();
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');
    
    const hero = page.getByText(/The Applied AI Lab for Finance/i);
    await expect(hero).toBeVisible();
  });

  test('should display products section', async ({ page }) => {
    await page.goto('/');
    
    await expect(page.getByText(/Our Products/i)).toBeVisible();
    await expect(page.getByText(/AccruTrain/i)).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check header navigation
    const productsLink = page.getByRole('link', { name: /products/i });
    await expect(productsLink).toBeVisible();
    
    // Click and verify navigation
    await productsLink.click();
    await expect(page).toHaveURL(/.*what-we-do/);
  });

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that mobile menu is accessible (hamburger menu)
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Verify content is still accessible
    await expect(page.getByText(/The Applied AI Lab/i)).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    
    // Filter out known non-critical errors
    const criticalErrors = errors.filter(
      err => !err.includes('favicon') && !err.includes('analytics')
    );
    
    expect(criticalErrors).toHaveLength(0);
  });

  test('should load all images', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load
    await page.waitForLoadState('networkidle');
    
    // Check for broken images
    const images = page.locator('img');
    const count = await images.count();
    
    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
      expect(naturalWidth).toBeGreaterThan(0);
    }
  });
});

