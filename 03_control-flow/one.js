// if 

const isUserloggedin = true
const temperature = 42
// if ( temperature === 40) {
//     console.log("less than 50");

//     } else{ 
//         console.log("temperature is greater than 50");
//     }
// console.log("Execute");

// <, >, <=, =>, ==, !=, ===, !==

// const score = 200 
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power : ${power}`);

// }
//   console.log(`User power : ${power}`);

// const blance = 1000
//  if (blance < 500) {
//     console.log("less than 500");

//  }else if (blance < 750 ) {
//     console.log("less than 750");

//  } else {
//     console.log("less than 1200");
//  }


const userLoggedIn = true
const userDebitcard = true
const loggedFromGoogle = false
const loggedfromEmail = true

if (userLoggedIn && userDebitcard) {
    console.log("Allow to buy course");

}
if (loggedFromGoogle || loggedfromEmail) {
    console.log("User logged In");

}



