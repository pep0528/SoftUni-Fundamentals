function pascalCaseSplitter (input) {
    let result = [];
    let start = 0;

    for (let i = 1; i < input.length; i++) {
        let el = input[i];

        if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90) {
            result.push(input.substring(start, i));
            start = i;
        }
    }

    result.push(input.substring(start));
    console.log(result.join(', '));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')