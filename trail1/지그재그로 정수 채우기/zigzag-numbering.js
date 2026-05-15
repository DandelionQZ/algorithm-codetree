const fs = require('fs')
const [N, M] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = Array.from({length: N}, () => Array(M).fill(0))

let n = 0
for (let j = 0; j<M; j++) {
    if (j%2 === 0) {
        for (let i = 0; i<N; i++) {
            arr[i][j] = n++
        }
    } else {
        for (let i = N-1; i>=0; i--) {
            arr[i][j] = n++
        }
    }
}

for (let r of arr) {
    console.log(r.join(' '))
}