const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const hor = Array(2).fill(0)
const ver = Array(4).fill(0)
let total = 0

const arr = []
for (let i of input) {
    arr.push(i.split(' ').map(Number))
}

const r = input.length
const c = arr[0].length
const rc = r*c

for (let i = 0; i<r; i++) {
    for (let j = 0; j<c; j++) {
        hor[i] += arr[i][j]
        ver[j] += arr[i][j]
        total += arr[i][j]
    }
}

for (let i = 0; i<hor.length; i++) {
    hor[i] = (hor[i]/c).toFixed(1)
}
for (let i = 0; i<ver.length; i++) {
    ver[i] = (ver[i]/r).toFixed(1)
}
total = (total/rc).toFixed(1)

console.log(hor.join(' ') + '\n' + ver.join(' ') + '\n' + total)