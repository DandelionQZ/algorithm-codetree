const fs = require('fs')
const [arr, c] = fs.readFileSync(0).toString().trim().split(' ')

let idx = arr.indexOf(c)
if (idx === -1) {
    console.log('No')
} else {
    console.log(idx)
}