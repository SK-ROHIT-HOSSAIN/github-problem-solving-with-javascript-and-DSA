function find2ndMin(arr) {
    let min = arr[0];
    let indx = 0;
    arr.forEach((e, i) => {
        if (min > e) {
            min = e;
            indx = i;
        }
    })

    let temp = arr[arr.length - 1]
    arr[arr.length - 1] = arr[indx];
    arr[indx] = temp;

    let min2 = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {

        if (min2 > arr[i]) {
            min2 = arr[i]
        }

    }
    return min2;
}

console.log(find2ndMin([4, 6, 2, 9]))