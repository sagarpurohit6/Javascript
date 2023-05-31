const numberList = [1,2,3,4,5,6,7,8];

console.log(numberList[0]);//array starts from 0

const newNumberList = new Array(10,9,8,7,6,5,4,3,2,1);
console.log(newNumberList);

console.log(numberList.includes(9))//.includes method check whether given value is include in array or not

console.log(newNumberList.join())//.join method conver array into string

const numberOf =[11,12,13,14,15];
numberOf.push(16);//will add nnumber from last 
console.log(numberOf);
numberOf.pop();//will remove number from last
console.log(numberOf);

numberOf.unshift(10)//this will add from start of array but this is not recommended because it shift all previous value 
console.log(numberOf);
numberOf.shift()// remove value from start
console.log(numberOf);

const sliceArray = new Array(1,2,3,4,5,6,7,8);


console.log("a " ,sliceArray)

console.log("b", sliceArray.slice(1,4));//it gives araay from our defined range but last range number is excluded

console.log("c after using slice", sliceArray)

console.log("d", sliceArray.splice(1,4))//it removes value from array in defined range and last range is also included

console.log("e after using splice", sliceArray)