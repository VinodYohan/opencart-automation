import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/en-GB?route=account/register');
  }

  async register(firstName: string, lastName: string, email: string, password: string) {
    await this.page.fill('#input-firstname', firstName);
    await this.page.fill('#input-lastname', lastName);
    await this.page.fill('#input-email', email);
    await this.page.fill('#input-password', password);
    await this.page.check('input[name="agree"]');
    await this.page.click('button[type="submit"]');
  }
}