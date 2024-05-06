// nested scope 

function one(){
    const username = "aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); 
    two()
}

// one()

if (true) {
    const username="aditya"
    if (username==="aditya") {
        const website=" youtube"
        // console.log(username + website)
    }
    // console.log(website);
}

// console.log(username)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));
function addone(num){
    return num+1
}


const addTwo=function(num){
    return num+2
}
console.log(addTwo(5))


