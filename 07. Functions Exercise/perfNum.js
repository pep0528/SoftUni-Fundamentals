function perfectNumber (n) {
    let counter = 0;

    for  (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            counter += i;
        }
    }

    if (counter === n && counter !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6)