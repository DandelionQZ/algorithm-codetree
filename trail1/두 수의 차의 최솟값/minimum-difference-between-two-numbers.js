const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const arr = input[lineIdx++].split(' ').map(Number)

let min = Number.MAX_SAFE_INTEGER
for (let i = 0; i<N-1; i++) {
    if (arr[i+1] - arr[i] < min) {
        min = arr[i+1] - arr[i]
    }
}

console.log(min)