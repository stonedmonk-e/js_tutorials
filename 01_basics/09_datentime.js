// js counts date and time in milisecond from Jan 1, 1970
// it's denoted in a long string

/*
let myDate = new Date()
console.log(typeof myDate); // object

console.log(myDate); // 2023-11-03T18:03:29.532Z

console.log(myDate.toString()); // Fri Nov 03 2023 18:04:43 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Fri Nov 03 2023

console.log(myDate.toISOString()); // 2023-11-03T18:05:35.306Z
console.log(myDate.toJSON()); // 2023-11-03T18:05:35.306Z
console.log(myDate.toLocaleString()); // 11/3/2023, 6:06:50 PM (GMT)


// How to declare a custom date and time

let myCreatedDate = new Date(2023, 0, 23); // month start from 0 in js
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// With time
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); // we can set time too
console.log(myCreatedDate2.toLocaleString()); // 1/23/2023, 5:03:00 AM (MM/DD/YYYY) is default

// Declaring with preferred style

console.log(myCreatedDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM 

*/

let myCreatedDate3 = new Date("2023-01-14");

let timestamp = Date.now()
console.log(timestamp); // 1699035369508 in ms
console.log(myCreatedDate3.getTime()); // 1673654400000 , for the date that we have declared

// To convert to seconds

console.log(Math.floor(Date.now()/1000)); // 1699035539 in seconds


let date3 = new Date()
console.log(date3.getMonth() + 1); // 10
console.log(date3.getDay()); // 5


date3.toLocaleString('default', {
    weekday: "long",
})