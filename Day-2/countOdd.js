function countOdd(arr) {
    let cOdd = 0;
    arr.forEach(e => {
        if (e % 2 !== 0)
            cOdd++;
    })
    return cOdd;
}

console.log(countOdd([4, 6, 8, 9]))