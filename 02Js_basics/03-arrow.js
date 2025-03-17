

const user = {
    usernmae: "Dipak",
    pricec: 999,
    welcomeMassage: function () {
        // console.log(`${this.usernmae} , Welcome to website`);
        // console.log(this);



    }
}
user.welcomeMassage()
user.usernmae = "Sam"
user.welcomeMassage()
// console.log(this);


function chai (){
        let usernmae = "Dipak"
        console.log(this.usernmae);
    }
    // chai();


// const chai = function(){
//     let usernmae = "dipak"
//     console.log(this.usernmae);

// }
 
// const chai = () => {
//     let usernmae = "dipak"
//     console.log(this.usernmae);

// }

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2             // (Basic)
// }
// console.log(addTwo(3, 4));

// if use () do not type `retrun` if use {} then type `retrun`


// const addTwo = (num1, num2 ) => (num1 + num2) 

const addTwo = (num1, num2) => ({ usernmae: "Dipak" })
console.log(addTwo(3, 4))


// const myArray =[ 2, 4, 5, 6],
// myArray.forEach()