const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const answer = []

let even = 0
let third = 0

for (let i = 1; i<10; i += 2) {
    even += input[i]
}

let cnt = 0
let sum = 0
for (let j = 1; j*3<10; j++) {
    sum += input[j*3-1]
    cnt++
}
third = (sum/cnt).toFixed(1)

answer.push(even)
answer.push(third)

console.log(answer.join(' '))