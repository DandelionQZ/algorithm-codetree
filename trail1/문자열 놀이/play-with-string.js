const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
let lineIdx = 0

let [S, Q] = input[lineIdx++].split(' ')

for (let i=0; i<Number(Q); i++) {
    let [TYPE, A, B] = input[lineIdx++].split(' ')
    let type = Number(TYPE)
    if (type === 1) {
        ss = S.split('')
        let a = Number(A)-1
        let b = Number(B)-1
        let temp = ss[a]
        ss[a] = ss[b]
        ss[b] = temp
        S = ss.join('')
        console.log(S)
    } else if (type === 2) {
        ss = S.split('')
        for (let i=0; i<S.length; i++) {
            if (ss[i] === A) {
                ss[i] = B
            }
        }
        S = ss.join('')
        console.log(S)
    }
}