const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = [];

for (let i = 1; i <= n; i++) {
    const [x, y] = input[i].trim().split(' ').map(Number);
    nums.push([x, y]);
}

nums.sort((a,b) => a[1]-b[1])

let left = 0
let right = nums.length-1

let answer = Number.MIN_SAFE_INTEGER
while(left<=right) {
    let [startX, startY] = nums[left]
    let [endX, endY] = nums[right]

    let cnt = Math.min(startX, endX)

    let key = startY + endY
    answer = Math.max(answer, key)

    if (startX < endX) {
        nums[right][0] = endX - cnt
        left++
    } else if (startX > endX) {
        nums[left][0] = startX - cnt
        right--
    } else {
        left++
        right--
    }
}

console.log(answer)