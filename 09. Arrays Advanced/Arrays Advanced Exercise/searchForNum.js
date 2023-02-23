function searchForANumber (arr1, arr2) {
    let take = arr2[0];
    let toDelete = arr2[1];
    let spec = arr2[2];
    let count = 0;
    let arr = arr1.slice(0, take);
    arr.splice(0, toDelete);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === spec) {
            count++;
        }
    }

    console.log(`Number ${spec} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])