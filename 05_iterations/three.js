// for of loop

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
// for of loop
// for (const num of arr) {
//     console.log(num);
// }

const greetings = "hello world!"
for(const greet of greetings){
    if (greet==" ") {
        continue
    }
    console.log(`Each char is ${greet}`);// to remove the empty space
}


//Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")

// console.log(map)

// for (const [key,value] of map) {
//     console.log(`${key} :- ${value}`);
// }


const myObject={
    "game":"NFS",
    "game2":"Spiderman"
}

// object is not iteratable through for of loop