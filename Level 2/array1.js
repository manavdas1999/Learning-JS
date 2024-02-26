

const myArr = [0,1,2,3,4,5]
const myEvens = Array(2,4,6,8)
const myOdds = new Array(1,3,5,7)

console.log(myArr)
console.log(myEvens)
console.log(myOdds)
// 1. Array in JS is dynamic type
const myArr2 = [0,1,2,3,4,5, true, 'hello', NaN, ['5', '6', '7']]
console.log(myArr2)

// 2. Arrays in JS are objects and pass/assign by reference only

// NOTE: learn about shallow copy vs deep copy in JS

// 3. Copying an array creates a shallow copy(i.e a reference to the original array)

// properties and methods

// length property
console.log(myArr.length)

// push (to append / insert at end)
myArr.push(11, 12, 13)
console.log(myArr)

// pop (to pop last element and RETURN it)
console.log(myArr.pop())
console.log(myArr)

// insert at first/beginning (NOTE: constly operation as it has to shift all elements)
myArr.unshift(4,5,6);
console.log(myArr)

// remove first element (NOTE: constly operation as it has to shift all elements)
console.log(myArr.shift());
console.log(myArr)

// check inclusivity (returns true/false) (returns undefined if array is empty)
console.log(myArr.includes(9))

// find index of first occurance of element (returns -1 if not found)
console.log(myArr.indexOf(5))
console.log(myArr.indexOf(5, 3)) // .indexOf(value, fromIndex?)

// array to string conversion
let myArrString = myArr.join()
console.log(myArrString)

myArrString = myArr.join("")  // .join(separator)
console.log(myArrString)

// string to array conversion
let myNameArr = 'manav'.split()
console.log(myNameArr) //puts value in an array as a whole i.e array of single element [string]

myNameArr = 'manav'.split("") // .split(splitter)
console.log(myNameArr)

//(IMP!)(subarray) slice (retunrs a copy), splice (returns a copy AND REMOVES THE SPLICED PART FROM ORIGINAL ARRAY)
let mySubArray1 = myArr.slice()  // retuns whole array COPY
console.log(mySubArray1)

mySubArray1 = myArr.slice(2) // .slice(start?)
console.log(mySubArray1)

mySubArray1 = myArr.slice(2, 5) // .slice(start?, end?) (end not inclusive)
console.log(mySubArray1)

