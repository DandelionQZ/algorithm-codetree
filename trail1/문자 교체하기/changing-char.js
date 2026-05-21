const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split(' ')

const aHead = A.substr(0, 2)
console.log(aHead + B.slice(2))