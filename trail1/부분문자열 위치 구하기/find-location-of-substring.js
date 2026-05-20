const fs = require('fs')
const [arr, target] = fs.readFileSync(0).toString().trim().split('\n')

let idx = arr.indexOf(target)
console.log(idx)