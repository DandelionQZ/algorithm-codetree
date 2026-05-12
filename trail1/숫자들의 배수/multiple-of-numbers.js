const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim())

let cnt = 0
const answer = []

let num = 0
while (cnt < 2) {
    num += input
    answer.push(num)
    if (num%5 === 0) {
        cnt++
    }
}

console.log(answer.join(" "))