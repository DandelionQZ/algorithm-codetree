const fs = require('fs')
const [A, B] = fs.readFileSync(0).toString().trim().split('\n')

const map = new Map()
for (let i=0; i<A.length-1; i++) {
    let key = A.substr(i, 2)
    if (map.has(key)) {
        map.set(key, map.get(key)+1)
    } else {
        map.set(key, 1)
    }
}

console.log(map.get(B) || 0)