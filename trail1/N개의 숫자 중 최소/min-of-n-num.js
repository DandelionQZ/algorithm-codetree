const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const arr = input[lineIdx++].split(' ').map(Number)

let min_cnt = 1
let min = Number.MAX_SAFE_INTEGER

for (let i of arr) {
    if (i < min) {
        min = i
        min_cnt = 1
    } else if (i === min) {
        min_cnt++
    }
}

console.log(min + ' ' + min_cnt)