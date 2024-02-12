// Basic comparison operators (returns true or false)
// >, <, >=, <=, ==, != 


// // NOTE: Idea is to avoid writing such confusing code (that's why Typescript is created)
// The confusing part
// 1. comparison between different types

// string converts to number 
console.log("2" > 1) // true
console.log("02" < 1) // false
console.log("02" == 2) // true

console.log("11" > "100") // true, NOTE!!

console.log("apple" > "banana") //false
console.log("apple" == "apples") //false

// NOTE leaving some content for later




// == vs ===
// === is called strict equality, checks both value and datatype
// == converts datatype then compares value, leading to unexpected results
console.log("2" == 2) //true
console.log("2" === 2) //false

let value1 = 5
let value2 = 5
console.log(value1 == value2)
console.log(value1 === value2)