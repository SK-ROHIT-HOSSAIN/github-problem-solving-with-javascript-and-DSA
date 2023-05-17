function find2ndMax(arr) {
    let max = arr[0];
    let indx = 0;
    for (let i = 0; i < arr.length; i++) {

        if (max < arr[i]) {
            max = arr[i];
            indx = i;

        }
    }

    //console.log(arr[indx])
    let temp = arr[arr.length - 1]
    arr[arr.length - 1] = arr[indx];
    arr[indx] = temp;
    console.log(arr)
    let max2 = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {

        if (max2 < arr[i]) {
            max2 = arr[i]
        }

    }
    return max2;
}

console.log(find2ndMax([9, 7, 5, 6]))