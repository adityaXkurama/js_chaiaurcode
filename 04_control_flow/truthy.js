const userEmail = []

// if(userEmail){
//     console.log("Got user email");
// }else {
//     console.log("Dont have user email");
// }

// falsy value
// false, 0,-0,BigInt 0n,"",null,undefined,NaN

// truthy value
// "0",'false'," ",[],{},function(){}(Empty function)

// if (userEmail.length===0) {
//     console.log("Array is empty")
// }

// const emptyObj={}
// if (Object.keys(emptyObj).length===0) {
//     console.log("object is empty");
// }

// Nullish coalescing Operator (??): mainly focused on null and undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 10
val1=null ?? 10 ?? 20  // it will take first value in this case
// console.log(val1);

//------------------------------------------------------------------------
// Ternairy Operator

// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("Less than 80"): console.log("More than 80");