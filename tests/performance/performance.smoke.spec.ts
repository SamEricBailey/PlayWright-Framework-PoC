import { test, expect } from '@playwright/test';
import { measurePageLoad } from '../../utils/performance.helper';

test('Home page loads within acceptable time', async ({ page }) => {
  const loadTime = await measurePageLoad(page, '/');

  console.log(`Page load time: ${loadTime}ms`);
  expect(loadTime).toBeLessThan(3000);
});
