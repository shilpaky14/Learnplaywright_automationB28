import { test, expect } from '@playwright/test';
import logindata from "../testdata/Login.json"

test("Verify login with valid credentials", async ({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await page.locator("input[name='username']").fill(logindata.username)
await page.locator("input[type='password']").fill(logindata.password)
await page.locator("button[type='submit']").click()

await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');


})

test("Verify login with invalid password", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("sjdhkdf")
    await page.locator("button[type='submit']").click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
    
    })

    test("Verify login with invalid username", async ({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        await page.locator("input[name='username']").fill("xnddf")
        await page.locator("input[type='password']").fill("admin123")
        await page.locator("button[type='submit']").click()
        await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
        
        
        })