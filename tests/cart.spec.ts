import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';
import { CartPage } from '../pages/CartPage';
import { HomePage } from '../pages/HomePage';

test.describe('Cart Tests', () => {

  test('TC013 - Add product to cart from search results', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.searchProduct('MacBook');
    await searchPage.addFirstResultToCart();
    await expect(page.locator('.alert-success')).toBeVisible();
  });

  test('TC014 - Cart page loads successfully', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await expect(page).toHaveTitle(/Shopping Cart/);
  });

  test('TC015 - Cart shows correct item count after adding product', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.searchProduct('MacBook');
    await searchPage.addFirstResultToCart();
    const homePage = new HomePage(page);
    await homePage.goto();
    const cartCount = await page.innerText('#cart-total');
    expect(cartCount).toContain('1 item');
  });

  test('TC016 - Empty cart shows correct message', async ({ page }) => {
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await expect(page.locator('#content p')).toContainText('Your shopping cart is empty');
  });

});