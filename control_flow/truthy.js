// 

const userEmail = "ayush20lv@gmail.com"

if (userEmail) {
    console.log("got the email");
} else {
    console.log("no email");
}

// falsy values : -
// false, 0, -0, BigInt 0n, "", Null, undefined, NaN

// truthy values: - 
// "0", "false", "_", [], {}, fucntion(){}

const emptyArrey = []

if (emptyArrey) {
    console.log("got the email");
} else {
    console.log("no email");
}

if (emptyArrey.length === 0) {
    console.log("Arrey is empty");
}

// similarly with object

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")