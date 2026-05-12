const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)
let lineIdx = 0

let pp = input[lineIdx++]
let p = input[lineIdx++]

let temp = 0
let answer = []
answer[0] = pp
answer[1] = p
for (let i = 2; i<10; i++) {
    temp = 2*pp + p
    answer.push(temp)
    pp = p
    p = temp
}

console.log(answer.join(' '))