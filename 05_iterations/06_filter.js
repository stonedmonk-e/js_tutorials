/*
const programming = ["js", "rb", "py", "java", "cpp"]

const values = programming.forEach(element => {
    console.log(element);
    // return element
});
*/
 
// console.log(values); // undefined => this doensnt print anything, coz foreach doesnt return anything

// filter function
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*
const newNums = myNums.filter( (num) => num>4 )
console.log(newNums); // [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter( (num) => {
    // num>4 
    return num>4; // here we must use return keyword, then it works properly
                  // this is coz of implicit return case  
})
console.log(newNums2); // [] => empty array coz of 

// without using filter function, here we use conditions
const newNums3 = []
myNums.forEach( (num) => {
    if(num > 4)
    newNums3.push(num)
})
console.log(newNums3);
*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

/*
// lets apply filters for conditions
// select books whose genre is History
let userBooks = books.filter( (bk) => bk.genre === 'History')

// select books published after 2000
// userBooks = books.filter( (bk) => bk.publish >= 2000 ) 
userBooks = books.filter( (bk) => { return bk.publish >= 2000 }) 
// curly braces not mandatory, but when used we must use return keyword coz a new scope is created there

console.log(userBooks);
*/
// using both those conditions together
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1990 && bk.genre === "History"
})
console.log(userBooks);