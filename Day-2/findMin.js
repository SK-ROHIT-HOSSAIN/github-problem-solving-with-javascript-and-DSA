function findMin(arr) {
    let min = arr[0];
    arr.forEach(e => {
        if (min > e) {
            min = e;
        }
    })
    return min;
}

console.log(findMin([4, 6, 2, 9]))