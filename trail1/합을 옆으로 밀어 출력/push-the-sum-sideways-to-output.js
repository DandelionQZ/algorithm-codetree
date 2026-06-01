const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number)
let lineIdx = 0

const N = input[lineIdx++]
let sum = 0
for (let i=0; i<N; i++) {
    sum += input[lineIdx++]
}

let answer = sum.toString().slice(1) + sum.toString().slice(0, 1)
console.log(answer)
