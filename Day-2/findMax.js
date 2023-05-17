function findMax(arr) {
    let max = arr[0];
    arr.forEach(e => {
        if (max < e) {
            max = e;
        }
    })
    return max;
}

console.log(findMax([4, 6, 8, 9]))