/*
Primitive:
7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

*/

const score = 100
const scoreValue = 100

const isLoggedIn =false
const outsideTemp = null //it shows datatype is object because it is predefine 
let userEmail = undefined //or only let username; define

const id = Symbol('123')
const anotherId = Symbol('123')
// symbol automatocally define their different id that we can diferentiate between them

console.log(id==anotherId)

const bigNumber = 3456789023567n
console.log(typeof(bigNumber))


/*
Reference (Non Primitive)
Arrays, Objects, Function

*/
const heros = ["Tony Stark", "Thor", "Captain America", "Hulk"];
let obj = {
    name: "Harsh",
    age: 20
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof(myFunction))

//****************************************************************************************

// Stack(primitive): It will generate the copy of value not change in original data
// Heap(non primitive): It will change in original value of data

let myYoutubechannel = "hiteshChoudhary.com"

let anotherName = myYoutubechannel;
anotherName = "chaiaurcode"

console.log(myYoutubechannel); // hiteshChoudhary.com
console.log(anotherName) // chaiaurcode

let userOne= {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email= "agharsh53@gmail.com"

console.log(userOne.email); // agharsh53@gmail.com
console.log(userTwo.email); // agharsh53@gmail.com