const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

let str = A
for (let i of B) {
    let temp = ''
    if (i === 'L') {
        temp = str.slice(1) + str[0]
    } else if (i === 'R') {
        temp = str.slice(-1) + str.slice(0, -1)
    }
    str = temp
}

console.log(str)