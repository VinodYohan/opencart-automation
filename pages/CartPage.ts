import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
  }

  async getCartItemCount(): Promise<string> {
    return await this.page.innerText('#cart > button');
  }

  async removeItem() {
    await this.page.click('.btn-danger');
  }
}