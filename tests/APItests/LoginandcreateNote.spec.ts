import {request, test,expect}from '@playwright/test';
import {GetAccessToken}from "./Basetest.ts";

const baseURL="https://practice.expandtesting.com/notes/api";
let authToken:any =null;

//Login and get auth token
test.beforeAll("Login hook", async({request})=>{

const loginresponsedata =await request.post(baseURL + "/users/login",{
    
headers:{
    "Content-Type" : "application/json",
       },
data:   { 
    "email": "kamini@abc.com",
    "password": "Kamini"
        }

});

//verify status code
expect(loginresponsedata.status()).toBe(200);

//Parse the text
const resobj=JSON.parse(await loginresponsedata.text());

expect(resobj.message).toBe("Login successful");

//extract auth token
authToken= resobj.data.token;

//display response message
console.log(resobj.message);
});


test("create Note TC", async({request})=>{
 const  CreateNoteresponseobj= request.post(baseURL + "/notes",{
    headers:{
        "Content-Type": "application/json",
        "x-auth-token":authToken
    },
    data:{
        "title":"Note1 27sep",
        "description": "Note1 created from script",
        "category": "Work"
    }
});

//parse response text into json object

const responsebody =JSON.parse(await (await CreateNoteresponseobj).text());


//verify status code and response
expect((await CreateNoteresponseobj).status()).toBe(200);
expect((await CreateNoteresponseobj).statusText()).toBe("OK");

//verify success message
//expect(responsebody.data.message).toBe("Successful Request");

expect(responsebody.data.description).toBe("Note1 created from script");

//display id
console.log("ID of created note -" + responsebody.data.user_id);



})



