const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let a = 'a'.charCodeAt()
let z = 'z'.charCodeAt()
let i = input.charCodeAt()
console.log(String.fromCharCode(i-1 < a ? z : i-1))