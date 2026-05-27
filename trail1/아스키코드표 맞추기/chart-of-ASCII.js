const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []
for (let i of input) {
    answer.push(String.fromCharCode(i))
}

console.log(answer.join(' '))