const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = input[lineIdx++]
const nums = input[lineIdx++].split(' ').map(Number)

const arr = Array(9).fill(0)
for (let n of nums) {
    arr[n-1]++
}

console.log(arr.join('\n'))