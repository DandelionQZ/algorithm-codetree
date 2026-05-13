const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const arr = input[lineIdx++].split(' ').map(Number)

const map = new Map()
for (let i of arr) {
    map.set(i, (map.get(i) || 0) + 1)
}

let min = -1
for (let [key, value] of map) {
    if (value === 1 && key > min) {
        min = key
    }
}

console.log(min)