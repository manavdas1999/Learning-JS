// Operators in JS

let value = 5;
// 1. Arithmetic operators with numbers
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
// TLDR: For strings, + operator acts as concatenation operator BUT rest of the operators convert string to number and then perform numerical arithmetic (return value as Number)

// FOR MORE INFO, REFER ECMASCRIPT DOCS
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

// Multiply of strings(auto converts to numbers)
console.log("10" * 21) //210 
console.log("10" * "2") //20

console.log("10" / 21) //210 
console.log("10" / "2")//20 

// 3. Arithmetic operators with boolean
// TLDR: boolean gets auto converted to number and then arithmetic operations are performed
console.log(true + true) //2
console.log(true + false) //1
console.log(true - true) //0
console.log(true - false) //1
// Why? 
// Because true in equivalent to 1 and false id to 0 in numbers
console.log(Number(true), Number(false))
console.log(true / true) //1
console.log(true / false) //Infinity (Note: no infinity error in JS)
console.log(true * true) //1
console.log(true * false) //0

// 4. Arithmetic operations with null(auto converts to number (null => 0))
console.log(null + null) // 0
console.log(null - null) // 0
console.log(null - 1) // -1
console.log(null * 1) // 0
console.log(null / 1) // 0

// 5. Arithmetic operations with NaN(not possible, just returns NaN)
console.log(NaN + NaN) // NaN
console.log(NaN - NaN) // NaN
console.log(NaN - 1) // NaN
console.log(NaN * 1) // NaN
console.log(NaN / 0) // NaN (NOTE: No infinity as NaN is not an actual number)

// 5. Arithmetic operations with undefined(not possible, just returns NaN)
console.log(undefined + undefined) // NaN
console.log(undefined - undefined) // NaN
console.log(undefined - 1) // NaN
console.log(undefined * 1) // NaN
console.log(undefined / 0) // NaN (NOTE: No infinity as NaN is not an actual number)