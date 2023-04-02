function hogwarts (input) {
    let message = input.shift();
    let line = input.shift();

    while (line != 'Abracadabra') {
        let [command, first, second] = line.split(' ');

        switch (command) {
            case 'Abjuration':
                message = message.toUpperCase();
                console.log(message);
                break;
            case 'Necromancy':
                message = message.toLowerCase();
                console.log(message);
                break;
            case 'Illusion':
                let index = Number(first);
                
                if (message.length >= index) {
                    let buff = message.charAt(index);
                    message = message.replace(buff, second);
                    console.log('Done!');
                } else {
                    console.log('The spell was too weak.');
                }
                break;
            case 'Divination':
                while (message.includes(first)) {
                    message = message.replace(first, second);
                }
                console.log(message);
                break;
            case 'Alteration':
                if (message.includes(first)) {
                    message = message.replace(first, '');
                    console.log(message);
                }
                break;
            default:
                console.log('The spell did not work!');
        }
        line = input.shift();
    }
}

hogwarts((["A77i0",
"Divination 7 c",
"Abracadabra"]))