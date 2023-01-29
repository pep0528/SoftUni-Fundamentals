function specialNumbers (n) {
    let sum = 0;
    let result = '';

    for (let i = 1; i <= n; i++) {
        i = i.toString();

        for (let p = 0; p < i.length; p++) {
            sum += Number(i[p]);
        }

        result = sum === 5 || sum === 7 || sum === 11;
        console.log(result ? `${i} -> True` : `${i} -> False`);
        sum = 0;
    }
}

specialNumbers(15)