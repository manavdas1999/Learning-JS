
// declaration and initialization

const obj = {} //empty object


// INTERVIEW Q: how to insert a symbol as key(or value)
const mySym = Symbol('mykey')
const user = {
    name: "Manav",
    'age': 24,
    isLoggedIn: false,
    false: 'keys can be either a number or string',
    'fav movies': ['Dune', 'Batman'],
    // sym: mySym  // symbol as value
    [mySym]: 'symbol as key'

}
// rule 1: by default key are processed as string (if key is not of any other data type)
// rule 2: values can be of any type (even data structures)
console.log(user)

// Accessing values
console.log(user.name)
console.log(user['age'])
console.log(user['false'])
console.log(user['fav movies'])
console.log(user[mySym]) 

// changing values
user.name = 'Angry Anna'
user['age'] = 101
// adding new key value
user['isHungry'] = 'YOU ARE GODDAMN RIGHT!'
console.log(user)

// To put a lock/freeze on changing
// --- prevents the modification of existing property attributes and values, and prevents the addition of new properties.
// Object.freeze(user)
user['age'] = 17  // it simply does not work (no error)
console.log(user)

// functions as value
user.greeting = function(){
    console.log(`Hello ${this.name}!`) //this references the object itself
}
console.log(user)
console.log(user.greeting) // just returns the function object reference
user.greeting()  // invokes/calls the function object
user['greeting']()