const fs = require('fs')
let [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const arr = Array(10).fill(0)

while (A > 1) {
    let rest = A%B
    arr[rest]++
    A = parseInt(A/B)
}

let sum = 0
for (let i of arr) {
    sum += i*i
}

console.log(sum)