function mirrorWords (input) {
    let regex = /([@#])(?<word1>[a-zA-Z]{3,})\1\1(?<word2>[a-zA-Z]{3,})\1/g;
    let count = 0;
    let results = [];

    for (let text of input) {
        let matches = text.matchAll(regex);

        for (let match of matches) {
            count++;
            let first = match.groups['word1'];
            let second = match.groups['word2'];
            reversedRight = reverse(second);
            
            if (first === reversedRight) {
                results.push(`${first} <=> ${second}`);
            }
        }
    }

    if (count === 0) {
        console.log('No word pairs found!');
    } else {
        console.log(`${count} word pairs found!`);
    }

    if (results.length === 0) {
        console.log('No mirror words!');
    } else {
        console.log(`The mirror words are:\n${results.join(', ')}`);
    }

    function reverse (text) {
        let reversed = '';
        for (let i = text.length - 1; i >= 0; i--) {
            reversed += text[i];
        }
        return reversed;
    }
}

mirrorWords(['@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'])