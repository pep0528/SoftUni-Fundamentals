function distinctArray (arr) {
    let result = [];

    for (let x of arr) {
        if (result.indexOf(x) === -1) {
            result.push(x);
        }
    }

    console.log(result.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])