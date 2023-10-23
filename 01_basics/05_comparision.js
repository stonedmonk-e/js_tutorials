// Comparision occurs after type conversion

console.log("2" > 1);
console.log("02" > 1);

console.log(2 > "1");

// Always avoid all these type of conversions, not a good practice

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // this prints true
console.log(null === 0);

/* Above set,
The reason is that an equality check == and comparisons > < >= <= work differently.

Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
*/

// Strict equality opearator " === "
console.log("2" === 2); // checks datatype and value both 