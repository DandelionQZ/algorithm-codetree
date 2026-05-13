const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const arr = input[lineIdx++].split(' ').map(Number)

let price = 0

for (let i = 0; i<N-1; i++) {
    for (let j = i+1; j<N; j++) {
        if (arr[i] < arr[j] && arr[j] - arr[i] > price) {
            price = arr[j] - arr[i]
        }
    }
}

console.log(price)