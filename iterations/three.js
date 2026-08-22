// for of loop 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const basket = ["apple", "mango", "banana", "orange", "pineapple"]

for (const fruits of basket) {
    // console.log(fruits);
}

const greet = "Hello World!"

for (const charachters of greet) {
    // console.log(charachters);
}

// const iterable = [10, 20, 30];

// for (let value of iterable) {
//   value = value+1;
//   console.log(value);
// }

// map

const map = new Map()

map.set(1, "a")
map.set(2, "b")
map.set(3, "c")
map.set(4, "d")
map.set(5, "e")

console.log(map.get(1));

map.set(1, "apple")

// console.log(map.get(1));

map.delete(5)

console.log(map.size);

const countries = new Map()

map.set('IN', "INDIA")
map.set('USA', "UNITED STATES")
map.set('JP', "JAPAN")
map.set('UK', "UNITED KINGDOM")
map.set('GER', "GERMANY")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':',value);
}

// const myObject = {
//     1: 'Arkham Asylum',
//     2: 'Arkham City',
//     3: 'Arkham Origins',
//     4: 'Arkham Knight'
// }
// // console.log(myObject);

// for (const [key, value] of myObject) {
//     console.log(key,':',value);
// }                                       ----objects are not iteratable..