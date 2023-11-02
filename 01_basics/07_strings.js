const name = "shashank";
const repoCount = 50;

console.log(name + repoCount + " Value");
// above style is outdated, now we can use backticks
//Backticks help us in string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(`We can directly access methods while prinintg using backticks like ${name.toUpperCase()}`);

// string is an object not datatype in js

const gameName = new String('shashank');

console.log(`We can access the char in string by indexing : ${gameName[0]} `);

// to show the string is an object
console.log(gameName.__proto__);

//methods in string

console.log(gameName.length);

console.log(gameName.charAt(3));

