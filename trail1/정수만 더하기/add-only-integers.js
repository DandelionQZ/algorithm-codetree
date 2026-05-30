const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const n1 = '1'.charCodeAt()
const n9 = '9'.charCodeAt()

let answer = 0
for (let i of input) {
    let num = i.charCodeAt()
    if (num >= n1 && num <= n9) {
        answer += Number(i)
    }
}

console.log(answer)