//primative datatypes
//string,number,boolean,symbol,undefined,null,bigInt

const str = "sagar"
const numbr= 1234
const isUserLoggedIn = false

let userId = Symbol(1234)// symbol is used for uniqness 
let sameUserId = Symbol(1234)

console.log(userId === sameUserId)

let userPhoneNumber;

console.log(userPhoneNumber)//undefined

let tempValue = null
let bigNumber= 3232324242424242424242n

//nonprimative tyoe or refrance type

//function,array,object

const sumOfTwo = function (num1,num2){
            return num1 + num2
}

console.log(sumOfTwo(10,1))

const listOfMovie =["spiderman","batman","superman","marvel","dc"]
console.log(listOfMovie)

const studentObj = {
    stuName:"sagar",
    stuNo:123
}

console.log(studentObj)

