const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");
let n = Number(input[0]);
let m = Number(input[1]);

function gcd(n, m) {
    let a
    let b
    if (n > m) {
        a = n
        b = m
    } else {
        a = m
        b = n
    }

    return a%b === 0 ? b : gcd(b, a%b)
}

console.log(gcd(n, m))