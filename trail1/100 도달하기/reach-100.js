const fs = require('fs')
const N = Number(fs.readFileSync(0).toString().trim())

let pp = 1
let p = N

let temp = 0
let answer = []
answer[0] = pp
answer[1] = p
while(temp < 100) {
    temp = pp + p
    answer.push(temp)
    pp = p
    p = temp
}

console.log(answer.join(" "))