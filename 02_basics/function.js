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

console.log(addTwoNum(5,70));

function loginUserMessage(username = "hitesh"){
    if(!username){
        console.log('Please enter the username')
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("harsh"))