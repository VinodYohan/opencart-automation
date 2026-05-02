import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';
import { generateEmail } from '../utils/helpers';
import userData from '../test-data/users.json';

test.describe('Register Tests', () => {

test('TC005 - Successful user registration', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const uniqueEmail = generateEmail();
  await registerPage.goto();
  await registerPage.register('Test', 'User', uniqueEmail, 'Test@1234');
  await page.waitForLoadState('networkidle');
  await expect(page).not.toHaveURL(/register/);
});

  test('TC006 - Register with already existing email', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.register(
      userData.validUser.firstName,
      userData.validUser.lastName,
      userData.validUser.email,
      userData.validUser.password
    );
    await page.waitForLoadState('networkidle');
    await expect(page.locator('.alert-danger')).toBeVisible();
  });

  test('TC007 - Register with empty fields', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    // click continue without filling anything
    await page.click('input[value="Continue"]');
    await page.waitForLoadState('networkidle');
    // page should stay on register — not go to success
    await expect(page).toHaveURL(/register/);
  });

  test('TC008 - Register page has correct title', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await expect(page).toHaveTitle(/Register Account/);
  });

});