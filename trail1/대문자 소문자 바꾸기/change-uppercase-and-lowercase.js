const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const A = 'A'.charCodeAt()
const Z = 'Z'.charCodeAt()
const a = 'a'.charCodeAt()
const z = 'z'.charCodeAt()

let answer = []
for (let i of input) {
    let num = i.charCodeAt()
    if (num >= A && num <= Z) {
        answer.push(i.toLowerCase())
    } else if (num >= a && num <= z) {
        answer.push(i.toUpperCase())
    }
}

console.log(answer.join(''))