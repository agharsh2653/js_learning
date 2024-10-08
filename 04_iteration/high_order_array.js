// for of

//[{}, {} , {}]

const arr= [1,2,3,4,5]

for(const num of arr){
    //console.log(num);
}

let greeting = "hello world"
for(const str of greeting){
    //console.log(str)
}

//Map
const map =new Map()
map.set('IN', 'India')
map.set('US','United State')
map.set('Fr', 'France')
map.set('IN', 'India')

//console.log(map)

for (const [key, value] of map) {
    console.log(key+':-'+value)
}

const myObject = {
    game1:'NFS',
    GAME2:'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key+':-'+value)
// }
