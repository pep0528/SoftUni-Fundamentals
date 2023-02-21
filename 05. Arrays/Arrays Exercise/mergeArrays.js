function mergeArrays (arr1, arr2) {
    let newArr = [];

    for (let i = 0; i < arr1.length; i++) {
        let x = arr1[i];
        let y = arr2[i];

        if (i % 2 === 0) {
            x = Number(x);
            y = Number(y);
        }

        let currResult = x + y;
        newArr.push(currResult);
    }

    console.log(newArr.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],['17', '22', '87', '36', '11'])