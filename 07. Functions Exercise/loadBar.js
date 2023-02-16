function loadingBar (n) {
    let percentages = '%'.repeat(n / 10);
    let dots = '.'.repeat(10 - n / 10);

    if (n === 100) {
        console.log(`${n}% Complete!`);
        console.log(`[${percentages}]`);
    } else {
        console.log(`${n}% [${percentages}${dots}]`);
        console.log(`Still loading...`);
    }
}

loadingBar(30)