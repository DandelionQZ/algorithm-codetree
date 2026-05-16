const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const [N, M] = input[lineIdx++].split(' ').map(Number)
const arr = Array.from({length: N}, () => Array(N).fill(0))

const coins = []
for (let i = 0; i<M; i++) {
    coins[i] = input[lineIdx++].split(' ').map(Number)
}

for (let [y, x] of coins) {
    arr[y-1][x-1] = 1
}

for (let r of arr) {
    console.log(r.join(' '))
}