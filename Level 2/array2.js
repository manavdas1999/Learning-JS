
// merging of arrays

let myEvens = [2,4,6,8]
let myOdds = [1,3,5,7]

// // a failed attempt (pushes the array as an element of array) (no new array created)
// myEvens.push(myOdds);
// console.log(myEvens)
// // accessing (confusing)
// console.log(myEvens[4][1])

// .concat([]) - Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let myNums = myEvens.concat(myOdds)
console.log(myNums)

// merging using spread operator(...) 
let myAllNums = [...myOdds, ...myEvens]
console.log(myAllNums)

// something interesting: .flat(depth:int)
let newArr = [1,2,3, [3,4,5], [5,6,7, [7,8,9]], 10]
// Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(newArr.flat())
console.log(newArr.flat(2))
console.log(newArr.flat(3))
console.log(newArr.flat(Infinity))

// to check is a given value is array or not
console.log(Array.isArray(newArr))
console.log(Array.isArray("name"))

// convet to array, Array.from(iterable) (if cannot convert to array, returns [])
console.log(Array.from("name"))