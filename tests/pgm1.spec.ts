import {test,expect}  from '@playwright/test';
import { chromium } from '@playwright/test';

test("First test case",async ({page})  =>{

    await page.goto("https://playwright.dev/")

}
)

test.only("Handle windows",async()=>{
    const browser =await chromium.launch();
    const context =await browser.newContext();
    const page =await context.newPage();
    await page.goto("https://playwright.dev/docs/api/class-browsercontext");
    await expect(page).toHaveTitle("Playwright")
    await page.locator('//a[text()="browserContext.cookies()"]').click();


})

test.only("Use page fixture directly", async({page})=>{

   await page.goto("https://playwright.dev/docs/api/class-browsercontext")
})

test("Handle popups", async ()=>{

    const newPage= await Promise.all(
    
    )



})