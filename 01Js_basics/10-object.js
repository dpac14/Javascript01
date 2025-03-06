

// Objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Dpak",
    "full name" : "Dipak Chute",
    [mySym]: "mykey1",
    age: 22,
    location: "Nagpur",
    email: "dpakchute11@gmail.com",
    isLoggedIn: "false",
}
// console.log(JsUser.email);
// console.log(JsUser ["email"]);
// console.log(JsUser ["full name"]);
// console.log(JsUser [mySym]);

 JsUser.email = "dipakchute@googel.com"
//  console.log(JsUser);
//  console.log(JsUser.email);
 
// //  Object.freeze(JsUser)
//  JsUser.email ="dipak@chatgpt"

 JsUser.greeting= function(){
    console.log("Hellow Javascript User");
 } 

JsUser.greetingTwo= function(){
    console.log(`Hellow JS User, ${this.name}`);
 }
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


 


