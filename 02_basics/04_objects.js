// Methods to declare objects

const igUser = new Object() // singleton object
const igUser2 = {} // non singleton object

igUser2.id = "ABS"
igUser2.name = "Spunk"
igUser2.isLoggedIn = false;

// console.log(igUser2); // { id: 'ABS', name: 'Spunk', isLoggedIn: false }

// Nested objects

const fbUser = {
    email: "some@gay.com",
    fullname: {
        userfullname: {
            firstname: "Shashank",
            lastname: "S"
        }
    }
}

console.log(fbUser.fullname.userfullname.firstname); // Shashank

// Merging 2 objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1, obj2}
console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// this creates object inside object problem

const obj4 = Object.assign({}, obj1, obj2) 
// in this {} is our target and obj1 and obj2 are sources. So, theyll be stored in new object obj4
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// most used method for objects merging is spread, just like array

const obj5 = {...obj1, ...obj2}
console.log(obj5); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// -----------------------------------------------

// Array objects

const users = [
    {
        id: 1,
        email: "Hotwire@rook.loo"
    },
    {
        id: 1,
        email: "Hotwire@rook.loo"
    },
    {
        id: 1,
        email: "Hotwire@rook.loo"
    }
]

users[1].email
console.log(igUser2);

// iterate on array objects and find all key and values

console.log(Object.keys(igUser2)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(igUser2)); // [ 'ABS', 'Spunk', false ]
console.log(Object.entries(igUser2)); // [ [ 'id', 'ABS' ], [ 'name', 'Spunk' ], [ 'isLoggedIn', false ] ]

console.log(igUser2.hasOwnProperty('isLoggedIn'));

