// JS supports both legacy version and newer ECMA standards

"use strict"   // if written on any file then all the code after it will be treated as newer ECMA JS standards.

// NOTE: alert() is not defined in nodeJS 
// NOTE: ; (comma) can be used to seperate statements when written on single line(not a good practice) otherwise comma is not needed in JS.

// commonly used primitive datatypes
let name = "manav" // String
let age = 24 // Number
let isLoggedIn = false // Boolean

// confusing datatypes in JS
let areYouDumb = null // a standalone value signifies "empty"
let areYouCrazy = undefined // signifines unassigned value
let whatTheHeck = NaN // signifies value is "Not A Number"
// Symbol (Uniqueness)

// Object datatypes (will see later)

// typeof operator => returns the type of a given value
console.log(typeof age)
// JS is weird
console.log(typeof areYouDumb) // object
console.log(typeof areYouCrazy) // undefined
console.log(typeof whatTheHeck) // Number