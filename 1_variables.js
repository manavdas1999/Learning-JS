// 1. Declaration and initialization of variables

// var, let and const

// declaration and initialization
const userID = 1100
let userEmail = "user@gmail.com"
var userPassword = "123456" // global variables?
userCity = "Kolkata" // research more about it

// declaration only, default value in JS is undefined.
let userState;
var userCountry;

// modifying values
//userID = 1102 //TypeError: Assignment to constant variable.
userEmail = "newUser@gmail.com"
userPassword = "654321"
userCity = "Mumbai"

// $$ console.table
console.table([userID, userEmail, userPassword, userCity, userState, userCountry])

// difference b/w var and let
// 1. let is scoped functionally (introduced in ES6 2015)
// 2. var is scoped globally
{
let userEmail = "user@gmail.com"
var userPassword = "123456"
userCity = "Jaipur"
userPassword = "11111"
userEmail = "sjdi"
console.log(userEmail, userPassword, userCity)
}
console.log(userEmail, userPassword, userCity) //the outer userPassword is changes which is globally scoped.

