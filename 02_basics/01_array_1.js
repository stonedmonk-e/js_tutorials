const myArray = [0,1,2,3,4,5,true, "shashank", false, 8.2]
// array can contains elements of different data types

// array is an object which helps us store multiple items under a single variable name

console.log(myArray[1]); // 1
console.log(myArray[7]); // shashank
console.log(myArray[6]); // true

// arrays create shallow copy

const myHeroes = ["shaktimaan", "naagraj"]

const myArr2 = new Array(1,2,3,4)

// Array methods

myArr2.push(6)
myArr2.push(7)
console.log(myArr2);

myArr2.pop()
console.log(myArr2);

// uncshift pushes the given value at beginning of array, it takes O(N) time
myArr2.unshift(4)
console.log(myArr2);

// removes the element at beginning of array
myArr2.shift()
console.log(myArr2);

console.log(myArr2.includes(9)); // false
console.log(myArr2.index(9)); // -1, coz doesn't exist 
// if exists then gives index

// -----------------------------------------------------------------------------

const newArr = myArr2.join()
console.log(myArr2); // [ 1, 2, 3, 4 ]  => array
console.log(newArr); // 1,2,3,4  => array converted to separate strings

// slice, splice
console.log("A ", myArr2); // A  [ 1, 2, 3, 4 ]
const myn1 = myArr2.slice(1, 3) 
console.log(myn1); // [ 2, 3 ] => sliced part of array


console.log("B ", myArr2); // B  [ 1, 2, 3, 4 ]
const myn2 = myArr2.splice(1, 3) 
console.log(myn2); // [ 2, 3, 4 ] => spliced part of array, includes end index element

console.log("C ", myArr2); // C  [ 1 ] => by using splice original array is manipulated

