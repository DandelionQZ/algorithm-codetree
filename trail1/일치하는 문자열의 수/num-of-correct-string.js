const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

let [n, A] = input[lineIdx++].split(' ')
n = Number(n)

let answer = 0
for (let i=0; i<n; i++) {
    let str = input[lineIdx++]
    if (str === A) {
        answer++
    }
}
console.log(answer)