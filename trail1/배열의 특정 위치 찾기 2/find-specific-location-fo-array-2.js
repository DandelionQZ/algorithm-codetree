const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let even = 0
let odd = 0

for (let i = 0; i<10; i += 2) {
    odd += input[i]
}
for (let i = 1; i<10; i += 2) {
    even += input[i]
}

console.log(Math.abs(even - odd))