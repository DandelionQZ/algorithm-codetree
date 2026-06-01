const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

let cnt = 0
for (let i=1; i<A.length; i++) {
    let str = A.slice(-i, A.length) + A.slice(0, A.length-i)
    cnt++
    if (str === B) {
        console.log(cnt)
        return
    }
}
console.log(-1)