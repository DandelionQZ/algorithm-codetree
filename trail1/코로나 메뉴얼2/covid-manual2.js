const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const pList = []
for (let i of input) {
    pList.push(i.split(' '))
}

const answer = Array(4).fill(0)
for (let [s, d] of pList) {
    if (s === 'Y') {
        if (Number(d) >= 37) {
            answer[0]++
        } else {
            answer[2]++
        }
    } else if (s === 'N') {
        if (Number(d) >= 37) {
            answer[1]++
        } else {
            answer[3]++
        }
    }
}

if (answer[0] >= 2) {
    answer.push('E')
}

console.log(answer.join(' '))