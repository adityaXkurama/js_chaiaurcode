// const tinderUser = new Object()
const tinderuser={}

tinderuser.id="123abc"
tinderuser.name="Sammy"
tinderuser.IsLoggedIn=false
// console.log(tinderuser);

const regularuser={
    email:"raybandarkaraditya@gmail.com",
    fullname:{
        uerfullname:{
            firstname:"Aditya",
            lastname:"Ryabandarkar"
        }
    }
}
// console.log(regularuser.fullname.uerfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={5:"a",6:"b"}

// const obj4=Object.assign({},obj1,obj2,obj3)
// brackets add all the elements to itself
// console.log(obj1);
// console.log(obj4);

// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'));
console.log(tinderuser.hasOwnProperty('IsLoggedIn'));

const course={
    CourseName:"js in hindi",
    price:"999",
    CourseInstructor:"Aditya"
}

const {CourseInstructor:instructor,price}=course


console.log(price);