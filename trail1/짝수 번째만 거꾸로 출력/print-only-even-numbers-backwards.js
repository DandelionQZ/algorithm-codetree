const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let answer = ''
for (let i=Math.ceil((input.length-1)/2)*2-1; i>=0; i-=2) {
    answer += input[i]
}

console.log(answer)