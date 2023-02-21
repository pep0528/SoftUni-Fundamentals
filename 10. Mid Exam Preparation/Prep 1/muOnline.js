function muOnline (input) {
    let health = 100;
    let bitcoins = 0;
    let line = input.split('|')
    let isDead = false;
    
    for (let r = 0; r < line.length; r++) {
        let room = line[r];
        let sign = room.split(' ');
        let command = sign[0];
        let amount = Number(sign[1]);
        
        switch (command) {
            case 'potion':
                if (health < 100) {
                    health += amount;
                }

                if (health > 100) {
                    health = 100;
                }
                console.log(`You healed for ${amount} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                bitcoins += amount;
                console.log(`You found ${amount} bitcoins.`);
                break;
            default:
                health -= amount;

                if (health > 0) {
                    console.log(`You slayed ${command}.`);
                } else {
                    isDead = true;
                    console.log(`You died! Killed by ${command}.`);
                    console.log(`Best room: ${r + 1}`);
                }
                break;
        }

        if (isDead) {
            break;
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

muOnline('cat 10|potion 30|orc 10|chest 10|snake 25|chest 110')