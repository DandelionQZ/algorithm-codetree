const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const answer = []
const arr = ["apple", "banana", "grape", "blueberry", "orange"]
for (let r of arr) {
    if (r[2] === input || r[3] === input) {
        answer.push(r)
    }
}

if (answer.length > 0) {
    console.log(answer.join('\n') + '\n' + answer.length)
} else {
    console.log(0)
}