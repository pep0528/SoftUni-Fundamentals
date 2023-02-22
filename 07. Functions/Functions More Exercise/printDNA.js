function printDNA (num) {
    let str = 'ATCGTTAGGG'.split('');

    for (let i = 1; i <= num; i++) {
        let [x, y] = str.splice(0, 2);

        if (i === 1 || i % 4 === 1) {
            console.log(`**${x}${y}**`);
        } else if (i === 2 || i % 4 === 2) {
            console.log(`*${x}--${y}*`);
        } else if (i === 3 || i % 4 === 3) {
            console.log(`${x}----${y}`);
        } else if (i === 4 || i % 4 === 0) {
            console.log(`*${x}--${y}*`);
        }

        str.push(x)
        str.push(y)
    }
}

printDNA(4)