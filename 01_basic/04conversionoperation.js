let number = undefined

let stringToNumber = Number(number)
console.log(typeof stringToNumber)
console.log(stringToNumber)

//number = "33" => 33 ,stringToNmber is number
//number = "33abc"=>NaN, stringToNumber print NaN 
//number = true => 1 , false=>0 , boolean value 
//number = null => 0
//number = undefined =>NaN
//NOTE NaN typof is also number so wherever NaN comes it will give typeof number

let isUserLoggedIn = undefined;

let boleeanIsUserLoggedIn = Boolean(isUserLoggedIn)
console.log(typeof boleeanIsUserLoggedIn)
console.log(boleeanIsUserLoggedIn)

// 1 => true, 0=> false
// ""=> false
//"sagar"=> true
//null=> false
//undefined => false

let number2 = null

let numberToString = String(number2)
console.log(typeof numberToString)
console.log(numberToString)

// 33 =>"33"


//operation

let string1= "sagar"
let string2= " hello"
let string3 = string1 + string2
console.log(string3);

console.log("1"+1+2)
console.log(1+"1"+1)
console.log(1+5+"6")





