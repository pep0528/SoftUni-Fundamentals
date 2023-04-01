function secretChat (input) {
    let message = input.shift();
    let line = input.shift();

    while (line != 'Reveal') {
        let [command, first, second] = line.split(':|:');
        let hasError = false;

        switch (command) {
            case 'InsertSpace':
                let index = Number(first);
                message = message.substring(0, index) + ' ' + message.substring(index);
                break;
            case 'Reverse':
                if (message.includes(first)) {
                    message = message.replace(first, '');
                    let reversedSub = '';

                    for (let char of first) {
                        reversedSub = char + reversedSub;
                    }
                    message += reversedSub;
                } else {
                    console.log('error');
                    hasError = true;
                }
                break;
            case 'ChangeAll':
                while (message.includes(first)) {
                    message = message.replace(first, second);
                }
                break;
        }

        if (!hasError) {
            console.log(message);
        }
        line = input.shift();
    }
    console.log(`You have a new text message: ${message}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'])