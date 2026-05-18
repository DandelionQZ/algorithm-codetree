const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split(' ')

if (A.length === B.length) {
    console.log('same')
} else if (A.length > B.length) {
    console.log(A + ' ' + A.length)
} else {
    console.log(B + ' ' + B.length)
}