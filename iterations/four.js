const myObject = {
    'cpp': "C++",
    'js': "javascript",
    'py': "python",
    'rb': "ruby",
    'swift': "swift by apple"
}

for (const key in myObject) {
    
    // console.log(`${key} is for ${myObject[key]}`);
    // console.log(key, 'is for', myObject[key]);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const [key,value] in map) {
//     console.log(key, ':', value);
// }                                        ----no map in forin loop....