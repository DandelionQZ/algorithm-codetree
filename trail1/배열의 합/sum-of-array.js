const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = 4
const arr2d = []

const answer = []
for (let i = 0; i<N; i++) {
    let sum = 0
    arr2d.push(input[lineIdx++].split(' ').map(Number))
    for (let j = 0; j<N; j++) {
        sum += arr2d[i][j]
    }
    answer.push(sum)
}

console.log(answer.join('\n'))
