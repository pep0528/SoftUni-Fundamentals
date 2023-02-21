function tseamAccount (input) {
    let games = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let curr = input[i].split(' ');
        let command = curr[0];
        let game = curr[1];

        if (command === 'Install' && games.includes(game) === false) {
            games.push(game);
        } else if (command === 'Uninstall' && games.includes(game)) {
            let x = games.indexOf(game);
            games.splice(x, 1);
        } else if (command === 'Update' && games.includes(game)) {
            let y = games.indexOf(game);
            games.splice(y, 1);
            games.push(game);
        } else if (command === 'Expansion' ) {
            let exp = game.split('-');
            let expansion = exp[0];

            if (games.includes(expansion)) {
                let expGame = exp.join(':');
                let s = games.indexOf(expansion);
                games.splice(s + 1, 0, expGame);
            }
        } else if (command === 'Play') {
            break;
        }
    }

    console.log(games.join(' '));
}

tseamAccount(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!'])