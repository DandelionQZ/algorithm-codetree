const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const [N, M] = input[lineIdx++].split(' ').map(Number)
const arr1 = []
const arr2 = []
for (let i = 0; i<N; i++) {
    arr1.push(input[lineIdx++].split(" ").map(Number))
}
for (let i = 0; i<N; i++) {
    arr2.push(input[lineIdx++].split(" ").map(Number))
}

const answer = Array.from({length: N}, () => Array(M).fill(1))
for (let i = 0; i<N; i++) {
    for(let j = 0; j<M; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            answer[i][j] = 0
        }
    }
    console.log(answer[i].join(' '))
}

