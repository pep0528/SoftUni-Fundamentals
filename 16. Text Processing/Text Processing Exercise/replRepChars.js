function replaceRepeatingChars (input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let x = input[i];
        let y = input[i + 1];

        if (x != y) {
            result.push(x);
        }
    }

    console.log(result.join(''));
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')