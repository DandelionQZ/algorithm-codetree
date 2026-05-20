const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

const map = new Map()
for (let i = 0; i<input.length-1; i++) {
    let key = input.substr(i, 2)
    if (map.has(key)) {
        map.set(key, map.get(key)+1)
    } else {
        map.set(key, 1)
    }
}

console.log((map.get('ee') || 0) + ' ' + (map.get('eb') || 0))