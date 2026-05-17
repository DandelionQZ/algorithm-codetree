const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const [N, M] = input[lineIdx++].split(' ').map(Number)

const dots = []
for (let d = 0; d<M; d++) {
    dots.push(input[lineIdx++].split(' ').map(Number))
}

const arr = Array.from({length: N}, () => Array(N).fill(0))
for (let [y, x] of dots) {
    arr[y-1][x-1] = y*x
}

for (let r of arr) {
    console.log(r.join(' '))
}