const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('')

for (let i=2; i<input.length; i++) {
    if (input[i] === input[1]) {
        input[i] = input[0]
    }
}

input[1] = input[0]
console.log(input.join(''))
