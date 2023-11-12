// forin loop
/*
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(key);  // prints only keys
}
for (const key in myObject) {
    console.log(myObject[key]); // prints only values
}

for (const key in myObject) {
    console.log(`${key} is shortcut for ${myObject[key]}`); // prints only values
}
/*
js is shortcut for javascript
cpp is shortcut for C++
rb is shortcut for ruby
swift is shortcut for swift by apple
*/

/*
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key); // same like object this prints only keys, i.e., indexes
    console.log(programming[key]); // this prints the values
}
*/


const map = new Map()
map.set('IN', "INDIA")
map.set('US', "UNITED STATES OF AM")
map.set('RU', "RUSSIA")
map.set('FR', "FRANCE")

// map is not iterable, so doesn't give any output
for (const key in map) {
    console.log(key);
}

