const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const arr = input[lineIdx++].split(' ').map(Number)

const answer = []

let n = N
let idx = 0
while(true) {
    idx = 0
    for (let i = 0; i<n; i++) {
        if (arr[idx] < arr[i]) {
            idx = i
        }
    }
    answer.push(idx+1)
    n = idx
    if (idx === 1) {
        answer.push(1)
        break
    } else if (idx === 0) {
        break
    }
}

console.log(answer.join(" "))