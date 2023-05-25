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


//stack(primative type) in stack make copy----//heap(non-primitive && refernce type) in heap direct point to orginal value 


//stack example

let myMail = "sagar@email.com"

let myMail2 = myMail

console.log(myMail)
console.log(myMail2)

myMail2="purohit@gmail.com"

console.log(myMail)//will not change because in stack it gives copy of orginal value
console.log(myMail2)



//Heap example

let myUser ={
    name:"sagar",
    email:"sagar@email.com"
}

let mySecondUser = myUser

console.log(myUser.email)
console.log(mySecondUser.email)

mySecondUser.email="purohit@email.com"

console.log(myUser.email);// will change because it stored in heap and it points to direct orginal value 
console.log(mySecondUser.email);