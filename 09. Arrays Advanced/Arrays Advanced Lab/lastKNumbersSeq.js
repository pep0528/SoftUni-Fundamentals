function lastKNumbersSequence (n, k) {
    let sequence = [1];

    for (let curr = 1; curr < n; curr++) {
        let start = Math.max(0, curr - k);
        let current = sequence.slice(start, start + k).reduce((a, b) => a + b, 0);
        sequence.push(current);
        
    }

    console.log(sequence.join(' '));
}

lastKNumbersSequence(6, 3)