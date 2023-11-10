// IIFE => Immediately Invoked Function Expression 

// take care of ; at the end of function, mandatory

// named iife
(function chai(){
    console.log(`DB Connected`);
})();
// the function will be called here itself, no need to call separately

// IIFE in arrow function a.k.a Simple iife
( () => {
    console.log(`DB Connected 2`);
}) ();

// When we write 2 simple iife in one file, then it'll run with no problem
( () => {
    console.log(`DB Connected 3`); // DB Connected 3
}) ();

// passing parameters
( (name) => {
    console.log(`DB Connected 2 ${name}`); // DB Connected 2 shash
}) ('shash');
// below line is the call, so we pass value of name here
