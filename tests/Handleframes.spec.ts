import{test, expect} from '@playwright/test'

test("handle frames", async ({page})=>
{
await page.goto ("https://ui.vision/demo/webtest/frames/");

//total frames
const allframes =await page.frames();
console.log(allframes.length);
})

