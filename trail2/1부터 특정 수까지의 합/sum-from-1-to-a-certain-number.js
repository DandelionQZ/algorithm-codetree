const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function go (n) {
    if (n%2 === 0) {
        return Math.floor(((1+n)*(n/2))/10)
    } else {
        return Math.floor(((1+n)*Math.floor(n/2) + (Math.floor(n/2) + 1))/10)
    }
}

let answer = go(n)
console.log(answer)