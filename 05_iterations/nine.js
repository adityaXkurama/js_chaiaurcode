const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curvalue){
//     console.log(`acc: ${acc} and curval: ${curvalue}`);
//     return acc + curvalue
// },0);
const myTotal = myNums.reduce((acc,curr)=>acc+curr,0
)

console.log(myTotal);

const Shoppingcart =[
    {
        itemName:"Js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mocile dev course",
        price:5999
    },
    {
        itemName:"dat science  course",
        price:12999
    }
]

const PriceToPay=Shoppingcart.reduce((acc,item)=>acc + item.price,0)

console.log(PriceToPay);