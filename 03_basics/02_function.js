// Functions with objects

function calculateCarPrice(num1){
    return num1;
}

console.log(calculateCarPrice(2)); // 2
console.log(calculateCarPrice(200, 300, 400)); // 200

// By using the Rest operator, its not spread here
function calculateCarPrice2(...num1){
    return num1;
}

console.log(calculateCarPrice2(200, 300, 400)); // [ 200, 300, 400 ] => an array

function calculateCarPrice3(val1, val2, ...num1){
    return num1;
}
// val1 and val2 take first 2 parameters
console.log(calculateCarPrice3(200, 500, 4000, 6000, 8000)); // [ 4000, 6000, 8000 ] => array num1


const user = {
    username: "shash",
    price: 199
}

function handleObjects(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObjects(user); // Username is shash and price is 199

// If in object user we set price to prices then output will be 
// Username is shash and price is undefined

// another way of calling function by directly passing object ib function call
handleObjects({
    username: "sam",
    price: 350
})
// Username is sam and price is 350


// Passing array in function
const myNewArray = [3543, 57, 384, 788]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray)); // 3543