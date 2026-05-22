const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const first = input[0]
const second = input[1]

const arr = []
arr.push(second)
arr.push(first)
for (let i of input.slice(2)) {
    if (i === first) {
        arr.push(second)
    } else if (i === second) {
        arr.push(first)
    } else {
        arr.push(i)
    }
}

console.log(arr.join(''))