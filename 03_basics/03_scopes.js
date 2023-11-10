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

// it is for entire coding environment
// it attaches to the Window object, while NodeJS uses an object named global.

// Global variables are never garbage-collected. Polluting the global namespace can lead to name collision. 
// This is a situation in which your code tries to use the same variable name for different things in the same namespace.
