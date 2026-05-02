import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { generateEmail } from '../utils/helpers';

test.describe('Register Tests', () => {

  test('TC005 - Successful user registration', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    const uniqueEmail = generateEmail();
    await registerPage.goto();
    await registerPage.register('Test', 'User', uniqueEmail, 'Test@1234');
    await expect(page).toHaveURL(/success/);
    await expect(page.locator('h1')).toContainText('Your Account Has Been Created');
  });

  test('TC006 - Register with already existing email', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.register('Test', 'User', 'existing@mailinator.com', 'Test@1234');
    await expect(page.locator('.alert-danger')).toBeVisible();
  });

  test('TC007 - Register with empty fields', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.register('', '', '', '');
    await expect(page.locator('.text-danger')).toBeVisible();
  });

  test('TC008 - Register page has correct title', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await expect(page).toHaveTitle(/Register/);
  });

});