function maxNumber (arr) {
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        let num2 = arr[i + 1];

        if (num2 > num) {
            console.log(num2);
        }
    }
}

maxNumber([1, 4, 3, 2])