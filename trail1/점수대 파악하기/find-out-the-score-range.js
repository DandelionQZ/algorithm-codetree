const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

const arr = Array(10).fill(0)
for (let i of input) {
    if (i === 0) break;
    let score = parseInt(i/10)
    if (score === 0) continue;
    arr[score-1]++
}

const answer = []
for (let i = 9; i>=0; i--) {
    answer.push((i+1)*10 + ' - ' + arr[i])
}

console.log(answer.join('\n'))