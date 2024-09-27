// array

    const myArr = [0,1,2,3,4,5];
    const myHeros = ["Saktiman","Nagraj","Hatim"]

    const myArr2 = new Array(1,2,3,4);
    console.log(myArr[1])

// Array Methods
    /*
    myArr.push(6);
    myArr.push(7);
    myArr.pop()
    console.log(myArr.length)
    

    //myArr.unshift(9)
    myArr.shift()
    console.log(myArr)
    */

    //console.log(myArr.includes(8))
    //console.log(myArr.indexOf(5))

    const newArr = myArr.join()
    /*
    console.log(myArr)
    console.log(newArr)
    console.log(typeof(newArr))
    */
// slice it only fetch the value from 1 less index , 
//splice : it remove the value where we fetch the value in the arr and cover all index
    console.log("A ",myArr)
    const myn1 = myArr.slice(1,3)

    console.log(myn1)
    console.log("B ",myArr)

    const myn2 = myArr.splice(1,3)
    console.log(myn2)
    console.log("C ",myArr)