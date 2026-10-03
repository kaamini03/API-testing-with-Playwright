import{test,expect,Locator} from '@playwright/test'


test("google autosuggest",async ({page})=>
{
    await page.goto("https://www.google.com/");
   // await page.locator('//textarea[@id="ti6dpd"]').fill("Hello Kitty");
    await page.locator('//textarea[@id="ti6dpd"]').pressSequentially("Hello Kitty",{delay:50});


    //Total no of autosuggets
   let Allsuggestions= await page.locator('//div[@id="Alh6id"]//li').all();
    console.log(Allsuggestions.length)

    //Fetch the text of autosuggest
    for(let i of Allsuggestions)
    {
        console.log(await i.innerText());
    }
})

test("yahoo autosuggest",async({page})=>
{
    await page.goto("https://in.search.yahoo.com/?fr2=inr");
    let allnews=await page.locator('//div[@class="compList lh-l fz-s"]//li').all();
    console.log(allnews.length);

    for(let i of allnews)
    {
        let text= await i.textContent();
        if(text?.includes("IIT-Bombay"))
        {
            console.log(text);
        }
    
        //console.log(await i.textContent());
    }


})
