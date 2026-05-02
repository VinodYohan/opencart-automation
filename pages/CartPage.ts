import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/en-GB?route=checkout/cart');
  }

  async getCartItemCount(): Promise<string> {
    return await this.page.innerText('#cart-total');
  }

  async removeItem() {
    await this.page.click('.text-right .btn-danger');
  }
}