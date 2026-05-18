const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const arr = []
for (let i = 0; i<N; i++) {
    arr.push(input[lineIdx++])
}

let cnt = 0
for (let r of arr) {
    cnt += r.length
}

let cntA = 0
for (let r of arr) {
    if (r[0] === 'a') {
        cntA++
    }
}

console.log(cnt + ' ' + cntA)