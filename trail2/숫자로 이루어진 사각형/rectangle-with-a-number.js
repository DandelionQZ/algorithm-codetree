const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);

let v = 1
for (let i=0; i<N; i++) {
    for (let j=0; j<N; j++) {
        process.stdout.write(v++ + ' ')
        if (v === 10) {
            v = 1
        }
    }
    process.stdout.write('\n')
}