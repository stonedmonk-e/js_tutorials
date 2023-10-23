// treat all js code as newer version of js, 
// but now js is strict by default, but to write this is good syntax
"use strict";

// this runs only in browser, not node
//alert(3+3)

// this is not a good practice, code readability must be high
console.log(3+3); console.log("Hitesh")

let name = "shashank"
let age = 22
let isLoggedIn = false

/*
number => 2^53
bigint
string => ""
boolean => true/false
null => standalone value
undefined => 
symbol => used mostly in react to find uniqueness of components
*/

console.log(typeof null); // null is an object
console.log(typeof undefined); // this is just undefined

// -------------------------------------------------------

// Primitive Datatypes

// 7 categories : String, Number, null, Boolean, undefined, Symbol, BigInt

// Reference / Non-Primtive Datatypes : Array, Objects, Functions

// uniquely defined
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // prints false

// BigInt, we use 'n' at end
const bigNumber = 257800005278418451156984n

// Reference (Non primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "Nagraj", "Doga"];

let myObj = {
    name : "snoopy",
    age: 22,
}

const myFunc = function(){
    console.log("Hellooo!!!");
}

// --------------------------------------------------- //

// typeof => to check data type
console.log( typeof(bigNumber) )

console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"