// Conversions & Operations

//for bool variable
let matchPlayed = false
console.log(typeof matchPlayed);
console.log(typeof (matchPlayed));

// convert to bool
let isLoggedIn = 1
let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn); // prints true
console.log(typeof boolIsLoggedIn);

/* from number or sting to bool conversion
int 0 => false, any other value => true
empty string ( "" ) => false, any char inside => true
*/

// for int variable
let score = 33

console.log(typeof score);
console.log(typeof (score));

// for string variable
let score2 = "33"

console.log(typeof score2);
console.log(typeof (score2));

// score2 is a string
let valueInNumber = Number(score2);
console.log(typeof valueInNumber);

//now for combination of int and char
let score3 = "33abc"
let valueInNumber3 = Number(score3);
//below code prints NaN, not a number and even that's under number datatype
console.log(valueInNumber3); 
console.log(typeof valueInNumber3);

// int to string
let num = 78
let stringNum = String(num)
console.log(stringNum);
console.log(typeof stringNum);