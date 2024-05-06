function SayMyName(){
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
}

// SayMyName()
// function addtwoNumbers(num1,num2){
//     console.log(num1+num2);
// }
function addtwoNumbers(num1,num2){
    // let result=(num1+num2);
    // return result
    return num1+num2
}

const result=addtwoNumbers(33,36)
// console.log("Result :",result);

function loginUserMessage(username="adi"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("aditya"))

// --------------------------------------------------------------------
// function calculateCartPrice(...num1){
//     return num1
// }
//num1 holds an array and ... is called rest operator in this case and also called as spread operaor in case of arrays
function calculateCartPrice(val1,val2,...num1){
    return num1
}
// rest operator gives an array
// console.log(calculateCartPrice(200,300,400,2000));

const user={
    username:"aditya",
    price:999
}
function handleObject(anyObject){
    console.log(`username is ${anyObject["username"]} and price is ${anyObject.price}`);
}
// handleObject(user)
// handleObject({
//     username:"sam",
//     price:100
// })

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
 
console.log(returnSecondValue([200,400,100,600])); 