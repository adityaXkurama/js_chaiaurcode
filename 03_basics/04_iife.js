// immediately invoked function expression
//What is IIFE
// EXPLANATION: 
/* due to the pollution from the global scope due to the variable we use IIFE and it immediately executes the function */

(function chai(){
    //this id a named iife
    console.log(`DB connected`)
})();

((name)=>{
    console.log(`DB connected 2 ${name}`)
})("adityaa");