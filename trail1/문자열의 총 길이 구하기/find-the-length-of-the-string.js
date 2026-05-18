const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

let cnt = 0
for (let i of input) {
    cnt += i.length
}

console.log(cnt)