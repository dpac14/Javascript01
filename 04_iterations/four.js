// For In

const myObject ={
    js: 'Javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'

}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
      
}
const programming = [ "js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

// const map = new Map()
//  map.set('IN', "India")
//  map.set('USA', "America")
//  map.set('Fr', "France")

// for (const key in map) {
//     console.log([key]);
// }