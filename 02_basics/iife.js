//Immediately Invoked Function Expressiond (IIFE)

//Named iife
(function chai(){
    console.log("DB Connected");
})();
// we use in this ; to terminate or end the invoked function
// global scope ke polution(variable) se problem hoti he to ueko hatane ke liye iife ka use kare

//Unnamed iife
( (name)=>{
    console.log(`DB Connected Two ${name}`);
})("Hitesh")