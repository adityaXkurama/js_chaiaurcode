const marvel = ["thor","Ironman","spiderman"]
const dc = ["Superman","Flash","Batman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][2]);

// all_heros=marvel.concat(dc)
// console.log(all_heros);

const all_heros=[...marvel,...dc]//spread operator
// console.log(all_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array[5][2][0]);
const new_another_array=another_array.flat(Infinity)
console.log(new_another_array);


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));