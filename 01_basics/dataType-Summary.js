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