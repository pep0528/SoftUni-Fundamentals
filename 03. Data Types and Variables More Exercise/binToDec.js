function binaryToDecimal (bin) {
    let sum = 0;
    let m = 0;

    for (let i = 0; i < bin.length; i++) {
        
        for (let n = bin.length - 1; n >= 0; n--) {
            m = 2 ** n;
            sum = m * Number(bin[i]);
        }
    }

    console.log(sum);
}

binaryToDecimal("00001001")