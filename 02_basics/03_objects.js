const mySym = Symbol("Keys1")


const jsuser = {
    name:"aditya",
    "full name":"Aditya D Raybandarkar",
    age:21,
    [mySym]:"keyof1",
    location:"mangalore",
    email:"raybandarkaraditya@gmail.com",
    isLoggedIn:false,
    lastLoginddays:["Monday","Saturday"]
}
// console.log(jsuser.email)
// console.log(jsuser["email"])
// console.log(jsuser["full name"])
// console.log(jsuser[mySym]);

jsuser.email="adityaa100vx21@gmail.com"
// console.log(jsuser["email"])
// Object.freeze(jsuser)
// jsuser.email="adityaa100vx21@hotmail.com"
// console.log(jsuser["email"])
jsuser.greetings= function(){
    console.log(`Hii ${this["full name"]}`);
}

console.log(jsuser.greetings());