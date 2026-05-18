const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const arr = []
for (let i = 0; i<10; i++) {
    arr.push(input[lineIdx++])
}

const c = input[lineIdx++]

const answer = []
for (let r of arr) {
    if (r.slice(-1) === c) {
        answer.push(r)
    }
}

if (answer.length > 0) {
    console.log(answer.join('\n'))
} else {
    console.log('None')
}
