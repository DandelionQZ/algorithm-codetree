const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const str = input[lineIdx++].split(' ').join('')

for (let i = 0; i<str.length; i += 5) {
    console.log(str.substr(i, 5))
}