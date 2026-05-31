const fs = require('fs')
let [A, B] = fs.readFileSync(0).toString().trim().split(' ')

let ab = A + B
let ba = B + A

console.log(Number(ab) + Number(ba))