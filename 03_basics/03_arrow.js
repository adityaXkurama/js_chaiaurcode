const user={
    username:"aditya",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`)
        console.log(this);
    }
}
// user.welcomeMessage()

// console.log(this);

// function chai(){
    // let usename="aditya"
    // console.log(this.usename)
// }
// // this doesnot work properly in functions 
// chai()

const chai= () => {
    let usename="aditya"
    console.log(this)
}
// chai()

// () => {}  arrow function syntax

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// implicit function
// const addTwo=(num1,num2)=> num1+num2
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=> ({username:"Aditya"})
// should be wrapped in paranthesis otherwise error

// console.log(addTwo(3,4));


