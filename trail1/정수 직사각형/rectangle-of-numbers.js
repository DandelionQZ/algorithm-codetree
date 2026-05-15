const fs = require('fs')
const [N, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let num = 1
const arr = Array.from({length: N}, () => Array(M).fill(0))

for (let n = 0; n<N; n++) {
    for (let m = 0; m<M; m++) {
        arr[n][m] = num++
    }
}

for (let i of arr) {
    console.log(i.join(' '))
}