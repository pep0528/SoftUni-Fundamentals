function revealWords (word, sentence) {
    let wordsArr = word.split(', ');
    let textArr = sentence.split(' ');

    for (let w of wordsArr) {
        for (let i = 0; i < textArr.length; i++) {
            if (textArr[i].includes('*') && textArr[i].length === w.length) {
                textArr[i] = w;
            }
        }
    }

    console.log(textArr.join(' '));
}

revealWords('great', 'softuni is ***** place for learning new programming languages')