function sayname(){
    console.log('H')
    console.log('A')
    console.log('R')
    console.log('S')
    console.log('H')
}

//sayname()

function addTwoNum(num1,num2){
   
    return num1+num2;
}

//console.log(addTwoNum(5,70));

function loginUserMessage(username = "hitesh"){
    if(!username){
        console.log('Please enter the username')
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("harsh"))

function calculateCartPrice(var1,var2,...num1){
    //rest operator --> ...num1
    return num1;
}
console.log(calculateCartPrice(100,245,567,909,719));

const user ={
    Username: "agharsh53",
    price: 999

}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.Username} and price is ${anyObject.price}`)
}

//handleObject(user);

handleObject({
    Username: "hitesh",
    price: 890
})

const myNewArray = [200,300,400,500];
function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray))