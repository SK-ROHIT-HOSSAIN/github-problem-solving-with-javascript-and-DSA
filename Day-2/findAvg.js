function findAvg(arr) {
    let sum = 0;
    arr.forEach(e => {
        sum += e
    })
    return (sum / arr.length);
}

console.log(findAvg([4, 6, 8, 9]))