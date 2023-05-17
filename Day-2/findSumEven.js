function findSumEven(arr) {
    let sum = 0;
    arr.forEach(e => {
        if (e % 2 == 0)
            sum += e
    })
    return sum;
}

console.log(findSumEven([4, 6, 8, 9]))