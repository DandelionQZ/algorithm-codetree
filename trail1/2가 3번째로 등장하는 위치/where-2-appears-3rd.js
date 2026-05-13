const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const nums = input[lineIdx++].split(' ').map(Number)

let cnt = 0
for (let i = 0; i<N; i++) {
    if (nums[i] === 2) {
        cnt++
    }
    if (cnt === 3) {
        console.log(i+1)
        break
    }
}