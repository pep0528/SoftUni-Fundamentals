function registration (input) {
    let username = input.shift();
    let line = input.shift();

    while (line != 'Registration') {
        let [command, first, second] = line.split(' ');

        switch (command) {
            case 'Letters':
                if (first === 'Lower') {
                    username = username.toLowerCase();
                } else if (first === 'Upper') {
                    username = username.toUpperCase();
                }
                console.log(username);
                break;
            case 'Reverse':
                let startIndex = Number(first);
                let endIndex = Number(second);

                if (startIndex >= 0 && startIndex < username.length && endIndex >= 0 && endIndex < username.length) {
                    let sub = username.substring(startIndex , endIndex + 1);
                    let reversed = '';

                    for (let el of sub) {
                        reversed = el + reversed;
                    }
                    console.log(reversed);
                }
                break;
            case 'Substring':
                if (username.includes(first)) {
                    username = username.replace(first, '');
                    console.log(username);
                } else {
                    console.log(`The username ${username} doesn't contain ${first}`);
                }
                break;
            case 'Replace':
                while (username.includes(first)) {
                    username = username.replace(first, '-');
                }
                console.log(username);
                break;
            case 'IsValid':
                if (username.includes(first)) {
                    console.log('Valid username.');
                } else {
                    console.log(`${first} must be contained in your username.`);
                }
                break;
        }
        line = input.shift();
    }
}

registration(["John",
"Letters Lower",
"Substring SA",
"IsValid @",
"Registration"])
