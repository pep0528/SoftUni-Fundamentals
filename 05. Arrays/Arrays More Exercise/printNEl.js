function printNthElement (arr) {
    let step = arr[arr.length - 1];
    let buff = arr[0] + ' ';

    for (let i = 1; i < arr.length - 1; i++) {
        if (i % step === 0) {
            buff += arr[i] + ' ';
        }
    }

    console.log(buff);
}

printNthElement(['5', '20', '31', '4', '20', '2'])