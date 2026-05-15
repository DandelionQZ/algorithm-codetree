const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const arr1 = []
const arr2 = []

for (let i = 0; i<3; i++) {
    arr1.push(input[lineIdx++].split(' ').map(Number))
}
lineIdx++
for (let i = 0; i<3; i++) {
    arr2.push(input[lineIdx++].split(' ').map(Number))
}

const answer = Array.from({length: 3}, () => Array(3).fill(0))
for (let k = 0; k<3; k++) {
    for (let l = 0; l<3; l++) {
        answer[k][l] = arr1[k][l] * arr2[k][l]
    }
    console.log(answer[k].join(' '))
}

