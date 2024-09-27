// Dates

let myDate = new Date();
/*
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
*/

//let myCreatedDate = new Date(2024,9,17);
//let myCreatedDate = new Date(2024,9,17,9,30);
//let myCreatedDate = new Date("2024-10-17 9:30:17");

let myCreatedDate = new Date("10-17-2003 9:30:17");
//console.log(myCreatedDate.toDateString())
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
/*
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))
*/

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())
console.log(newDate.getMinutes())

newDate.toLocaleString('defalt',{
    weekday: 'long'
})