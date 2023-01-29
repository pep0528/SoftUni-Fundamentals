function triplesOfLatinLetters (n) {
    for (let i = 0; i < n; i++) {
        let letter1 = String.fromCharCode(97 + i);
        for (let u = 0; u < n; u++) {
            let letter2 = String.fromCharCode(97 + u);
            for (let y = 0; y < n; y++) {
                let letter3 = String.fromCharCode(97 + y);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

triplesOfLatinLetters(3)