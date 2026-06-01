const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

let answer = 0
for (let i of input) {
    let temp = i.replace(/[a-zA-Z]/g, '')
    answer += Number(temp)
}

console.log(answer)