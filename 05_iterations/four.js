const myObject = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift bt apple"
}
//forin loop
// can be used to iterate objects
for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`)
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    // console.log(programming[key])
}
const map = new Map() // maps ar enon iterable
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
for (const key in map) {
    console.log(key)
}