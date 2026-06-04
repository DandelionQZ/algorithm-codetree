const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [n, m] = input[0].split(" ").map(Number);

function rt(n, m) {
    for(let i=0; i<n; i++) {
        console.log('1'.repeat(m))
    }
}

rt(n, m)