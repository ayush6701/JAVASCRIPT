function myName() {
    console.log("A");
    console.log("Y");
    console.log("U");
    console.log("S");
    console.log("H");
}
// myName()

function addTwoNumbers(a,b){
    console.log(a+b);
}
// addTwoNumbers(5,5)

function addTwoNums (x,y) {
    let add = x+y;
    console.log("result:- ",add);
}
// addTwoNums(10,10)

function addTwo(c,d){
    return c+d
}
let result = addTwo(15,15)
// console.log("result:- ",result);


function userLoginMassege (username = "sam"){
    // if(username === undefined){
    //     console.log("Enter Your Username");
    //     return
    // }
    return `${username} just logged in`
}
// console.log(userLoginMassege("ayush"));

function calculateCartPrice (val1,val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,400,800,1600));

const user = {
    username: "Ayush",
    price: 99
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 49
})

const myNewArray = [200, 400, 800, 1600];

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,800,1600]));