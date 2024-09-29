const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname: "harsh",
        lastname: "agrawal"
    }
}

//console.log(regularUser.fullname.userfullname)


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"a", 2:"b"}

//const obj3 = {obj1, obj2} //not right way to join
//const obj3 = Object.assign({},obj1,obj2,obj4)
// assign have two parameter target, source

const obj3 = {...obj1, ...obj2, ...obj4}
//console.log(obj3)

const users = [
    {
        email:"agharsh@gmail.com",
        password:"123456y7"
    },
    {
        email:"agharsh@gmail.com",
        password:"123456y7"
    },
    {
        email:"agharsh@gmail.com",
        password:"123456y7"
    }
]
users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    coursename: "js in hindi",
    project: "999",
    courseInstructor: "hitesh"
}

//course.courseInstructor

const {courseInstructor: instructor}= course

//console.log(courseInstructor)
console.log(instructor)

// {
//     "name": "harsh",
//     "coursename": "js in hinfi",
//     "price": "free"
// }