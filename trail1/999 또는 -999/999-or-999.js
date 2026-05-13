const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let max = Number.MIN_SAFE_INTEGER
let min = Number.MAX_SAFE_INTEGER

for (let i of input) {
    if (i === 999 || i === -999) {
        break
    }
    if (i > max) {
        max = i
    }
    if (i < min) {
        min = i
    }
}

console.log(max +' '+ min)