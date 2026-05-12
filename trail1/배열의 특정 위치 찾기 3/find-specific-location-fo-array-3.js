const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let idx = 0
for(let i of input) {
    if (input[idx] === 0) {
        break
    }
    idx++
}

let sum = 0
for(let i = idx - 1; i>=idx-3; i--) {
    sum += input[i]
}

console.log(sum)