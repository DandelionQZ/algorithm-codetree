const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const answer = []
for (let i of input) {
    answer.push(i.toUpperCase())
}

console.log(answer.join('\n'))