function findSum(arr) {
    let sum = 0;
    arr.forEach(e => {
        sum += e
    })
    return sum;
}

console.log(findSum([4, 6, 8, 9]))