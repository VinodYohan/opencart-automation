import { Page } from '@playwright/test';

export async function waitAndClick(page: Page, selector: string) {
  await page.waitForSelector(selector);
  await page.click(selector);
}

export function generateEmail(): string {
  const timestamp = Date.now();
  return `testuser${timestamp}@mailinator.com`;
}