const userEmail = []
 if (userEmail) {
    console.log("Got user email");

 } else{
    console.log("Don't have user email");
    
 }

 // Falsy  Values 
//  false, 0 , -0, BigInt, 0n, "", null, undefined, NaN

//Truthy Values
// "0", 'false', " ", {}, [], function () {}

// if (userEmail.length === 0) {
//    console.log("Array is empty");
// }
 const emtyObj ={}
if (Object.keys(emtyObj).length === 0) {
   console.log("Object is empty");
   
}

// Nullish Coalescing Operator (??): null undefined
 let val1;
//  val1 = 5 ?? 10
//  val1 = null ?? 10
//  val1 = undefined ?? 16
//  val1 = null ?? 10 ?? 20

//  console.log(val1);


//  Terniary Operator
// condition ? true : false

const iceTeaPirce = 100 
iceTeaPirce >= 80 ? console.log("Less Than 80") : console.log("more than 80 ");


