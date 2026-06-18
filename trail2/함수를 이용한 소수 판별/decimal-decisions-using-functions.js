const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

let sum = 0

function isPrime(n) {
    for (let j=2; j<n; j++) {
        if (n%j === 0) {
            return false
        }
    }
    return true
}

for (let i=A; i<=B; i++) {
    if (isPrime(i)) {
        sum += i
    }
}

console.log(sum)