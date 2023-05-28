let number =100
let objNumber = new Number(100)//it preciesly way to define number in Javascript

console.log(number);
console.log(objNumber);

console.log(objNumber.toString().length);

let numberValue = 2122.222//it precis the number based on what input you give
console.log(numberValue.toPrecision(4));
console.log(numberValue.toPrecision(6));

let demoNumber = 22202
console.log(demoNumber.toFixed(3));

let mNumber =1000000
console.log(mNumber.toLocaleString("en-IN"));