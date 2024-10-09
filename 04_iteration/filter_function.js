//let coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (val)=>{
//     console.log(val)
//     return val;
// })
// console.log(value)

//forEach function does not return the value

const myNums = [1,2,3,4,5,6,7,8,9,10];
//const newNums = myNums.filter( (num)=> num>5)
// const newNums = myNums.filter( (num)=>{
//     return num>5
// })

// const newNums = []
// myNums.forEach( (num)=> {
//     if(num>5){
//         newNums.push(num)
//     }
// })

// console.log(newNums)

const book =[
    {title: 'Book one',genre:"Friction", publish:1981, edition:2004},
    {title: 'Book two',genre:"Non Friction", publish:1992, edition:2008},
    {title: 'Book three',genre:"History", publish:1999, edition:2007},
    {title: 'Book four',genre:"Non Friction", publish:1989, edition:2005},
    {title: 'Book five',genre:"Science", publish:2009, edition:2014},
    {title: 'Book six',genre:"Fiction", publish:1987, edition:2010},
    {title: 'Book seven',genre:"History", publish:1986, edition:2011},
];

let userBooks = book.filter( (bk)=>bk.genre==="History")

userBooks = book.filter( (bk)=>{
    return bk.genre==="History" && bk.publish<=1995
})

console.log(userBooks)