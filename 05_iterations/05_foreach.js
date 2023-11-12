// foreach

const programming = ["js", "rb", "py", "java", "cpp"]
/*
// 1. we write the callback function
programming.forEach( function (val){
    console.log(val);
} )

// 2. callback function using arrow function
programming.forEach(element => {
    console.log(element);
});

// 3. first defining function then use forEach
function printMe(item){
    console.log(item);
}
programming.forEach(printMe); // prints all values

// printMe('c') // => adds this to array only while printing

programming.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})
*/

/* Prints all the info
js 0 [ 'js', 'rb', 'py', 'java', 'cpp' ]
rb 1 [ 'js', 'rb', 'py', 'java', 'cpp' ]
py 2 [ 'js', 'rb', 'py', 'java', 'cpp' ]
java 3 [ 'js', 'rb', 'py', 'java', 'cpp' ]
cpp 4 [ 'js', 'rb', 'py', 'java', 'cpp' ]
*/

// Foreach on object
/*
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( element => {
    // console.log(element); // object representation
    console.log(element.languageName); // access seperately
    console.log(element.languageFileName);
})
*/