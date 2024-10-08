const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`)
}


let programming = ["js", "rb", "cpp","swift"]
for(const key in programming){
    console.log(`${key} ${programming[key]}`)
}

//Map
const map =new Map()
map.set('IN', 'India')
map.set('US','United State')
map.set('Fr', 'France')
map.set('IN', 'India')

//console.log(map)

// for (const [key, value] in map) {
//     console.log(key+':-'+value)
// }
// in the map for in loop is not working