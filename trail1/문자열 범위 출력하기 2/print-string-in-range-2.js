const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const str = input[lineIdx++]
const n = Number(input[lineIdx++])

const strCut = str.slice(-n)

let answer = ''
for (let i=strCut.length-1; i>=0; i--) {
    answer += strCut[i]
}

console.log(answer)
