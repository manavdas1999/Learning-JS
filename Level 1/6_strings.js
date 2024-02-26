// Strings
//1. single quote or double quote

//2. String interpolation (alternative to string concatenation)

const myName = "Manav"
const myAge = 24
// the usual way
console.log("Hello " + myName + ", you are " + myAge + " years old.")

// the mentos way
// backticks(``) and ${} for evaluation part
console.log(`Hello ${myName}, you are ${myAge} years old.`)

//3. initializing string using object constructor
const iceCream = new String("ButterScotch")
console.log(iceCream) // a bit different output
// try doing the same in console of any browser (REPL)
// https://medium.com/front-end-weekly/difference-between-string-primitives-and-string-object-d962b7ab8496

// NOTE: its not indexing in JS, its key-value pair as String is an object in JS and not an array
console.log(iceCream[0])
console.log(iceCream[1])
console.log(iceCream[2])

//4. Some important methods of strings

// length property
console.log(iceCream.length)
console.log(myName.length)

// uppercase and lowercase
console.log(iceCream.toUpperCase())
console.log(iceCream.toLowerCase())

// character location

console.log(iceCream.charAt(7)) 
console.log(myName.charAt(7)) //NOTE: no error, just blank
console.log(myName.charAt(2))

// index of character
console.log(iceCream.indexOf("u"))
console.log(iceCream.indexOf("z")) //-1 if not found

// substring(start, end-1)
const newString1 = iceCream.substring(1,5)
const negativeString1 = iceCream.substring(-5,1) //simply starts from 0
const weirdString1 = iceCream.substring(5,1) // substring auto swaps if start > end
console.log(newString1,negativeString1, weirdString1)


// slice(start, end-1)
const newString2 = iceCream.slice(1,5)
const negativeString2 = iceCream.slice(-5,-1) //stts from -5 and goes to -1
const weirdString2 = iceCream.slice(5,1) //nothing
console.log(newString2,negativeString2, weirdString2)

// This method is capable of taking both positive and negative indexes. The positive index finds the element from the start of the array and the negative index is used to find the element from the end of the array.


// trim (trims whitespaces and newlines)
const spacedString = "   javascript   \n"
console.log(spacedString)
console.log(spacedString.trim())

// replace(old, new)
const replacedString = iceCream.replace("Scotch", "Milk")
console.log(replacedString)

// includes(substring) return true or false
console.log(iceCream.includes("Sco"))

// split(splitter)
console.log(iceCream.split(""))
console.log("Hello world of amazing people".split(" "))