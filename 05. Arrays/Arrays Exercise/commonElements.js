function commonElements (arr1, arr2) {
    for (let x = 0; x < arr1.length; x++) {
        for (let y = 0; y < arr2.length; y++) {
            if (arr1[x] === arr2[y]) {
                console.log(arr1[x]);
            }
        }
    }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '], ['s', 'o', 'c', 'i', 'a', 'l'])