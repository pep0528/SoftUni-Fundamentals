function maxNumber (arr) {
    let buff = '';

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num > arr[i + 1] && i < arr.length && num > arr[arr.length - 1]) {
            buff += num + ' ';
        }

        if (i == arr.length - 1) {
            buff += arr[i];
        }
    }

    console.log(buff);
}

maxNumber([1, 4, 3, 2])