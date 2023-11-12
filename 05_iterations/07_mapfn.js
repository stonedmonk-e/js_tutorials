// map - better than foreach

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
const newNums = myNumbers.map( (num) => num+10)
console.log(newNums);

const newNums2 = myNumbers.map( (num) => {
    return num+20
})
console.log(newNums2);


// chaining - using multiple maps and filters together
const newNums3 = myNumbers
                    .map( (num) => num *10 )
                    .map( (num) => num + 1)
                    .filter( (num) => num >= 40)

console.log(newNums3);
*/
// ============================================================================
// reduce function

const myNums = [1, 2, 3]
/*
// acc = accumulator
const myTotal = myNums.reduce( function (acc, currVal) {
    console.log(`accumulator: ${acc} and current Value: ${currVal}`);
    return acc + currVal
}, 0); // 0 => initial value for accumulator

console.log(myTotal); // 6
/*
accumulator: 0 and current Value: 1
accumulator: 1 and current Value: 2
accumulator: 3 and current Value: 3
*/

// same code as above in reduced format
const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal); // 6

// Array of objects => shopping cart example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 4999
    },
    {
        itemName: "ds course",
        price: 12999
    },
    {
        itemName: "web dev course",
        price: 519
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0 ) // 0 => default value of shopping cart
console.log(priceToPay); // 21516