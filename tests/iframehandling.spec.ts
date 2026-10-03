import{test,expect,Locator} from '@playwright/test'


test("iframehandlingTC",async({page})=>
    {
await page.goto("https://automatewithbipin.com/");
await page.locator('//aside[@class="sidebar"]/div[text()="iFrame"]').click();
await page.frameLocator('iframe[id="simpleFrame"]').locator('button[id="frameButton"]').click();

expect(await page.locator('p[id="frameMsg"]')).toHaveText("Button inside the frame was clicked");

})

test.only("iframehandlingTC2",async({page})=>
    {
await page.goto("https://automatewithbipin.com/");
await page.locator('//aside[@class="sidebar"]/div[text()="iFrame"]').click();
let name= await page.frameLocator('iframe[id="formFram"]').locator('input[id="frameName"]');
await name.pressSequentially("Kamini",{delay:2000});

})

