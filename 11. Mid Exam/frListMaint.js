function friendListMaintenance (input) {
    let friends = input.shift().split(', ');
    let command = input.shift();

    while (command !== 'Report') {
        let tokens = command.split(' ');
        let action = tokens.shift();

        switch (action) {
            case 'Blacklist':
            case 'Error':
            case 'Change':
                let index = Number(tokens[0]);
                if (index < 0 || index > friends.length - 1) {
                    continue;
                }
        }
    }
}

friendListMaintenance(["Mike, John, Eddie",
"Blacklist Mike",
"Error 0",
"Report"])