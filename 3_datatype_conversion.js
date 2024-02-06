// conversion of datatypes

/////// 1. Others to Number ///////

// String -> Number //
// let score = 35
let score = "35"
let weirdScore = "35abc"

// converting string into number
let scoreAsNumber = Number(score);
let weirdScoreAsNumber = Number(weirdScore);

console.log(typeof score)
console.log(typeof(scoreAsNumber))

console.log(typeof(weirdScoreAsNumber)) // NOTE: prints number
console.log(scoreAsNumber) // but value is NaN
// Point To Remember: in JS, NaN is catergorized under datatype number but it signifies the value is not a number.

// Null -> Number
let yourBrain = null
let yourBrainAsNumber = Number(yourBrain)

console.log(yourBrain)
console.log(typeof(yourBrain)) // null is an object datatype

console.log(yourBrainAsNumber) // null's equivalent in number is 0
console.log(typeof(yourBrainAsNumber))

// Undefined -> Number
let areYouNuts = undefined
let areYouNutsAsNumber = Number(areYouNuts)

console.log(areYouNuts)
console.log(typeof(areYouNuts)) // undefined is of datatype undefined

console.log(areYouNutsAsNumber) // undefined's equivalent in number is NaN
console.log(typeof(areYouNutsAsNumber))

// Boolean -> Number
let areYouWinningSon = true
let areYourWinningSonAsNumber = Number(areYouWinningSon)

console.log(areYouWinningSon)
console.log(typeof areYouWinningSon)

console.log(areYourWinningSonAsNumber) // false => 0, true => 1
console.log(typeof areYourWinningSonAsNumber)

// NaN -> Number 
let notANumber = Number(NaN)
console.log(notANumber) // stays the same, NaN
console.log(typeof notANumber)


// NOTES: Others to Number
/*
"33" => 33
"33abc" => NaN
false => 0, true => 1
null => 0
undefined => NaN
*/

/////// 2. Others to Boolean ///////

// Number -> Boolean
let yearsOfExperience = 12
let yearsOfExperienceAsBoolean = Boolean(yearsOfExperience);

console.log(yearsOfExperienceAsBoolean) // 0 => false, any other number => true
console.log(typeof yearsOfExperienceAsBoolean)

// String -> Boolean
let name = "some name"
let nameAsBoolean = Boolean(name)

console.log(nameAsBoolean) // "" => false, "dsihd" => true
console.log(typeof nameAsBoolean)

// Null -> Boolean
let myPockets = null
let myPocketsAsBoolean = Boolean(myPockets)

console.log(myPocketsAsBoolean) // null => false
console.log(typeof myPocketsAsBoolean)

// Undefined -> Boolean
let myCareer = undefined
let myCareerAsBoolean = Boolean(myCareer)

console.log(myCareerAsBoolean) // undefined => false
console.log(typeof myCareerAsBoolean)

// NaN -> Boolean
let myGrades = NaN
let myGradesAsBoolean = Boolean(myGrades)

console.log(myGradesAsBoolean) // NaN => false
console.log(typeof myGradesAsBoolean)

/*
NOTES: Boolean Conversion
33 => true, 0 => false
"some string" => true, "" => false
null => false
undefined => false
NaN => false
*/

/////// 3. Others to string ///////

// Number -> String
let someNumber = 33
let someNumberAsString = String(someNumber) //"33"

console.log(someNumberAsString) 
console.log(typeof someNumberAsString)

// Boolean -> String
let someBoolean = false
let someBooleanAsString = String(someBoolean) //"false"

console.log(someBooleanAsString) 
console.log(typeof someBooleanAsString)

// Null -> String
let someNull = null
let someNullAsString = String(someNull) //"null"

console.log(someNullAsString) 
console.log(typeof someNullAsString)

// Undefined -> String
let someUndefined = undefined
let someUndefinedAsString = String(someUndefined) //"undefined"

console.log(someUndefinedAsString) 
console.log(typeof someUndefinedAsString)

// NaN -> String
let outOfNames = NaN
let outOfNamesAsString = String(NaN) //"NaN"

console.log(outOfNamesAsString) 
console.log(typeof outOfNamesAsString)

// NOTES: Strings are pretty straight forward