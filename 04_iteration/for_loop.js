// for
for (let index = 0; index < 5; index++) {
    const element = index;
    //console.log(element)
    if(element==5){
        console.log("5 is the best number")
    }
}

//console.log(element)
//Table 1 to 10
// for (let i = 1; i <=10; i++) {
//     console.log(`Outer loop value ${i}`)
//     for (let j = 1; j <=10; j++) {
//        // console.log(`Inner loop value ${j}and Outer loop value ${i}`)
//        console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

let array = ["flash", "batman", "superman"]
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)   
}
//in the js no exception bound case occurs it say directly undefined

//break and continue
for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log("5 is detected")
        break
    }
    console.log(`Value of i is ${i}`);
}

for (let i = 0; i <= 20; i++) {
    if(i==5){
        console.log("5 is detected")
        continue
    }
    console.log(`Value of i is ${i}`);
}