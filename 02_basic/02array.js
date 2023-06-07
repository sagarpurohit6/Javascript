const arrayOfName = ["shakti","doremon","juniorG"]
const cartonName =["shinchan","pokemon","demonslayer"]

// arrayOfName.push(cartonName)// if you try to concat two array with push method it will give you array into array
// console.log(arrayOfName)

const concatArray= arrayOfName.concat(cartonName)
console.log(concatArray)// it will give concat array but it will be new array so we need to store this and than we can use it

console.log([...arrayOfName,...cartonName])//spread operator also can be used for concating array


const arrayIntoArray =[1,2,3[4,5,6],7,8,9,2[3,4,5]]

const solveArrayIntoArray= arrayIntoArray.flat(Infinity)

console.log(solveArrayIntoArray);


console.log(Array.isArray("sagar"));
console.log(Array.from("sagar"));
console.log(Array.from({name:"sagar"}))//this will give empty array it will not conver object dirctly into array we need to give value from key value


const id1 ="user123"
const id2 ="user456"
const id3= "user789"

console.log(Array.of(id1,id2,id3))
