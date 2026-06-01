const fs = require('fs')
let [A, B] = fs.readFileSync(0).toString().trim().split(' ')

const n0 = '0'.charCodeAt()
const n9 = '9'.charCodeAt()

function refine(str) {
    let a = ''
    for (let i of str) {
        let num = i.charCodeAt()
        if (num<n0 || num>n9) {
            return a
        }
        a += i
    }
    return a

}

console.log(Number(refine(A)) + Number(refine(B)))