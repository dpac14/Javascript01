// Primitive 
//  Datatype : String, Symbol, Number, Null, Boolearn, BigInt, Undefined, 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId);

const bigNumber = 99990726458930n

//Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["shatiman", "naagraj", "doga"];
let myObj = {
    name: "dipak",
    age: 21,
}

const myFunction = function () {
    console.log("hellow world");

}
// console.log(typeof myFunction);



//**********************************************************//

// Stack (Primitive)  Heap (Non-Primitive)

let myYoutubename = "dpakkk"


let anothername = myYoutubename

anothername = "chai or code"
// console.log(myYoutubename);
// console.log(anothername);



let userOne = {
    username: "Nikhil",
    upi: "nikhil@ypl",
}

let userTow = userOne
let userTree = userTow

userTree.username = "Sahil"
userTree.upi = "sahil@oxixi"
// console.log(userTree.username);
// console.log(userTree.upi);
console.log(userOne); 
