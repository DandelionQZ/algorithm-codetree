const fs = require("fs")
const input = fs.readFileSync(0).toString().trim().split("\n")

const arr = []
for(let i of input) {
    arr.push(i.split(" ").map(Number))
}

let answer = 0
const check = [
    [1,0,0,0],
    [1,1,0,0],
    [1,1,1,0],
    [1,1,1,1]
]
for(let i = 0; i<4; i++) {
    for(let j = 0; j<4; j++) {
        if(check[i][j] === 1) {
            answer += arr[i][j]
        }
    }
}

console.log(answer)