const fs = require('fs')
let [pp, p] = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const answer = []
answer[0] = pp
answer[1] = p

for (let i = 2; i<10; i++) {
    let temp = pp + p
    answer.push(temp%10)
    pp = p
    p = temp
}

console.log(answer.join(" "))