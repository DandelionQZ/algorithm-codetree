const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, b, c] = input[0].split(" ").map(Number);

function min(a, b, c) {
    console.log(Math.min(a, b, c))
}

min(a, b, c)