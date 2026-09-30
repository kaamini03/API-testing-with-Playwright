import {request, test,expect}from '@playwright/test';
import{ GetAccessToken } from "./Basetest.ts";

test.describe("Create and Update Note by calling accesstoken fromBase class", async()=>{

    let authToken:any =null;
    const baseURL="https://practice.expandtesting.com/notes/api";
    let Notetitle:any;
    let Noteid:any;



//Calling Authtoken
test.beforeAll(async ({request})=>{
    authToken = await GetAccessToken("kamini@abc.com","Kamini", request);
    Notetitle = "Playwrighttraining" + Math.floor(Math.random()*1000);


});


//TC for creating note
test("create Note TC", async({request})=>{
 const  CreateNoteresponseobj= await request.post(baseURL + "/notes",{
    headers:{
        "Content-Type": "application/json",
        "x-auth-token":authToken
    },
    data:{
        "title":Notetitle,
        "description": "Note1 created from script",
        "category": "Work"
    }
});

//parse response text into json object
const responsebody =JSON.parse(await (CreateNoteresponseobj).text());


//verify status code and response
expect(( CreateNoteresponseobj).status()).toBe(200);
expect(( CreateNoteresponseobj).statusText()).toBe("OK");

//verify success message
//expect(responsebody.data.message).toBe("Successful Request");

//verify title
expect(responsebody.data.title).toBe(Notetitle);
console.log("Note created-" + Notetitle);
expect(responsebody.data.description).toBe("Note1 created from script");

//display id
const getid=responsebody.data.id;
console.log("ID of created note -" + getid);
});

// //update Note
test("Update the Note", async({request})=>{

    const UpdateNoteresponseobj=await request.put(`${baseURL}/notes/${Noteid}`,{
        headers:{
            "Content-Type":"application/json",
            "x-auth-token":authToken
                },
        data:{
            //"id":"getid",
            "title":Notetitle,
            "description": "Description updated through script",
            "completed": "true",
            "category":"Work"
            }
    });

     //parse response into Json object
        const Updateresbody =JSON.parse(await UpdateNoteresponseobj.text());

        //verify status code
        expect ( UpdateNoteresponseobj.status()).toBe(200);
        expect(UpdateNoteresponseobj.statusText()).toBe("OK")

        //verify id
        expect(Updateresbody.data.id).toBe(Noteid);

       //verify Note title
       expect(Updateresbody.data.title).toBe(Notetitle);

       expect(Updateresbody.data.category).toBe("Work");

});
})





