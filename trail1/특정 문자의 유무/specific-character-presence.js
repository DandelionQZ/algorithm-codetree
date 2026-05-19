const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let ee = 'No'
let ab = 'No'

if (input.includes('ee')) {
    ee = 'Yes'
}

if (input.includes('ab')) {
    ab = 'Yes'
}

console.log(ee + ' ' + ab)