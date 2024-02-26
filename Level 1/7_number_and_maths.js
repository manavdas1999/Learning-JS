
//1. ways of initializing
// usual way
const score = 90
const marks = Number(40)
// constructor way
const balance = new Number(100)
console.log(score)
console.log(marks)
console.log(balance)


// some methods

// toString
console.log(balance.toString())
console.log(typeof balance.toString())

// toFixed(countOfDecimalValues) (NOTE: returns a string)
console.log(balance.toFixed(2))
const priceOfMySoul = 0.002323235543
console.log(priceOfMySoul.toFixed(4))

// toPrecision(precision) (NOTE: returns a string)
console.log(balance.toFixed(2))
const prec1 = 123.8967
console.log(prec1.toPrecision(1)) //1e+2
console.log(prec1.toPrecision(2)) //1.2e+2
console.log(prec1.toPrecision(3)) //124
console.log(prec1.toPrecision(4)) //123.9
console.log(prec1.toPrecision(5)) //123.90

// toLocaleString(regionCode)
const money = 100000000
console.log(money.toLocaleString('en-US')) //100,000,000
console.log(money.toLocaleString('en-IN')) //10,00,00,000
console.log(money.toLocaleString()) //region dependent

// Number (class methods and properties)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)


//////// Math Library (prepackaged) /////
console.log(Math) // returns object math. NOTE: in JS even libraries are kept as functions in an Object
console.log(Math.PI)

// absolute value(+ve)
console.log(Math.abs(5))
console.log(Math.abs(-5))

// rounding off (nearest integer)
console.log(Math.round(4.3))
console.log(Math.round(4.5))

// ceil and floor
console.log(Math.ceil(4.3)) // closest integer >= given number

console.log(Math.floor(4.3)) // closest integer <= given number

// power and sqrt
console.log(Math.pow(4, 3))
console.log(Math.pow(4, 0.5))
console.log(Math.sqrt(4))

// min and max of an array
console.log(Math.min(2,5,5,0,2))
console.log(Math.max(2,5,5,0,2))

// random, returns value b/w 0-1 (1 exclusive)
console.log(Math.random())
// to get random no. between 1-10
console.log(Math.ceil(Math.random()*10))
// to get random no. between any range
const min = 1
const max = 6
let diceRoll = Math.ceil((Math.random() * (max-min)) + min)
console.log(diceRoll)