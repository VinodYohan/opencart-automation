import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';
import searchData from '../test-data/search-data.json';

test.describe('Data Driven Search Tests', () => {

  // loop through valid searches
  for (const data of searchData.validSearches) {
    test(`TC-DD - Search for "${data.keyword}" returns results`, async ({ page }) => {
      const searchPage = new SearchPage(page);
      await searchPage.goto();
      await searchPage.searchProduct(data.keyword);
      const count = await searchPage.getSearchResults();
      expect(count).toBeGreaterThan(0);
    });
  }

  // loop through invalid searches
  for (const data of searchData.invalidSearches) {
    test(`TC-DD - Search for "${data.keyword}" returns no results`, async ({ page }) => {
      const searchPage = new SearchPage(page);
      await searchPage.goto();
      await searchPage.searchProduct(data.keyword);
      const count = await searchPage.getSearchResults();
      expect(count).toBe(0);
    });
  }

});