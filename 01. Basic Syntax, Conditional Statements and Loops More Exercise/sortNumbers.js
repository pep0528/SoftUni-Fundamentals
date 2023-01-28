function sortNumbers (n, m, h) {
    let a;
    
    if (n > m && n > h) {
        a = n;
        console.log(a);
    } else if (m > n && m > h) {
        a = m;
        console.log(a);
    } else if (h > n && h > m) {
        a = h;
        console.log(a);
    }

    if (n !== a && n > m || n > h) {
        console.log(n);
    } else if (m !== a && m > n || m > h) {
        console.log(m);
    } else if (h !== a && h > n || h > m) {
        console.log(h);
    }

    if (n < m && n < h) {
        console.log(n);
    } else if (m < n && m < h) {
        console.log(m);
    } else if (h < n && h < m) {
        console.log(h);
    }
}

sortNumbers(0, 0, 2)