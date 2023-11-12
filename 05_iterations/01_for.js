/*
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}

// console.log(element); => can't be accessed outside the loop

// Multiplication tables from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }
}

let myArray = ['Flash', 'Batman', 'Superman']

console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}


// braek and continue

for( let i=1;i<=20;i++){
    if(i == 5){
        console.log("Detected 5");
        break; // stops after detected 5
    }
    console.log(`Value of i is ${i}`);
}
*/
for( let i=1;i<=20;i++){
    if(i == 5){
        console.log("Detected 5");
        continue; // runs even after if case, but doesn't execute the code below it in loop for this iteratiom
        // in simple words, it skips 1 iteration
    }
    console.log(`Value of i is ${i}`);
}