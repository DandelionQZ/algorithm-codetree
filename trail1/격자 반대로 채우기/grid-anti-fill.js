const fs = require("fs")
const N = Number(fs.readFileSync(0).toString().trim())

const arr = Array.from({length: N}, () => Array(N).fill(0))

let n = 1
for (let j = N-1; j>=0; j--) {
    if ((j-N-1)%2 === 0) {
        for (let i = N-1; i>=0; i--) {
            arr[i][j] = n++
        }
    } else {
        for (let i = 0; i<N; i++) {
            arr[i][j] = n++
        }
    }
}

for (let r of arr) {
    console.log(r.join(' '))
}