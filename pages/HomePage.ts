import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://tutorialsninja.com/demo');
  }

  async searchProduct(productName: string) {
    await this.page.fill('input[name="search"]', productName);
    await this.page.press('input[name="search"]', 'Enter');
  }

  async clickMyAccount() {
    await this.page.click('span:has-text("My Account")');
  }
}