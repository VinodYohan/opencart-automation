import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async searchProduct(productName: string) {
    await this.page.fill('input[name="search"]', productName);
    await this.page.press('input[name="search"]', 'Enter');
  }

  async clickMyAccount() {
    await this.page.click('a[title="My Account"]');
  }
}