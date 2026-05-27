const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const next = input.charCodeAt()+1
const a = 'a'.charCodeAt()
const z = 'z'.charCodeAt()

console.log(String.fromCharCode(next > z ? next-26 : next))