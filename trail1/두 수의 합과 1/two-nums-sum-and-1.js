const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const n1 = '1'.charCodeAt()
const str = (A+B).toString()
let answer = 0
for (let i of str) {
    if (i.charCodeAt() === n1) {
        answer++
    }
}

console.log(answer)