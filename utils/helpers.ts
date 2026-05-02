import { Page } from '@playwright/test';

export async function waitAndClick(page: Page, selector: string) {
  await page.waitForSelector(selector);
  await page.click(selector);
}

export function generateEmail(): string {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 9999);
  return `testuser${timestamp}${random}@mailinator.com`;
}