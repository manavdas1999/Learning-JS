// Operators in JS

let value = 5;
// 1. Arithmetic operators
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2)
console.log(2/2)
console.log(2%2)
console.log(value++) // prefix, postfix both works
console.log(value--)
console.log(-value) //negation
console.log(+value) //interesting, unary 
/*
Unary ‘+’ is the fastest and preferred way of converting something into a number But not the most readable
*/

// 2. Arithmetics with strings and numbers
let str1 = "hello"
let str2 = "world"

console.log(str1 + str2) // concatenation
// weird
console.log("1" + 2)
console.log(1 + "2")

console.log("1" + 2 + 2)
console.log(1  + "2" + 2)
console.log(1 + 2 + "2") // 1+2 => 3 + "2" => 32 
// NOTE: evaluation takes place from left to right. Precedency of operators

console.log(str1 - str2) //NaN
// weird
console.log("1" - 2) // -1
console.log(1 - "2") // -1

console.log("1" - 2 - 2) //-3
console.log(1  - "2" - 2) //-3
console.log(1 - 2 - "2") //-3
// NOTE: subtraction does not have any operation for strings BUT it implicitly converts string numbers to numbers before operation