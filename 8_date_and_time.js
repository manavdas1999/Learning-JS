// NOTE: In JS, Date object represents a single moment in time in a platform independent format. 
// The epoch:(Jan 1, 1970, UTC) the beginning of time in JS. Date object 
// encapsulates an integral number that represents nilliseconds since the midnight of the epoch.

let myDate = new Date() 
console.log(typeof myDate) // object

console.log(myDate) // kind of not understandable
console.log(myDate.toString()) // Returns a string representation of a date. The format of the string depends on the locale. 
// Weekday Name(in short) Month Name(in short) date year time timezone

console.log(myDate.toDateString()) // Weekday Name(in short) Month Name(in short) date year

console.log(myDate.toLocaleString()) // dd/m/yyyy, hr:min:sec am/pm (format depends on locale)


//  custom date instance: Date(year, monthIndex, day)
let myBirthDate = new Date(1999, 7, 2, 18,10);
// let myBirthDate2 = new Date("1999/08/02")
// let myBirthDate2 = new Date("1999-08-02")
let myBirthDate2 = new Date("02-08-1999")

console.log(myBirthDate.toLocaleString())
console.log(myBirthDate2.toLocaleString())

console.log(myBirthDate2.getTime()) //milliseconds passed from the epoch


// current time
let currentTimeStamp = Date.now()
console.log(currentTimeStamp) //milliseconds passed from the epoch

// seconds
console.log(Math.floor(currentTimeStamp/1000))

// minutes
console.log(Math.floor(currentTimeStamp/60000))
// hours
console.log(Math.floor(currentTimeStamp/3600000))


let newDate = new Date();

console.log(newDate.getTime())  // milliseconds passed from the epoch
console.log(newDate.getDay())   // weekday index (0-sunday, 6-saturday)
console.log(newDate.getMonth()) // month index
console.log(newDate.getDate())  // today's date
console.log(newDate.getFullYear()) // year

// more control
let beautyDate = newDate.toLocaleString('default', 
    {
        weekday: "long",
        
    }
)

console.log(beautyDate)



