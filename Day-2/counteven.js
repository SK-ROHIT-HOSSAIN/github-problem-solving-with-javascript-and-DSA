function countEven(arr) {
    let cEven = 0;
    arr.forEach(e => {
        if (e % 2 == 0)
            cEven++;
    })
    return cEven;
}

console.log(countEven([4, 6, 8, 9]))