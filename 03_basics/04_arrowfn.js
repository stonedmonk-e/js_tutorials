// Arrow functions
// this keyword - refers to current context

const user = {
    username: "ramu",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // { username: 'ramu', price: 999, welcomeMsg: [Function: welcomeMsg] }
    }
}

console.log(this); // {} => here it's empty object. this doesn't have any current
// but in browser it's a window object so it returns many null values with key for object


user.welcomeMsg() // ramu, welcome to website

// Let's change username i.e., change context
// this will always point to current context of the object
user.username = "samu"
user.welcomeMsg() // samu, welcome to website

console.log(this); // { username: 'samu', price: 999, welcomeMsg: [Function: welcomeMsg] }

function chai(){
    console.log(this); // this prints all the values similar to window object
}
chai();

const chai2 = function(){
    let username = "shash"
    console.log(this.username); // undefined
}
chai2();

// Now lets declare array function
const chai3 = () => {
    let username = "shash"
    console.log(this.username); // undefined
}

chai3();

// ------------------------------------------

// Basic arrow function
const addTwo = (num1, num2) => {
    return num1 + num2;
}
console.log(addTwo(6, 9)); // 15
// when we use curly braces we must always use return

// Implicit return - no need for return coz just 1 line code
const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo2(6, 9)); // 15

// wrap inside parenthesis
const addTwo3 = (num1, num2) => (num1 + num2);
console.log(addTwo3(6, 9)); // 15
// when using parethesis, no need for return

// let's try to retun object using implicit return
const obj = () => {username: "shash"};
console.log(obj()); // undefined => coz we need to use parenthsis to return object

const obj2 = () => ( {username: "shash"} );
console.log(obj2()); // { username: 'shash' }
// we put object inside parethesis


// arrow functions in loops, we'll discuss in later section
const myArr = [2,4,76,878]
myArr.forEach(() => {})