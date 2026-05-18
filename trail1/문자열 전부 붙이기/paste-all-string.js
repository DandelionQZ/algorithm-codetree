const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])

const arr = []
for (let i = 0; i<N; i++) {
    arr.push(input[lineIdx++])
}

console.log(arr.join(''))