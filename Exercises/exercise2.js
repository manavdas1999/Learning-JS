
// Q1: Write a JS program to create a new string from a given taking the first 3 characters and the last 3 characters of a string and adding them together. The String length must be 3 or more, if not, return the original string.

function Q1(str){
    if (str.length < 3) return str
    
    return str.slice(0,3) + str.slice(-3)
}
// const myStr1 = "epoch"
// console.log(Q1(myStr1))


// Q2: WAP to extract the first half of a string of even length.
function Q2(str){
    return str.slice(0, str.length/2)
}
// const myStr2 = "epoc"
// console.log(Q2(myStr2))


//  Q3: WAP to concatenate two strings except their first character.
function Q3(str1, str2){
    return str1.slice(1) + str2.slice(1);
}
// const myStr3 = "apple"
// const myStr31 = "pie"
// console.log(Q3(myStr3, myStr31))


//  Q4: Given two values, WAP to find out which one is nearest to 100
function Q4(num1, num2){
    return Math.abs(100-num1) < Math.abs(100-num2) ? num1 : num2;
}
// const myNum4 = 34
// const myNum41 = 35
// console.log(Q4(myNum4, myNum41))

//  Q5: WAP to check a given string contains 2 to 4 occurances of a specific sub string
function Q5(str, sub){
    let count = 0;
    for(let s of str){
        if(s == sub) count++;
    }
    return count>=2 && count <=4;
}
const myStr5 = "apple"
const sub = "p"
console.log(Q5(myStr5, sub))