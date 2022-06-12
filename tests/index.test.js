const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const title = page.locator('.App-link');
    await expect(title).toHaveText('Learn React');
});