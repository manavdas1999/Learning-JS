
// Q1. WAP a function that requires a passed string with letters in alphabetical order.
// example:
// 'webmaster' => 'abeemrstw'
// HINT: JS has inbuilt array.sort() which works on string array and sorts lexicographically

function Q1(str){
    return str.split("").sort().join("");
}

// console.log(Q1('webmaster'))

// Q2. WAP a function that accepts a string as a parameter and counts the number of vowels within the string

function Q2(str){
    let vowelCount = 0;
    const vowels = 'aeiou'
    for(let s of str){
        if(vowels.indexOf(s) != -1) vowelCount++
    }
    return vowelCount
}

// console.log(Q2('apple'))


// $$ Q3. WAP a function to convert an amount to coins(denomination)
// example: rs 46 => 20, 10, 10, 5, 1
// HINT: available coin denomination - 20, 10, 5, 2, 1

function Q3(amount){
    const denominations = [20, 10, 5, 2, 1]
    let coins = []
    for(let i=0; i<denominations.length; i++){
        let denomicationCount = Math.floor(amount / denominations[i])
        for(let j = 0; j<denomicationCount; j++){
            coins.push(denominations[i])
        }
        amount %= denominations[i]
    }
    return coins
}

// console.log(Q3(24))


// Q4. WAP a function to extract unique characters from a string

function Q4(str){
    let uniqueChars = []
    for(let ch of str){
        if(uniqueChars.indexOf(ch) == -1) uniqueChars.push(ch)
    }
    return uniqueChars
}

// console.log(Q4('aaabbc'))

// Q5. WAP a function to find the first not repeated character
// example: 'abacddbec' => 'e'

function Q5(str){
    for(let i=0; i<str.length; i++){
        let firstOccuranceIndex = str.indexOf(str[i])
        let nextOccuranceIndex = str.indexOf(str[i], firstOccuranceIndex+1)
        if(nextOccuranceIndex == -1) return str[i]
    }
    return ''
}
console.log(Q5('abacddbec'))


