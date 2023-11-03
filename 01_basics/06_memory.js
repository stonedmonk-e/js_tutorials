// Stack memory - (Primitive), Heap memory - (Non-primitve)

let myName = "shashank";

let anotherName = myName; // copied to anotherName
anotherName = "bangaru"; // so changing this won't make any difference to myName

console.log(myName); 
console.log(anotherName);

/* output
shashank
bangaru
*/

// -------------------------------------------------------------- //

// Objects - stored in heap
let user1 = {
    email : "user@goog.com",
    upi : "user@sbl"
}

//when changed, only reference is passed 
let user2 = user1
user2.email = "bangaru@goog.com" // change user2 value

// reference is changed, so both values will be changed
console.log(user1.email);
console.log(user2.email);

/* output
bangaru@goog.com
bangaru@goog.com
*/