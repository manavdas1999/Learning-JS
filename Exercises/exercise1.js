/*
Question 1:
Write a JS program to check two numbers and return true if one of the number is 100 or if the sum of the numbers is 100.
*/
function q1 (num1, num2){
    return num1===100 || num2===100 || num1+num2===100;
}
// console.log(q1(67,900))


/*
Question 2:
Write a JS program to get the extension of a filename.
*/
function q2 (filename){
    // index of (.)
    const indexOfDot = filename.lastIndexOf(".");
    return indexOfDot == -1 ? "" : filename.slice(indexOfDot);
}
// console.log(q2("abc.txt"))
// console.log(q2("abc.config.txt"))
// console.log(q2("abctxt"))


/*
Question 3: $$
Write a JS program to replace every character in a given string with the character following it in the alphabet.
**HINT: 
String.fromCharCode(utf-16 code) => ""
.charCodeAt(index) => utf-16 code
Strings are immutable, so convert into array
*/
function q3 (str){
    let strArr = str.split("");
    for(let i=0; i<strArr.length; i++){
        strArr[i] = (strArr[i] == "z") ? "a" : String.fromCharCode(str.charCodeAt(i) + 1);
    }
    return strArr.join("");
}
// console.log(q3("apple"))
// console.log(q3("zebra"))


/*
Question 4: #TODO
Write a JS program to get the current date.
Expected Output: dd-mm-yyyy or dd/mm/yyyy
*/
function getCurrentDate(){
    const date = new Date();
    return  `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}
console.log(getCurrentDate())

/*
Question 5: #TODO
Write a JS program to create a new string adding "New!" in front of a given string.
If the given string begins with "New!" already then return the original string.
*/
function q5(str){
    return str.startsWith("New!") ? "" : "New!" + str;
}
console.log(q5("heelo"))
console.log(q5("New! heelo"))