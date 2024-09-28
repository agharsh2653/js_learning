const marvel_heros = ['Iron man', 'Thor', 'Spider man'];
const dc_heros = ['Superman', 'Flash','batman'];

//dc_heros.push(marvel_heros);

//console.log(dc_heros);
//console.log(dc_heros[3][0])

//const  new_heros = dc_heros.concat(marvel_heros);
//console.log(new_heros)

//spread
const all_new_heros = [...marvel_heros, ...dc_heros]
//console.log(all_new_heros)

const another_arr = [1,2,3,4,[5,6],7,[6,7,[8,9]]];
//To split complex array in 1d form we use flat function here we give parameters to reduce dimension
const real_arr = another_arr.flat(Infinity);
//console.log(real_arr)

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"))
console.log(Array.from({name: "Harsh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1,score2,score3,score4))


