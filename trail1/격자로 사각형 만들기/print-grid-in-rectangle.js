const fs = require('fs')
const N = Number(fs.readFileSync(0).toString().trim())

const arr = Array.from({length: N}, () => Array(N).fill(0))

for (let i = 0; i<N; i++) {
    arr[0][i] = 1
    arr[i][0] = 1
}

console.log(arr[0].join(' '))
for (let i = 1; i<N; i++) {
    for (let j = 1; j<N; j++) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j] + arr[i][j-1]
    }
    console.log(arr[i].join(' '))
}