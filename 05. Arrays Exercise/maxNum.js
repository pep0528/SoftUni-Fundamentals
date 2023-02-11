function maxNumber (arr) {
    let result = " ";

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let num2 = i;

        if (num > arr[++num2] && i < arr.length && num > arr[arr.length - 1]) {
            result += num + " ";
        }

        if (i == arr.length - 1) {
            result += arr[i];
        }
    }

    console.log(result);
}

maxNumber([1, 4, 3, 2])