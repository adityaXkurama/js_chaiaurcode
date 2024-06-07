const promiseOne = new Promise(function (resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)


}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if (!error) {
            resolve({username:"adiii",password:"123"})
        }else{
            reject('Error detected')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("The promise is eiter resolved or rejected")
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if (!error) {
            resolve({username:"javascript",password:"123"})
        }else{
            reject('js error detected')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

async function getAllusers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}

getAllusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error)) 