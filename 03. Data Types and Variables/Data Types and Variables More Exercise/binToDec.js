function binaryToDecimal (bin) {
    let lastIndex = bin.length - 1;
    let dec = 0;

    for (let i = 0; i < bin.length; i++) {
        if (bin[lastIndex - i] === '1') {
            dec += Math.pow(2, i);
        }
    }

    console.log(dec);
}

binaryToDecimal("00001001")