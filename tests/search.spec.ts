import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';
import { HomePage } from '../pages/HomePage';

test.describe('Search Tests', () => {

  test('TC009 - Search for a valid product', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.searchProduct('MacBook');
    const count = await searchPage.getSearchResults();
    expect(count).toBeGreaterThan(0);
  });

  test('TC010 - Search for invalid product shows no results', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.searchProduct('xyzabc123notexist');
    const message = await searchPage.getNoResultsMessage();
    expect(message).toContain('There is no product that matches');
  });

  test('TC011 - Search from homepage navbar', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.searchProduct('iPhone');
    await expect(page).toHaveURL(/search/);
  });

  test('TC012 - Click first search result opens product page', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();
    await searchPage.searchProduct('MacBook');
    await searchPage.clickFirstResult();
    await expect(page).toHaveURL(/product/);
  });

});