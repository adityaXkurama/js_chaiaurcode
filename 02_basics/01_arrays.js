const myArr=[0,1,2,3,4,5]
// console.log(myArr);


const myArr2 =new Array(1,2,3,4,5)
// console.log(myArr2);


myArr.push(6)
myArr.pop()

// console.log(myArr);

// myArr.unshift(9)
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// -------------------------------------------------------------
console.log("A",myArr)

const myn1 = myArr.slice(1,3)//does not manipulates the original array
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3) //manipulates the original array
console.log("C",myArr);
console.log(myn2);

