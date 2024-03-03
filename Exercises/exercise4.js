
// Q1. Given a year, report if it is a leap year.

let year = 2024
let isLeapYear = false

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            isLeapYear = true
        }
        else{
            isLeapYear = false
        }
    }
    else isLeapYear = true;
}
// console.log(isLeapYear)

// *TODO Q2. WAP to compare two objects to determine if the first one contains the same properties as the second one (which may have additional properties)


// Q3. WAP to convert a comma separated values(CSV) string to a 2D array. A new line indicates a new row in the array.

// EG: 
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza

let str = `abc,def,ghi
jkl,mno,pqr
stu,vwx,yza`

let rows = str.split("\n"); //['abc,def,ghi' , 'jkl,mno,pqr' , 'stu,vwx,yza']

let strArr = []
for(let row of rows){
    strArr.push(row.split(",")) //  ['abc', 'def', 'ghi']
}
// console.log(strArr)


// Q4. WAP to generate a random hexadecimal color code
// HINT: hex color code: #RRGGBB  
// where every R,G,B=(0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f)

// Additional HINT(extra): 
// number.toString(2) -> binary of that number
// number.toString(8) -> octal of that number
// number.toString(10) -> decimal of that number (same)
// number.toString(16) -> Hexa of that number

function generateRandomHexColor(){
    let color = '#'

    // // Approach 1
    // const values = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    // for(let i=0; i<6; i++){
    //     color = color.concat(values[Math.floor(Math.random() * 16)])
    // } 

    // Approach 2
    for(let i=0; i<6; i++){
        color = color.concat(Math.floor(Math.random() * 16).toString(16))
    } 
    return color
}

// console.log(generateRandomHexColor())


// Q5. WAP that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

// EG:
// fun([1,2,3,4,5], fn) => true if fn(x) is true for all otherwise false
// for callback fn/predicate fn be (x) => x > 0 

function Q5(arr, fn){
    for(let i of arr){
        if(fn(i) === false) return false
    }
    return true
}

// // use of anonymous arrow func
// console.log(Q5([1,-2,3,4], (x) => x > 0))
// // use of anonymous fn
// console.log(Q5([1,2,3,4], function(val) {
//     return val > 0
// }))