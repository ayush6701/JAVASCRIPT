// for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element === 5) {
        // console.log("5 detected")
    }
    // console.log(element)
}

for (let outer = 1; outer <= 10; outer++) {

    // console.log(`outer loop value: ${outer}`)
    
    for (let inner = 1; inner <= 10; inner++) {
        
        // console.log(`inner loop value: ${inner} and inner loop ${outer}`)
        // console.log(outer + " * "  + inner +  " = "  + outer*inner);
    }

}

let theGoats = ["bones","rush","mouse","spider","notorious","eagle","triple C","highlight","shogun","dragon"];
// console.log(theGoats.length);
for (let index = 0; index < theGoats.length; index++) {
    const elements = theGoats[index];
    // console.log(elements);
}

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 10) {
//         console.log("Detected 10");
//         break
//     }
//     console.log(`value is: ${index}`);
// }
for (let index = 1; index <= 20; index++) {
    if (index == 10) {
        console.log("Detected 10");
    continue
    }
    console.log(`value is: ${index}`);
}