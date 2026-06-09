const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);

function gcd (n, m) {
    let a 
    let b
    if (n>m) {
        a = n
        b = m
    } else {
        a = m
        b = n
    }

    return a%b === 0 ? b : gcd(a%b, b)
}

function lcm (n, m) {
    return (n*m) / gcd(n, m)
}

console.log(lcm (n, m))