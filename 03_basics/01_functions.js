/*
function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
}

sayMyName();

// function parameters here, what we pass while calling the function are arguments
function add2(number1, number2){
    console.log(number1 + number2);
}

add2() // NaN
add2(6,9) // 15
add2(6,"9") // 69, takes both as strings
add2(6,"a") // 6a
add2(5, null) // 5
function add3(number1, number2){
    let result = number1 + number2;
    return result;
}

console.log( "Result: ", add3(6,7) ); //13

*/

function loginUserMsg(username){
    if(username === undefined){          // or if(!username)
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

console.log(loginUserMsg("shash")); // shash just logged in
console.log(loginUserMsg()); // undefined just logged in

// To solve this problem we can use default parameters
//function loginUserMsg(username = "User"){







