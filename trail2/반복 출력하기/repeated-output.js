const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);

function print(num) {
    for(let i=0; i<num; i++) {
        console.log('12345^&*()_')
    }
}

print(n)