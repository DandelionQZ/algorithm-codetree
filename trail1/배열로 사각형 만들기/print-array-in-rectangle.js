const arr = Array.from({length: 5}, () => Array(5).fill(1))

for (let i = 1; i<5; i++) {
    for (let j = 1; j<5; j++) {
        arr[i][j] = arr[i-1][j] + arr[i][j-1]
    }
}

for (let r of arr) {
    console.log(r.join(' '))
}