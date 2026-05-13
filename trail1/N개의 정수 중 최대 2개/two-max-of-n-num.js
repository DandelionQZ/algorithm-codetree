const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const N = Number(input[lineIdx++])
const arr = input[lineIdx++].split(' ').map(Number)

arr.sort((a,b) => b-a)
console.log(arr[0] + ' ' + arr[1])