//if
//const isUserLoggedIn = true
if(2==="2"){
    console.log("Yes you can ")
}else{
    //console.log("numeric is not equal to string")
}
// >,<, >=, <=, ==, ===, !=, !==

const temperature=41
if(temperature==50){
    console.log("Temperature is equal to 50")
}else{
    //console.log("Temperature is less then 50")
}

// const score = 200
// if(score>100){
//     let power = "fly"
//     console.log("use power:",power)
// }

//console.log("User power: ",power)

const balance = 1000
//if(balance>600) console.log("greater"),console.log("bigger");

if(balance<500){
    console.log("Less than 500")
}else if(balance<750){
    console.log("Less than 750")
}else if(balance<900){
    console.log("Less than 900")
}else if(balance<1200){
    console.log("Less than 1200")
}else{
    console.log("Less than 1500")
}

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(UserLoggedIn && debitCard && 2==8){
    console.log("Allow to buy course");
}
   
if(loggedInFromGoogle || loggedInFromEmail){
    console.log('User logged in')
}