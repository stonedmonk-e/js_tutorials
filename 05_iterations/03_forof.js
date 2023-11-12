// forof

// ["", "", ""]
// [{}, {}, {}]

/*
const arr = [1, 2, 3, 4, 5]

for (const iterator of object) {  
}

for (const num of arr) {
    console.log(num);
}


const greetings = "Hello WOrld!!"
for (const i of greetings) {
    console.log(`Each char is ${i}`);
}
*/


// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('US', "UNITED STATES OF AM")
map.set('RU', "RUSSIA")
map.set('FR', "FRANCE")

//console.log(map);

for (const key of map) {
    console.log(key);    
}
/* Prints like this
// for console.log(map);
Map(4) {
    'IN' => 'INDIA',
    'US' => 'UNITED STATES OF AM',
    'RU' => 'RUSSIA',
    'FR' => 'FRANCE'
}
// from for loop
[ 'IN', 'INDIA' ]
[ 'US', 'UNITED STATES OF AM' ]
[ 'RU', 'RUSSIA' ]
[ 'FR', 'FRANCE' ]
*/

// let's destructure the map
for (const [key, value] of map) {
    console.log(key, '=>', value);    
}
/*
IN => INDIA
US => UNITED STATES OF AM
RU => RUSSIA
FR => FRANCE
*/


const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

/*
for (const [key, value] of myObject) {
    console.log(key, '=>', value);    
}
*/
// this gave => TypeError: myObject is not iterable
// we can't iterate over object like map or array
