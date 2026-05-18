const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let cnt = 0
for (let i of input[0]) {
    if (i === input[1]) {
        cnt++
    }
}

console.log(cnt)