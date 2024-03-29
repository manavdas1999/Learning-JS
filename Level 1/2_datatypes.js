// JS supports both legacy version and newer ECMA standards

"use strict"   // if written on any file then all the code after it will be treated as newer ECMA JS standards.

// NOTE: alert() is not defined in nodeJS 
// NOTE: ; (semi comma) can be used to seperate statements when written on single line(not a good practice) otherwise comma is not needed in JS.

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
console.log(typeof(age))
// JS is weird
console.log(typeof areYouDumb) // object
console.log(typeof areYouCrazy) // undefined
console.log(typeof whatTheHeck) // Number

// ///
// Symbols (learn more about them)
const id = Symbol('12')
const anotherId = Symbol('12')
console.log(id === anotherId) // false; symbols are never same in memory

// Bigint
const bigNumber = 6867987979668585886868979079n
console.log(typeof bigNumber)



// Summary of datatypes
// 1. Two types - Primitive and Non primitive(or reference types)

// // Primitives(call by value) (in Stack)
// 7 types: String, Number, Boolean, null(Object), undefined, Symbol, BigInt

// // Reference type (non primitive) (call by reference) (in Heap)
// 3 types: Array, Objects, Functions(NOTE!!)
//NOTE: all non primitive types are called Object datatypes 


// 2. Javascript is dynamically typed