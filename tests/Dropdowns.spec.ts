import{test,expect,Locator} from '@playwright/test'

test("Dropdown using Select tag",async({page})=>{
await page.goto("https://www.wikipedia.org/");
await page.locator('#searchLanguage').selectOption("sq");
await page.locator('#searchLanguage').selectOption("Asturianu");
await page.locator('#searchLanguage').selectOption({index:2})

})

test("Total languages",async({page})=>{
await page.goto("https://www.wikipedia.org/");
let Totaloptions =await page.locator('//select[@id="searchLanguage"]/option').all();
console.log(Totaloptions.length);
});

test("Print each language",async({page})=>{
await page.goto("https://www.wikipedia.org/");
let Eachlanguage =await page.locator('//select[@id="searchLanguage"]/option').all();

for(let i of Eachlanguage)
{
    console.log(await i.textContent())
}
});

test.only("Rediff DOB_Day", async({page})=>{
await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
let value=await page.locator('//select[@class="day"]').isVisible();
console.log(value);
await page.locator('//select[@class="day"]').selectOption("03");
await page.locator('//select[@class="middle month"]').selectOption("DEC");
await page.locator('//select[@class="year"]').selectOption({index:3});
})