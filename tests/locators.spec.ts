
import {test,expect ,Locator} from '@playwright/test'

test("locators", async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/")
   const title:Locator=  page.getByAltText("Rahul Shetty Academy")
   await  expect(title).toBeVisible()

  await  expect (page.getByText("Learn & Shine")).toBeVisible()

  //await page.locator('//a[text()="Sign Up"]').click()

  await page.getByRole('link',{name:"All Access Subscription"}).nth(1).click()

})