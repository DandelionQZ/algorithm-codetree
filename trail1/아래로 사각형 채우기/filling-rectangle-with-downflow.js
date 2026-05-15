const fs = require('fs')
const input = Number(fs.readFileSync(0).toString().trim())

const arr = Array.from({length: input}, () => Array(input).fill(0))

let num = 1
for (let i = 0; i<input; i++) {
    for (let j = 0; j<input; j++) {
        arr[j][i] = num++
    }
}

for (let i of arr) {
    console.log(i.join(' '))
}