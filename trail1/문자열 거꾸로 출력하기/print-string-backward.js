const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

for (let i of input) {
    if (i === 'END') {
        break
    }
    console.log(i.split('').reverse().join(''))
}