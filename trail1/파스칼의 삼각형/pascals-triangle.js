const fs = require('fs')
const N = Number(fs.readFileSync(0).toString().trim())

const arr = Array.from({length: N}, () => Array(N).fill(0))
for (let i = 0; i<N; i++) {
    arr[i][0] = 1
}
for (let i = 1; i<N; i++) {
    for (let j = 1; j<i; j++) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    }
    arr[i][i] = 1
}

for (let r of arr) {
    let row = ''
    for (let c of r) {
        if (c === 0) break;
        row += c + ' '
    }
    console.log(row)
}
