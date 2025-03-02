// Date 


let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString())
// console.log(myDate.toJSON);


let myCreatedDate = new Date(2025, 0, 1)
// let myCreatedDate = new Date("10-01-2025")
// console.log(myCreatedDate.toDateString());


let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());



newDate.toLocaleDateString('default', {
    weekday: "long"
})
console.log(newDate);
