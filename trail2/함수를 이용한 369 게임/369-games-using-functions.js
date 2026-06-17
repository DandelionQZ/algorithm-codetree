const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

let cnt = 0

function includeTriple(n) {
    let list = n.toString().split('')
    return (
        list.includes('3') ||
        list.includes('6') ||
        list.includes('9')
    );
}

for (let i=A; i<=B; i++) {
    if (i%3 === 0 || includeTriple(i)) {
        cnt++
    }
}

console.log(cnt)