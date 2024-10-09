//const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

const myNums = [1,2,3];
// const myTotal =myNums.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
// },0)

const myTotal =myNums.reduce( (acc, currval)=> acc+currval,0)

console.log(myTotal)

const shoppingCart = [
    {
        item:"py course",
        price: 2999
    },
    {
        item:"mobile dev course",
        price: 5999
    },
    {
        item:"data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item)=> acc+item.price,0);
console.log(priceToPay)