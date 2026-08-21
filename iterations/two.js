// while loop

let index = 1
while (index <= 20) {
    // console.log(index);
    index++
}

let index2 = 1
while (index2 <=50) {
    if (index2 === 25) {
        console.log("25 detected")
        break
    }
    console.log(index2)
    index2 = index2 + 2
}

let myArray = ['red','yellow','green','black','orange','brown','purple','blue','white','grey'];

let colours = 0
while (colours < myArray.length ) {
    const element = myArray[colours]
    console.log(element);
    colours++
}

// do-while loop 

let score = 1

do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);