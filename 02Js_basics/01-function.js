
function sayMyName() {
  console.log("D");
  console.log("I");
  console.log("P");
  console.log("A");
  console.log("C");

}
// sayMyName()


function addTwoNumbers(number1, number2) {

  console.log(number1 + number2);

}
addTwoNumbers(5, "6")



function addTwoNumbers(number1, number2) {

  // let result = number1 + number2
  // return result 

  return number1 + number2

}

const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);




function loginUserMessage(username = "Uesre Not") {
  if (!username) {
    console.log("please enter a username");
    return
  }
  return `${username} Just Logged In `
}
// console.log(loginUserMessage("Dipak"));
console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1) {
  return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000));

const uesr = {
  username: "Dipak",
  price: 199
}
function handleObject(anyObject) {
  // console.log(`Usernmae is ${anyObject.username} and Price is ${anyObject.price}`)

}

// handleObject(uesr)
handleObject({
  username: "sam ",
  price: 399
})

const myNewArray = [200, 300, 400,]

function returnSecondValue(getArray) {
  return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 300, 400]))
