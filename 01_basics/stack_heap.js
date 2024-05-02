// stack (primitive datatypes), Heap (Non-Primitive datatypes)

let myytname="aditya.com"
let anothername = myytname
anothername="mania.com"
console.log(anothername);

let user1={
    email: "user@google.com",
    upi:"upi@apy"
}

let user2=user1

user2.email="nothing.com"

console.log(user1.email);
console.log(user2.email);