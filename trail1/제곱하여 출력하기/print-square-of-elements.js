const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")
let lineIdx = 0

const N = input[lineIdx++]
const nums = input[lineIdx++].split(" ").map(Number)

for (let i = 0; i<N; i++) {
    nums[i] *= nums[i]
}

console.log(nums.join(' '))