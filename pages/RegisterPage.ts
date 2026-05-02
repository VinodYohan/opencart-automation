import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
  }

  async register(firstName: string, lastName: string, email: string, password: string) {
    await this.page.fill('#input-firstname', firstName);
    await this.page.fill('#input-lastname', lastName);
    await this.page.fill('#input-email', email);
    await this.page.fill('#input-telephone', '0771234567');  // ← added telephone
    await this.page.fill('#input-password', password);
    await this.page.fill('#input-confirm', password);
    await this.page.check('input[name="agree"]');
    await this.page.click('input[value="Continue"]');
  }
}