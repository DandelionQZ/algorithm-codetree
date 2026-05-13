const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

const [N, Q] = input[lineIdx++].split(' ').map(Number)
const arr = input[lineIdx++].split(' ').map(Number)
const questions = []
for (let i = 0; i<Q; i++) {
    questions.push(input[lineIdx++].split(" ").map(Number))
}

const answer = []
for (let [n, a, b] of questions) {
    if (n === 1) {
        answer.push(arr[a-1])
    } else if (n === 2) {
        let idx = 0
        for (let i = 0; i<N; i++) {
            if (arr[i] === a) {
                idx = i+1
                break
            }
        }
        answer.push(idx)
    } else if (n === 3) {
        let slice = arr.slice(a-1, b).join(' ')
        answer.push(slice)
    }
}

console.log(answer.join('\n'))