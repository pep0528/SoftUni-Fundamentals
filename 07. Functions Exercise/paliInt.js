function palindromeIntegers (arr) {
    for (let i = 0; i < arr.length; i++) {
        let numStr = String(arr[i]);
        let buff = '';

        for (let j = numStr.length - 1; j >= 0; j--) {
            buff += numStr[j];
        }

        console.log(buff === numStr);
    }
}

palindromeIntegers([123, 323, 421, 121])