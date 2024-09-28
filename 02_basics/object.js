//singleton
Object.create

const mySyn = Symbol("key1")
//Object literals
const JsUser = {
    "full name" :"Harsh Kumar Agrawal",
    name:"Harsh",
    age:21,
    [mySyn]: "myKey1",
    location:"Jaipur",
    email:"agrawalharsh@gmail.com",
    isLoggedIN: true,
    lastLoginDay: ["Monday","Saturday"]
}

/*
console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySyn])
*/

JsUser.email = "agharsh53@chatgpt.com";
//Object.freeze(JsUser)
JsUser.age = 20

//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ,${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())