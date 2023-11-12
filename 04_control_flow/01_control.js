/*
if( 2 == 3){
    console.log(False);
}
else{
    console.log(" True");
}

const loggedIn = true

// Comparators
// <, <=, >, >=, ==, !=, ===, !==


if( 2 == "2"){
    console.log("equality operator checks by converting type");
}
if( 2 === "2"){
    console.log("executed");
}
else{
    console.log("strictly equality operator checks type with data");
}

// scope
const score = 200

if( score >= 200){
    const power = "fly"
    console.log(`User power: ${power}`);
}
*/

// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course"); // wont execute coz last case fale
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // User logged in
}