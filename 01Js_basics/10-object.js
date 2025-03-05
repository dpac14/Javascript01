


// Objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "dpak",
    [mySym]: "mykey1",
    age: 22,
    location: "Nagpur",
    email: "dpakchute11@gmail.com",
    isLoggedIn: "false",
}
console.log(JsUser.email);
// console.log(JsUser["isLoggedIn"]);
// console.log(JsUser["location"]);

// console.log(JsUser[mySym]);

//  JsUser.email = "dipakchute@googel.com"
//  console.log(JsUser);
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


 


