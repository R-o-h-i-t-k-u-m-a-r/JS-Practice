//for of
let arr = ['hello','my','name','is','rohit']
// for (const val of arr) {
//     console.log(val)
// }
// arr.forEach((val)=>console.log(val))

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map)
// for (const [key,value] of map) {
//     console.log(`${key} : ${value}`);
    
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const key of myObject) {
    console.log(key)
}