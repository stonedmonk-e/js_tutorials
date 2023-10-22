
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

/*
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
*/

/* Output
boolean
boolean
true
boolean
number
number
string
string
number
NaN
number
78
string
*/


// ----- Operations ------

let value = 3;
let negValue = -value
console.log(negValue);

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // this is 2^4
console.log(2/2);
console.log(2%2);
*/


console.log(1 + 2); // addition of int
console.log("1" + "2"); // concatenation of strings

console.log("1" + 2);
console.log(1 + "2"); // in both cases output is 12

// Type Conversions : ToPrimitive

// if first one is string, all remaining are concatenared as string itself
console.log("1" + "2" + 2);
console.log("1" + 2 + 2); 

// here first we get int, so first 2 digits are added as int
console.log(1 + 2 + "2"); 

console.log( (3+4) + '5');
console.log( '5' + (3+4) ); // here above rule doesn't apply coz scope ends

// this is converted into bool value
console.log(+""); 
console.log(+true); 

