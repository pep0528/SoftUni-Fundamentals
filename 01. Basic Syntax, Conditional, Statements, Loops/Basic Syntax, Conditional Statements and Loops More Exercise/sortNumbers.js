function sortNumbers (n, m, h) {
    if (n > m && n > h) {
        console.log(n);

        if (m > h) {
            console.log(m);
            console.log(h);
        } else {
            console.log(h);
            console.log(m);
        }
    } else if (m > n && m > h) {
        console.log(m);

        if (n > h) {
            console.log(n);
            console.log(h);
        } else {
            console.log(h);
            console.log(n);
        }
    } else if (h > n && h > m) {
        console.log(h);

        if (n > m) {
            console.log(n);
            console.log(m);
        } else {
            console.log(m);
            console.log(n);
        }
    }
}

sortNumbers(0, 0, 2)