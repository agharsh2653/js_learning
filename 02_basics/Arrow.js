const user ={
    username: "Hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "harsh"
// user.welcomeMessage()

//console.log(this) //{}

function chai(){
    let username  = "harsh"
    console.log(this.username);
}
chai() // undefine
//In the function we could not use this operator

const chai2 = function(){
    let userName = "harsh"
    console.log(this.userName)
}
chai2()

const chai3 = ()=> {
    let userName = "harsh"
    console.log(this.userName)
}
chai3()

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

//emplicit method
//const addTwo = (num1, num2) =>  num1+num2

const addTwo = (num1, num2) =>  (num1+num2)
console.log(addTwo(3,5))

const addTwo2 = (num1, num2) =>  ({username: "rakesh"})
console.log(addTwo2(3,5))