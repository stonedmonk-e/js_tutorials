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
symbol => used mostly in react to fin uniqueness of components
*/

console.log(typeof null); // null is an object
console.log(typeof undefined); // this is just undefined