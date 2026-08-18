// "this" in js.

const user = {
    username: "Ayush",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to the website.`);
        console.log(this);
    }
}
// user.welcomeMessage("Ayush")
// user.username = "not ayush"
// user.welcomeMessage()

// console.log(this);

// function one (){
//     const username = "Ayush"
//     console.log(this.username)
// }
// one()

// const two = function(){
//     const username = "Ayush"
//     console.log(this.username);
// }
// two()

// arrow function 

const arrow = () => {
    let username = "Ayush"
    console.log(username)
}
// arrow()

// explicit return in arrow fucntion 

const addTwo = (num1,num2) => {
    return num1 + num2
}
// console.log(addTwo(12,12));

// implicit return in arrow function 

// const addTwoNums = (num1,num2) => num1 + num2 

// const addTwoNums = (num1,num2) => (num1 + num2)  //wraped in ()
const addTwoNums = (num1,num2) => ({username : "Ayush"})

console.log(addTwoNums(12,12));