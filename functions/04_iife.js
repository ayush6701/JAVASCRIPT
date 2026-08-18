// Immediately Invoked Function Expressions.


// named IIFE
(function iife (){
    let username = "Ayush"
    console.log(`DB connected`)
})();

// arrow function in an iife.

// simple IIFE
( (name) => {
    console.log(`Hello, ${name}`)
} )("Ayush");

// adding two numbers in an iife with arrow function.
((a,b) =>{
    console.log(a+b)
})(10,90)