const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

const ab = A + B
const ba = B + A

if (ab === ba) {
    console.log('true')
} else {
    console.log('false')
}