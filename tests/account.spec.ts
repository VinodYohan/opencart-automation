import { test, expect } from '../utils/fixtures';

test.describe('Account Tests - Logged In', () => {

  test('TC017 - Logged in user can see My Account page', async ({ loggedInPage }) => {
    await loggedInPage.goto('https://tutorialsninja.com/demo/index.php?route=account/account');
    await expect(loggedInPage.locator('#content h2').first()).toContainText('My Account');
  });

  test('TC018 - Logged in user can see order history', async ({ loggedInPage }) => {
    await loggedInPage.goto('https://tutorialsninja.com/demo/index.php?route=account/order');
    await expect(loggedInPage).toHaveTitle(/Order History/);
  });

  test('TC019 - Logged in user can see wishlist', async ({ loggedInPage }) => {
    await loggedInPage.goto('https://tutorialsninja.com/demo/index.php?route=account/wishlist');
    await expect(loggedInPage).toHaveTitle(/Wish List/);
  });

  test('TC020 - Logged in user can edit account details', async ({ loggedInPage }) => {
    await loggedInPage.goto('https://tutorialsninja.com/demo/index.php?route=account/edit');
    await expect(loggedInPage).toHaveTitle(/My Account Information/);
  });

});