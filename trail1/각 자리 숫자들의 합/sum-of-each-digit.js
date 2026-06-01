const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let answer = 0
for (let i of input) {
    answer += Number(i)
}

console.log(answer)