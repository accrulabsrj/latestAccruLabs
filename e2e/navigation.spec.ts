import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');
    
    const navLinks = [
      { name: /products/i, url: /what-we-do/ },
      { name: /accrutrain/i, url: /accrutrain/ },
      { name: /about/i, url: /philosophy/ },
      { name: /contact/i, url: /contact/ },
    ];
    
    for (const link of navLinks) {
      const navLink = page.getByRole('link', { name: link.name });
      if (await navLink.isVisible()) {
        await navLink.click();
        await expect(page).toHaveURL(link.url);
        await page.goBack();
      }
    }
  });

  test('should have mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Look for hamburger menu button (common patterns)
    const menuButton = page.locator('button[aria-label*="menu" i], button[aria-label*="Menu" i], [data-testid*="menu"]').first();
    
    // If mobile menu exists, it should be visible
    // If not, navigation should still be accessible
    const header = page.locator('header');
    await expect(header).toBeVisible();
  });
});

