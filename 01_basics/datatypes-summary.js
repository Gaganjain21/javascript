// Primitive

// 7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggesIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);
const bigNumber = 214687424764894624;
console.log(bigNumber);


// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"] 
let myObj = {
    name: "Gagan",
    age: 29,
}

const myFunction = function(){
console.log("Hello World")
}
console.log(typeof bigNumber);
console.log(typeof scoreValue);


// Type of value and their result

// undefined = undefined
// Null = Object
// Boolean = Boolean
// Number = Number
// String = String
// Object(Native and does not implement[[call]]) = object
// Object (native or host and does not implement [[call]]) = function
// object(host and does not implement[[call]]) = Implementation-defined except may not "undefined", "Boolean", "Number", or "String".


// -----------------------------------------------------------------------------------------------

// Stack (Primitive),Heap (Non Primitie)

let myYTname = "Gaganyoutube"

let anotherName = myYTname
anotherName = "the_vestir"

console.log(myYTname);
console.log(anotherName);

let userOne = {
    email: "one@gmail.com",
    upi: "one@ybl"
}

let userTwo = userOne

userTwo.upi = "123@ybl"

console.log(userOne.upi);
console.log(userTwo.upi);

