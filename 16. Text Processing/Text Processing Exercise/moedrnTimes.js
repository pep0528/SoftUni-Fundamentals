function modernTimes (input) {
    let sentence = input.split(' ');

    for (let char of sentence) {
        if (char.startsWith('#') && (char.length > 1)) {
            let isSpec = true;
            char = char.substring(1, char.length);

            for (let el of char) {
                el = el.toLowerCase();

                if (el.charCodeAt(0) < 97 || el.charCodeAt(0) > 122) {
                    isSpec = false;
                    break;
                }
            }

            if (isSpec) {
                console.log(char);
            }
        }
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')