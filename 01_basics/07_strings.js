const name = "shashank";
const repoCount = 50;

console.log(name + repoCount + " Value"); // or we can use concat()
// shashank50 Value
// above style is outdated, now we can use backticks
//Backticks help us in string interpolation

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log(`We can directly access methods while prinintg using backticks like ${name.toUpperCase()}`);
/*
Hello my name is shashank and my repo count is 50
We can directly access methods while prinintg using backticks like SHASHANK
*/

// string is an object not datatype in js

const gameName = new String('shashank-s');

console.log(`We can access the char in string by indexing : ${gameName[0]} `);
// We can access the char in string by indexing : s

// to show the string is an object
console.log(gameName.__proto__);
// {}


//methods in string

console.log(gameName.length); // 10

console.log(gameName.charAt(3)); // s
console.log(gameName.indexOf('n')); // 6

/*
3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length) i.e., the length of the extracted part

If the first parameter is negative, the position counts from the end of the string.
*/

// doesnt include the char at last index
// if we give negative here, it ignores and starts from zero
const newString = gameName.substring(0, 4);
console.log(newString); // shas

// we can give negative values too, it considers from end
const anotherString = gameName.slice(-5, 4);
console.log(anotherString); // shas

// trim function removes extra space (whitespace) in string
const s2 = "       name       "
console.log(s2);
console.log(s2.trim());
// there exists trimStart() and trimEnd()

/*
        name       
name
*/

const url = "https://hit.com/hit%56boy"

console.log( url.replace('%56', '-') );
// there's also a replaceAll() method 

console.log( url.includes('hit') );
console.log( url.includes('huc') );

/*
https://hit.com/hit-boy
true
false
*/

// split takes in a seprator and a limit
console.log( gameName.split('-') ); // [ 'shashank', 's' ]

// There's a padStart() to fill string with given char until length reacges n
let aadhar = "5689"
console.log(aadhar.padStart(12, "X")); // XXXXXXXX5689

