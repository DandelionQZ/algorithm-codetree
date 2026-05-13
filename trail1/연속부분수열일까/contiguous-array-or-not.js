const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0
const [nA, nB] = input[lineIdx++].split(' ').map(Number)
const arrA = input[lineIdx++].split(' ').map(Number)
const arrB = input[lineIdx++].split(' ').map(Number)

let startList = []
for(let a = 0; a<nA; a++) {
    if (arrB[0] === arrA[a]) {
        startList.push(a)
    }
}

if (startList.length === 0) {
    console.log('No')
    return
}

let flag = false
for (let s of startList) {
    for (let i = 0; i<nB; i++) {
        if (arrB[i] !== arrA[s+i]) {
            flag = false
            break
        }
        flag = true
    }
    if (flag) {
        break
    }
}

if (flag) {
    console.log('Yes')
} else {
    console.log('No')
}