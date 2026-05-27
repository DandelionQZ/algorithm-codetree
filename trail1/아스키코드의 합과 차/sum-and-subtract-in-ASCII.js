const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split(' ')

const a = A.charCodeAt()
const b = B.charCodeAt()

console.log(a+b + ' ' + Math.abs(a-b))