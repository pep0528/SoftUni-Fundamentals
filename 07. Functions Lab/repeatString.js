function repeatString (str, n) {
    let output = '';

    for (let i = 0; i < n; i++) {
        output += str;
    }

    return output;
}

console.log(repeatString("abc", 3));