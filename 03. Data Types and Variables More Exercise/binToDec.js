function binaryToDecimal (bin) {
    let binary = '';

    if (typeof bin == 'string') {
        binary = bin.split();
    } else {
        binary = bin.toString().toSplit();
    }

    let decimal = 0;

    for (let i = 0; i < binary.length; i++) {
        decimal = (decimal * 2) + binary[i];
    }

    console.log(decimal);
}

binaryToDecimal(00001001)