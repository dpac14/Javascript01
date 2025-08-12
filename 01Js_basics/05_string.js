const name="dipk"
const repoCount = 50

// console.log(name+repoCount+" Value");
// console.log(`Heloow my name is ${name }  and my repocount is ${repoCount}`);

const gameName = new String('hitesh')
// console.log( gameName)
// console.log( gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf(`t`));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherSring = gameName.slice(-5, 4)
console.log(anotherSring);


// const newStringOne="  dipak   "

// console.log(newStringOne);
// console.log(newStringOne.trim());


const url ="https://dipak.com/dipak20%chute"
console.log(url.replace('20%', '-'));

// console.log(url.includes("ritesh"));
// console.log(url.includes("chute"));

console.log(gameName.bold());