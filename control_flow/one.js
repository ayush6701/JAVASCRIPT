// if

// <, >, <=, >=, ==, !=, ===, !==

if (2 == "2") {
    // console.log("executed");
}

if (2 === "2") {
    // console.log("executed");
}

// else 

const isUserLoggedin = true
const tempreture = 30


if (tempreture >40) {
    console.log("indeed more than 40")
}else{
    console.log("nooo")
}

const bal = 1000

// else if

// if (bal>50) console.log("yes!"), console.log("noo!"); ------bad practice

// if (bal < 500) {
//     console.log("less than 500")
// } else if (bal < 700){
//     console.log("less than 700")
// } else if (bal < 900){
//     console.log("less than 900")
// } else {
//     console.log("more than or equal to 1000")
// }

// checking multiple conditions

const userLoggedin = true
const debitCard = true

if (userLoggedin && debitCard) {
    console.log("eligible")
} else{
    console.log("not eligible");
}

const loggedInFromGoogle = false
const loggedInFromEmail = true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("loggedin from one");
}else {
    console.log("loggedin from none");
}