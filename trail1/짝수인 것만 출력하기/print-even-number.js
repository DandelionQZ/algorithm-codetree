const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")
let lineIdx = 0

const N = input[lineIdx++]
const nums = input[lineIdx++].split(" ").map(Number)

const answer = []
for (let i of nums) {
    if (i%2 === 0) {
        answer.push(i)
    }
}

console.log(answer.join(" "))