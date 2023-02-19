function chatLogger (input) {
    let newChat = [];
    let command = input.shift();
    
    while (command !== 'end') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        switch (action) {
            case 'Chat':
                newChat.push(tokens[0]);
                break;
            case 'Delete':
                let index = tokens[0];
                if (newChat.includes(index)) {
                    newChat.splice(index, 1);
                } else {
                    command = index.shift();
                    continue;
                }
                break;
            case 'Edit':
                let id = tokens[0];
                if (newChat.includes(id)) {
                    newChat.splice(id, 1)
                    id = tokens[1];
                } else {
                    command = index.shift();
                    continue;
                }
                break;
            case 'Pin':
                let mess = tokens[0];
                if (newChat.includes(mess)) {
                    newChat.splice(mess, 1);
                    newChat.push(mess);
                }
            case 'Spam':
                for (let el of tokens) {
                    newChat.push(el);
                }
                break;
        }
        command = input.shift();
    }

    console.log(newChat);
}

chatLogger(["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])