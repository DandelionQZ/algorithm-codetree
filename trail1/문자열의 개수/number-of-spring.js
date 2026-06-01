const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

console.log(input.length-1)
for (let i=0; i<input.length-1; i+=2) {
    console.log(input[i])
}