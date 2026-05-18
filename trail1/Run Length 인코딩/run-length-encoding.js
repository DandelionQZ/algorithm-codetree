const fs = require('fs')
const A = fs.readFileSync(0).toString().trim()

let start = 0
let end = 1

let answer = ''
while (end < A.length) {
    if (A[start] === A[end]) {
        end++
    } else {
        answer += A[start]
        answer += (end-start).toString()
        start = end
    }
}
answer += A[start]
answer += (end-start).toString()

console.log(answer.length)
console.log(answer)