const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")

const answer = []
answer.push(input[1])
answer.push(input[4])
answer.push(input[7])

console.log(answer.join(' '))