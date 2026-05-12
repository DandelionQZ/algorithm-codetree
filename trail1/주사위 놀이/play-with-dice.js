const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = Array(6).fill(0)

for (let i of input) {
    arr[i-1]++
}

let answer = []
for (let i = 0; i<6; i++) {
    answer.push(i+1 + ' - ' + arr[i])
}

console.log(answer.join('\n'))