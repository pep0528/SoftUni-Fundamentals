function reverseString (input) {
    let word = input[0];
    let word2 = ""

    for (let i = word.length - 1; i >= 0; i--) {
        word2 += word[i];
    }

    console.log(word2);
}

reverseString(["Hello"])