// Immediately Invoke Function Expressions (IIFE)


// Named iffe
(function chai(){
    console.log(`Wellcome To DB`);
    
}
)();

( (name) =>{
    console.log(`Wellcome To DB ${name} `);
    
})(`Darshan!`)