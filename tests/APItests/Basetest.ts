import { APIRequestContext,APIRequest,expect} from "@playwright/test";

const baseURL="https://practice.expandtesting.com/notes/api";
let authToken=null;

async function GetAccessToken(email1: string, password: string,request1:APIRequestContext):Promise <string>

{
const loginresponsedata =await request1.post(baseURL+"/users/login",{
    headers:{
        "Content-Type": "application/json",
            },

    data:{
        "email":email1,
        "password": password
        }

});

//verify status code
expect( loginresponsedata.status()).toBe(200);

//Parse the test
const responseobj=JSON.parse(await (loginresponsedata).text());
authToken =responseobj.data.token;

console.log(responseobj.message);

return(authToken);

}
export{GetAccessToken};