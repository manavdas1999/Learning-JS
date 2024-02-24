
// Q1: WAP to find the number of even digits in an array of integers.
function Q1(arr){
    let count = 0;
    for(let i of arr){
        if(i%2==0) count++;
    }
    return count;
}
// console.log(Q1([1,2,3,4,5,6]))


// Q2: WAP to find the number of even values(from 1) up to a given number.
function Q2(num){
    return Math.floor(num/2); // every other number is even
}
// console.log(Q2(6))

// Q3: WAP to check whether a given array of integers is sorted in incending order.
function Q3(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[i+1]) return false
    }
    return true
}
// console.log(Q3([1,2,31,4,5,6]))


//  Q4: WAP to get the largest even number from an array of integers.
function Q4(arr){
    let evenMax = null;
    for(let i of arr){
        if(i%2==0 && i>evenMax) evenMax = i;
    }
    return evenMax
}
// console.log(Q4([1,2,31,4,5,6]))


// $$ Q5: WAP to replace the first digit in a string(should contain atleast one digit) with $ character
function Q5(str){
    let res = ""
    for(let i of str){
        if(!isNaN(i)){
            res = str.replace(i, '$')
            break
        } 
    }
    return res;
}
console.log(Q5('Hello345 goodbye'))


