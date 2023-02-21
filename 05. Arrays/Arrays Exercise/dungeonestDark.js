function dungeonestDark (line) {
    let health = 100;
    let coins = 0;
    let rooms = line[0].split('|');

    for (let i = 0; i < rooms.length; i++) {
        let room = rooms[i];
        let tokens = room.split(' ');
        let command = tokens[0];
        let amount = Number(tokens[1]);

        if (command === 'potion') {
            let missingHealth = 100 - health;
            let restored = Math.min(missingHealth, amount);
            health += restored;
            console.log(`You healed for ${restored} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins += amount;
            console.log(`You found ${amount} coins.`);
        } else {
            health -= amount;

            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${i + 1}`);
                return;
            }

            console.log(`You slayed ${command}.`);
        }
    }

    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])