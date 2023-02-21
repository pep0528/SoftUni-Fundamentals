function rounding (num, coma) {
    if (coma > 15) {
        coma = 15;
    }

    console.log(parseFloat(num.toFixed(coma)));
}

rounding(3.1415926535897932384626433832795, 2)