const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

input.sort((a, b) => a.length - b.length)
console.log(input[2].length - input[0].length)