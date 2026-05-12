const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const answer = []
for (let i of input) {
    if (i === 0) break;
    if (i%2 === 1) {
        answer.push(i+3)
    } else {
        answer.push(i/2)
    }
}

console.log(answer.join(" "))