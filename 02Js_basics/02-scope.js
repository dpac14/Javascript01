//  var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
     console.log("Inner: ", a);

}

 console.log(a);
//  console.log(b);
//  console.log(c);


function one() {
    const username = "Dpac"

    function two() {
        const website = "youtube"
        // console.log(username);

    }
    // console.log(website);

    two()


}
one()

if (true) {
    const username = "dpac"
    if (username === "dpac") {
        const website = " youtube"
        // console.log(username + website); 
        
    }
    // console.log(website);
    
}
// console.log(username);


console.log(addone(5));


function addone(num) {
return num + 1
}

addTwo(5)
function addTwo(num) {
return num + 2
}
