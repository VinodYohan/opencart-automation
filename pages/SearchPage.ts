import { Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=product/search');
  }

  async searchProduct(productName: string) {
    await this.page.fill('#input-search', productName);
    await this.page.click('#button-search');
  }

  async getSearchResults(): Promise<number> {
    return await this.page.locator('.product-thumb').count();
  }

  async clickFirstResult() {
    await this.page.locator('.product-thumb h4 a').first().click();
  }

  async getNoResultsMessage(): Promise<string> {
    return await this.page.innerText('#content p');
  }

  async addFirstResultToCart() {
    // directly click add to cart button by aria-label
    await this.page.locator("button[onclick*='cart.add']").first().click();
  }
}