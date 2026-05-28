const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let str = input.replace(/[^A-Za-z]/g, '').toUpperCase()
console.log(str)