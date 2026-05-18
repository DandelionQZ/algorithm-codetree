const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])

const arr = []
for (let i=0; i<N; i++) {
    arr.push(input[lineIdx++])
}

const c = input[lineIdx++]

const answerArr = []
for (let r of arr) {
    if (r[0] === c) {
        answerArr.push(r)
    }
}

let cnt = 0
for (let r of answerArr) {
    cnt += r.length
}
let v = cnt/answerArr.length

console.log(answerArr.length + ' ' + v.toFixed(2))