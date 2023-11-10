// Scope in js
// Scope defined by curly braces '{}'

if(true){ // these a, b are defined inside this scope
    let a = 10
    const b = 20
    var c = 30
    
    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
}

if(true){ // var does not follow scope, so not recommended to use 
    var d = 40
}
console.log(d); // 40


let x = 10

if(true){
    let x = 39
    console.log("INNER: ", x);
}
console.log("OUTER: ", x);

// The global scope is different for when we run js code in coding environment, 
// and different in the console of the inspect tab in browser

// in browser it attaches to the Window object, while NodeJS uses an object named global.
// it is for entire coding environment

// Global variables are never garbage-collected. Polluting the global namespace can lead to name collision. 
// This is a situation in which your code tries to use the same variable name for different things in the same namespace.


function one(){
    const username = "shash"

    function two(){
        const website = "youtube"
        console.log(username); // shash
    }
    // console.log(website); => can't be accessed outside

    two(); // prints shash
}
one();

// cod with error
if(true){
    const username = "shash"
    if(username == "shash"){
        const website = "youtube"
        console.log(username + website); // shashyoutube
    }
    // console.log(website); => cant be accessed
}
// console.log(username); => cant be accessed

// +++++++++++++++ INTERESTING +++++++++++++++++

console.log( addone(5) ); // 6 => can log before defining function too
// this is a function
function addone(value){
    return value + 1;
}

// console.log( addTwo(5) ); => this won't run before function definition
// this is called Hoisting

// this is also a function, but also called as expression
const addTwo = function(num){
    return num + 2;
}

console.log( addTwo(5) ); // 7