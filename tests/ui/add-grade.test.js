const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('https://mitko-dimitrov-exam.onrender.com/Add-Grade');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  