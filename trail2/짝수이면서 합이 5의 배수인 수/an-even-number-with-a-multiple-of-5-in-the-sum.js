const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function check(n) {
    let [a, b] = n.toString().split('').map(Number)
    let sum = a + b
    if (n%2 === 0 && sum%5 === 0) {
        return true
    } else {
        return false
    }
}

if (check(n)) {
    console.log("Yes")
} else {
    console.log("No")
}