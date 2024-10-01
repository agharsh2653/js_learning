//var c =300
let a = 44 // Global scope
if(true){
    let a = 8;
    const b = 89
    //c = 30
    console.log(`Inner : ${a} <-- Block Scope`)
}

console.log(a)
//console.log(b)
//console.log(c) //30 thats by we are not use var in js