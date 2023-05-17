function findSumOdd(arr) {
    let sum = 0;
    arr.forEach(e => {
        if (e % 2 !== 0)
            sum += e
    })
    return sum;
}

console.log(findSumOdd([4, 6, 3, 9]))