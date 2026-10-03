import{test,expect,Locator} from '@playwright/test';

test("webtable values fetch for one column", async({page})=>{
await page.goto("https://money.rediff.com/gainers");
//allcompaies data
let allcompanies= await page.locator('//table[@class="dataTable"]/tbody/tr/td[1]').all();

for(let i =0;i<allcompanies.length;i++)
{
    console.log(await allcompanies[i].textContent());
}

})

test.only("webtable values fetch ", async({page})=>{
await page.goto("https://money.rediff.com/gainers");
//allcompaies data
let allcompanies= await page.locator('//table[@class="dataTable"]/tbody/tr/td[1]').all();

let allprices= await page.locator('//table[@class="dataTable"]/tbody/tr/td[5]').all();

for(let i=0;i<allcompanies.length;i++)
{
    let text= await allcompanies[i].textContent();

    if(text==="Shivam Chemicals")
    {
        console.log(await allprices[i].textContent());
    break;
    }
}
});
