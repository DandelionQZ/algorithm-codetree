const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0
const [N, M] = input[lineIdx++].split(' ').map(Number)
const arr = input[lineIdx++].split(" ").map(Number)

let cnt = 0
for (let i of arr) {
    if (i === M) {
        cnt++
    }
}

console.log(cnt)