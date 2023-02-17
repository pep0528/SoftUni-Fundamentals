function lastKNumbersSequence (n, k) {
    let sequence = [1];

    for (let curr = 1; curr < n; curr++) {
        let start = Math.max(0, curr - k);
        let end = curr - 1;
        let sum = 0;

        sequence[curr] = sum;
    }

    console.log(sequence.join(' '));
}

lastKNumbersSequence(6, 3)