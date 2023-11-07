// push & concat
const marvel = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

/*
marvel.push(dc) // puts an array into an array in next index

console.log(marvel);  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// dc becomes an element at index 3

console.log(marvel[3][1]); //flash, access like a 2d array


const all_heroes = marvel.concat(dc) // merges 2 arrays
console.log(all_heroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// Spread function
const new_heroes = [...marvel, ...dc]
console.log(new_heroes);

*/

// convert multi dimensional array to 1d
const another = [1,2,3,[4,5,6],7,[6,7[4,5]]]

const real_another = another.flat(Infinity) // here infinity is depth

console.log(real_another);


// check if array and convert
console.log(Array.isArray("Shash")) // false coz its not a array
console.log(Array.from("Shash")) // [ 'S', 'h', 'a', 's', 'h' ] => char array
console.log(Array.from({name : "shash"})) // [] => won't convert coz not specified

// To convert individual values to array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
 