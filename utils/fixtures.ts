import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import userData from '../test-data/users.json';

// define custom fixture types
type MyFixtures = {
  loggedInPage: Page;
};

// extend base test with loggedIn fixture
export const test = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userData.validUser.email, userData.validUser.password);
    await page.waitForLoadState('networkidle');
    await use(page);
  }
});

export { expect } from '@playwright/test';