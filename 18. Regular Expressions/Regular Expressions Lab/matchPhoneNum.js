function matchPhoneNumber (input) {
    let validNums = [];
    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    while ((validName = pattern.exec(input)) !== null) {
        validNums.push(validName[0]);
    }

    console.log(validNums.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])