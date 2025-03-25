// For Of



// ["", "", ""]
// [{}, {}, {}]

const arr =[ 1, 2, 3, 4, 5, 6]
for (const num of arr) {
    // console.log( num);
    
}

const greeting = "Hello World"
for (const greet of greeting) {
    // console.log(`Echa char is ${greet}`);
    
}

// Maps
 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "America")
 map.set('Fr', "France")

//  console.log(map);

 for (const [key, value] of map) {
    console.log(key, ':-', value) ;
 }
  