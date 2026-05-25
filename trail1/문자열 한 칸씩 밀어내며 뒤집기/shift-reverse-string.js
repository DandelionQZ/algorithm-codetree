const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const [S, Q] = input[lineIdx++].split(" ")

function shiftToLeft (str) {
    return str.slice(1) + str[0]
}

function shiftToRight (str) {
    return str.slice(-1) + str.slice(0, -1)
}

let s = S
for (let i=0; i<Number(Q); i++) {
    let type = Number(input[lineIdx++])
    if (type === 1) {
        s = shiftToLeft(s)
    } else if (type === 2) {
        s = shiftToRight(s)
    } else if (type === 3) {
        let temp = s.split('')
        s = temp.reverse().join("")
    }
    console.log(s)
}