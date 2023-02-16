function nxnMatrix (n) {
    let line = (n + ' ').repeat(n);

    for (let i = 0; i < n; i++) {
        console.log(line);
    }
}

nxnMatrix(3)