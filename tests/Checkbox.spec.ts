
import {test, expect,Locator } from '@playwright/test'

// test("validate checkbox",async({page})=>{

//     await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
//    await page.locator('(//div[@class="display"])[1]/input[@value="soccer"]').click();
//    let result =await page.locator('(//div[@class="display"])[1]/input[@value="soccer"]').isChecked();
//    console.log(result);

//    let textofCheckbox=await page.locator('(//div[@class="display"])[1]/input[@value="soccer"]').getAttribute("value");
//    console.log(textofCheckbox)
// });

   test.only("TC for checkboxes",async({page})=>{

    await page.goto("http://www.tizag.com/htmlT/htmlcheckboxes.php");
    const soccerCheckbox = await page.locator('input[value="soccer"]').nth(0);
   
    await soccerCheckbox.click();
   // await expect (soccerCheckbox).toBeChecked();

   //To check Football checkbox
  const Footcheckbox= await page.locator('input[value="football"]').nth(1);
  await Footcheckbox.click();
  await expect (Footcheckbox).toBeChecked();

  //To uncheck soccer
  const unchecksoccer =await page.locator('input[value="soccer"]').nth(1);
  await unchecksoccer.click();
expect(await unchecksoccer.isChecked()).toBe(false);
//    await page.locator('(//div[@class="display"])[1]/input[@value="soccer"][1]').click();
//    let result =await page.locator('(//div[@class="display"])[1]/input[@value="soccer"][1]').isChecked();
//    console.log(result);
//     expect (await result).toBe(true);

//    let textofcheckbox =await page.locator('(//div[@class="display"])[1]/input[@value="soccer"][1]').getAttribute("value");
//    console.log(textofcheckbox );
    
   })



