import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
  }

  async login(email: string, password: string) {
    await this.page.fill('#input-email', email);
    await this.page.fill('#input-password', password);
    await this.page.click('input[value="Login"]');
  }
}