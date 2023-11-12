// Truthy case

//const userEmail = "shash@derk.in" // by default assumed to be truth value => Got user email
// const userEmail = "" // Don't have user email
const userEmail = [] // Got user email, empty string is considered true but empty string is false

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Except above all are truthy values, few imp ones are
// "0", 'false', " ", [] => empty array, {} => empty object, function(){} => empty function 

// Now checking empty array

if (userEmail.length === 0) {
    console.log("Array is empty"); // Array is empty
}

// Check empty object
const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); // Object is empty
}

// When we check few cases inside if(), they give true
// false == 0 => true
// false == '' => true
// 0 == '' => true

// =============================
// Nullish Coalescing Operator(??): null, undefined

let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10 => if it's null then set it to 10
val1 = undefined ?? 15 // 15 => if it's undefined then set it to 15
val1 = null ?? 50 ?? 100 // 50 => just assigns the first value it gets
console.log(val1); 


// Ternary operator
// condition ? true : false

const price = 100
price <= 80 ? console.log("Prices less than 80") : console.log("more than 80") // more than 80

