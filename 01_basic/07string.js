const str1= "sagar"
const str2= "purohit"

console.log(str1+" "+str2);

console.log(`hi my name is ${str1} and my family name is ${str2.toUpperCase()}`);


//diffrent way to defined or declare string 

let myName = new String("sagarpurohitdotcom")
console.log(typeof myName);

console.log(myName.length);
console.log(myName.charAt(2));
console.log(myName.indexOf("d"));
console.log(myName.concat(" isnewdomain"));


let fruit = "orange"

console.log(fruit.replace("orange","apple"));

let owner = "owner of meta is sagar "

console.log(owner.replace(/SAGAR/i, "MARK"));//due to case sensetive nature of replace we can use reg exp for replacing string 

console.log(owner.substring(0,4))//first value inclusive last valu always exclusive in range

const sliceExample = "hello@gmail.com"
console.log(sliceExample.slice(-5))//main diffrance between substing and slice it accept negative value

const userName = "sagar_purohit_909090_gamer"

console.log(userName.split("_"));//split create array from input you gave on


const spaceRemover= "    sagar111     "

console.log(spaceRemover.trim());//it removes whitespace from string

const includeExample= "sagar111purohit"
console.log(includeExample.includes("111"));//it checks whether given string is available on variable or not




