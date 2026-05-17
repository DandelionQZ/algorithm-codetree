const fs = require('fs')
const [first, second] = fs.readFileSync(0).toString().trim().split('\n')

console.log(first.length + second.length)