import { Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/en-GB?route=product/search');
  }

  async searchProduct(productName: string) {
    await this.page.fill('#input-search', productName);
    await this.page.click('button[id="button-search"]');
  }

  async getSearchResults(): Promise<number> {
    const results = await this.page.locator('.product-thumb').count();
    return results;
  }

  async clickFirstResult() {
    await this.page.locator('.product-thumb').first().click();
  }

  async getNoResultsMessage(): Promise<string> {
    return await this.page.innerText('#content p');
  }

  async addFirstResultToCart() {
    await this.page.locator('.product-thumb .btn-cart').first().click();
  }
}