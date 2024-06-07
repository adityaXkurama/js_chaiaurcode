// let username = "aditya"
const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,

    getUser: function(){
        console.log(`Username: ${this.username}`)
    }
}

console.log(user);
console.log(user.getUser());
// console.log(this);