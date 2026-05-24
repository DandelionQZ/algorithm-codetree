const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

let str = A
let idx = Number.MIN_SAFE_INTEGER
while (idx !== -1) {
    idx = str.indexOf(B)
    if (idx === -1) break;
    let temp = str.slice(0, idx) + str.slice(idx+B.length)
    str = temp
}
console.log(str)