import { test, expect } from '@playwright/test';
import logindata from "../testdata/swaglabdata.json"

test("Verify login with first user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("//input[@placeholder='Username']").fill(logindata.username1)
    await page.locator("//input[@placeholder='Password']").fill(logindata.password)
    await page.locator("//input[@type='submit']").click()
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');

})

test("Verify login with second user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("//input[@placeholder='Username']").fill(logindata.username2)
    await page.locator("//input[@placeholder='Password']").fill(logindata.password)
    await page.locator("//input[@type='submit']").click()
    await expect(page.locator("//h3[contains(.,'Epic sadface: Sorry, this user has been locked out.')]")).toBeVisible();

})

test("Verify login with third user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("//input[@placeholder='Username']").fill(logindata.username3)
    await page.locator("//input[@placeholder='Password']").fill(logindata.password)
    await page.locator("//input[@type='submit']").click()
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');

})

test("Verify login with fourth user", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/")
    await page.locator("//input[@placeholder='Username']").fill(logindata.username4)
    await page.locator("//input[@placeholder='Password']").fill(logindata.password)
    await page.locator("//input[@type='submit']").click()
    await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html');

})
