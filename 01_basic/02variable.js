const userId= 1234;//number type
let userName= "sagar purohit";//string
const userEmail ="sagar@goggle.com";//string
var userPassword ="1234rp";//string
let userState;//undefined
let isUserSignIn= true;//boolean

/*  prefer to not  use var due to its block scope and functional scope issue */
// userId = 3456 will not change due to const
userName= "sagarpurohit33"


console.log(`your user id is${userId}, 
your username is${userName},
your user email is${userEmail},
you are from ${userState} 
you signin staus is ${isUserSignIn}`)

console.table([userId,userName,userEmail,userState,isUserSignIn])
