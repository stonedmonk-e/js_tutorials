// singleton - when object created using constructor, coz its unique

myArray = ["s", "i"] // in this we can just use indexing to access elements
// but in object we give as key-value pair.

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "shash",
    "full name" : "Shashank S",
    age : 22,
    [mySym] : "mykey1",
    location : "ckm",
    email: "shash@outlook.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

/*
// To access data from object 
console.log(JsUser.email); // using . operator
console.log(JsUser["email"]); // using square brackets

console.log(JsUser["full name"]);

console.log(typeof JsUser.mySym); // undefined
// we declared as Symbol, nut its converted to string now
// when declared as { mySym : "mykey1", }, in object
console.log(JsUser[mySym]) // undefined, but now its mykey1

// To change data in object
JsUser.email = "shash@bluemoon.in"

// To stop changing values from now on, just freeze
Object.freeze(JsUser)
JsUser.email = "shash@monkeydong.in" // this change wont be done

console.log(JsUser); // print complete object
/*
{
    name: 'shash',
    'full name': 'Shashank S',
    age: 22,
    location: 'ckm',
    email: 'shash@bluemoon.in',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(key1)]: 'mykey1'
}
*/

JsUser.greeting = function(){
    console.log("Hello Js User!!");
}

console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // Hello Js User!!

// accessing name from object by referencing using this keyword
JsUser.greeting2 = function(){
    console.log(`Hello Js User!!, ${this.name}`); // string interpolation using backticks
}
console.log(JsUser.greeting2()); // Hello Js User!!, shash
// --------------------------------------------


