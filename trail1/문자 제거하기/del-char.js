const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

let str = input[lineIdx++]
while (str.length > 1) {
    let num = Number(input[lineIdx++])
    let temp = ''
    if (num+1 > str.length) {
        temp = str.slice(0, -1)
    } else {
        temp = str.slice(0, num) + str.slice(num+1)
    }
    console.log(temp)
    str = temp
}