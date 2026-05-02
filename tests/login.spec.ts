import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import userData from '../test-data/users.json';

test.describe('Login Tests', () => {

  test('TC001 - Valid login with correct credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userData.validUser.email, userData.validUser.password);
    await expect(page.locator('#content h2').first()).toContainText('My Account');
  });

  test('TC002 - Invalid login with wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userData.invalidUser.email, userData.invalidUser.password);
    await expect(page.locator('.alert-danger')).toBeVisible();
  });

  test('TC003 - Login with empty fields', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(page.locator('.alert-danger')).toBeVisible();
  });

  test('TC004 - Login page title is correct', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await expect(page).toHaveTitle(/Account Login/);
  });

});