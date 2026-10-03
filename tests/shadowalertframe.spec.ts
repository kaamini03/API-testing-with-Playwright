import{test,expect,Locator} from '@playwright/test'

test("shadowdom TC",async({page})=>{
await page.goto("https://shop.polymer-project.org/")

await page.locator('a[href="/list/ladies_outerwear"]').nth(2).click();
});



test("handling alerts",async({page})=>{

    page.on('dialog',async dialog=>{
        console.log(dialog.message());
        await dialog.accept();
    });



    await page.goto("https://portfolio.rediff.com/portfolio-login");
        await page.locator('//input[@id="loginsubmit"]').click();
    



})