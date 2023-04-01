function theImitationGame (input) {
    let message = input.shift();
    let line = input.shift();

    while (line != 'Decode') {
        let tokens = line.split('|');
        let command = tokens[0];

        switch (command) {
            case 'Move':
                let index = Number(tokens[1]);
                let first = message.substring(0, index);
                let second = message.substring(index);
                message = second + first;
                break;
            case 'Insert':
                let index1 = Number(tokens[1]);
                let first1 = message.substring(0, index1);
                let second1 = message.substring(index1);
                let value = tokens[2];
                message = first1 + value + second1;
                break;
            case 'ChangeAll':
                let subSring = tokens[1];
                let replacement = tokens[2];
                message = message.split(subSring).join(replacement);
                break;
        }
        line = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'])