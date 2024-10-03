const userEmail ="agharsh@gmail.com" //truthy
//const userEmail ="" //falsey
if(userEmail){
    console.log("Got user email")
} else{
    console.log("Don't have user email");
}

/*
falsy values: 
false, 0, -0, BigInt 0n, null, "", undefined, NaN

truthy values
true, "0", "false", " ", [], {}, function(){}
*/

// if(userEmail.length===0){
//     console.log("Array is empty");
    
// }

const emptyObj = {}
if(Object.keys(emptyObj).length ===0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined

let value;
//value= 5??10
//value = null ?? 10
//value = undefined ?? 15
value = null ?? 10 ??20
console.log(value)

//Ternary Operator 
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater than 80")