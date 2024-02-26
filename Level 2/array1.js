

const myArr = [0,1,2,3,4,5]
const myEvens = Array(2,4,6,8)
const myOdds = new Array(1,3,5,7) // with or without new, makes no difference

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

// arrays are index based but indices does not support negative values
// .at(index) supports negative indices
console.log(myArr.at(-2))
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
// also .lastIndexOf(value, fromIndex?)

// reverse array : .reverse() - reverses the array in place
console.log(myArr.reverse())
// .toReversed() method of Array instances is the copying counterpart of the reverse() method. It returns a new array with the elements in reversed order.
const revArr = myArr.toReversed()
console.log(revArr)
console.log(myArr)

//(IMP!) sort array : .sort() - The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
// NOTE: we can provide a sorting function to define the sorting procedure(will learn later) .sort(fn)


const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // unexpected as it converts values to strings and then sorts according to UTF coding

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

// .splice(start, deleteCount?) starts deleting elements from 'start' and returns the removed part as array
// console.log("Before", myArr) 
// let mySubArray2 = myArr.splice(2) // .splice(start)
// console.log(mySubArray2)
// console.log("After", myArr)

console.log("Before", myArr) 
let mySubArray3 = myArr.splice(2, 3) // .splice(start)
console.log(mySubArray3)
console.log("After", myArr)