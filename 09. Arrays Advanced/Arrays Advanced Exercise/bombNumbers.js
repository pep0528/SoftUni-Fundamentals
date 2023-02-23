function bombNumbers (arr, bomb) {
    let special = bomb[0];
    let power = bomb[1];

    while (arr.includes(special)) {
        let num = arr.indexOf(special);
        let toRemove = power * 2 + 1;
        let start = num - power;

        if (start < 0) {
            toRemove += start;
            start = 0;
        }

        arr.splice(start, toRemove);
    }

    console.log(arr.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])