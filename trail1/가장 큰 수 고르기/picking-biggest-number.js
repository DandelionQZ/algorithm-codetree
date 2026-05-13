const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let max = Number.MIN_SAFE_INTEGER
for (let i of input) {
    if (i > max) {
        max = i
    }
}

console.log(max)