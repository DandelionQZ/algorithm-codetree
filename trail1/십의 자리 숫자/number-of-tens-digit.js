const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = Array(9).fill(0)
for (let i = 0; i<input.length; i++) {
    if (input[i] === 0) break;
    arr[parseInt(input[i]/10)-1]++
}

const answer = []
for (let i = 0; i<9; i++) {
    answer.push(i+1 + ' - ' + arr[i])
}

console.log(answer.join('\n'))