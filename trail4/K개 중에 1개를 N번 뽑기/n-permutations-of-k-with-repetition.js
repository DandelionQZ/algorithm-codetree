const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [K, N] = input[0].split(' ').map(Number);

let arr = []
let answer = []
function pair (d) {
    if (d === N) {
        answer.push(arr.join(' '))
        return
    }

    for (let i=1; i<=K; i++) {
        arr[d] = i
        pair(d+1)
    }
}   

pair(0)

console.log(answer.join('\n'))