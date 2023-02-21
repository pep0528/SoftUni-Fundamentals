function charactersInRange (x, y) {
    let numX = x.charCodeAt(0);
    let numY = y.charCodeAt(0);

    let start = numX > numY ? numY : numX;
    let end = numX > numY ? numX : numY;

    let buff = '';

    for (let i = start + 1; i < end; i++) {
        buff += String.fromCharCode(i) + ' ';
    }

    console.log(buff);
}

charactersInRange("a", "d")