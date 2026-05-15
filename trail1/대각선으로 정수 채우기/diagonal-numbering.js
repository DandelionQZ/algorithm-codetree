const fs = require('fs')
const [N, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = Array.from({length: N}, () => Array(M).fill(0))

let n = 1
for (let j = 0; j<M; j++) {
    for (let i = 0; i<=j; i++) {
        if (i >= N) break;
        arr[i][j-i] = n++
    }
}
for (let i = 1; i<N; i++) {
    for (let j = 0; j<M; j++) {
        if (i+j>=N) break;
        arr[i+j][M-1-j] = n++
    }
}

for (let r of arr) {
    console.log(r.join(' '))
}