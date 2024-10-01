//var c =300
let a = 44 // Global scope
if(true){
    let a = 8;
    const b = 89
    //c = 30
    console.log(`Inner : ${a} <-- Block Scope`)
}

//console.log(a)
//console.log(b)
//console.log(c) //30 thats by we are not use var in js

function one(){
    const username ="hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}

one()

if(true){
    const username = "hitesh"
    if(username == "hitesh"){
        const website = " youtube"
        console.log(username+website);
    }
    //console.log(website)
}

//console.log(username)

//  ++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++
//Hosting concept
console.log(addone(5))
//Function
function addone(num){
    return num+1;
}

//addTwo(6) hosting concept
//Expresion
const addTwo = function(num){
    return num +2
}