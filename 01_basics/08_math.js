/*
const score = 400 // automatically js assigns this as number
console.log(score); // 400

const balance = new Number(100) // implicitly declaring as number
console.log(balance); // [Number: 100]
// it's a prototype if defined this way

// conversion to string
console.log(balance.toString().length); // 3

// setting precision value
console.log(balance.toFixed(2));

const num = 645.5685;

// it rounds of at decimal
console.log(num.toPrecision(3));
console.log(num.toPrecision(6));

const hundreds = 1000000
// it will convert to indian standard numbering system
console.log( hundreds.toLocaleString('en-IN') ); // 10,00,000

// The value of Number.MAX_SAFE_INTEGER is 9007199254740991 2^53 − 1.
Number.MAX_SAFE_INTEGER; 
*/

// ---------------------------------------------------------------
/*
// Math library

console.log(Math); // Object [Math] {}

console.log(Math.abs(7-78)); // 71

// round, ceil, floor
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4

// min and max
console.log(Math.min(4,67,23,65)); // 4
console.log(Math.max(4,67,23,65)); // 67
*/

console.log(Math.random()); // gives a value between 0 to 1
console.log((Math.random()*10) + 1); // to avoid 0th case, now it will give between 1 to 11
console.log(Math.floor((Math.random()*10) + 1)); // gives only decimal values

// or we can use ceil and lose +1 coz anyway we wont get 0 then

// To set a range for Math.random()
const min = 10
const max = 40
console.log( Math.floor(Math.random() * (max-min+1)) + min );
// (max-min+1) is the formula
// +min at the end coz we were getting values between 1 to 30 using random and floor, so +min



