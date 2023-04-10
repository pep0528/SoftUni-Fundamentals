function battleManager (input) {
    let listObj = {};
    let line = input.shift();
    let count = 0;

    while (line != 'Results') {
        let [command, first, second, third] = line.split(':');

        switch (command) {
            case 'Add':
                add(first, second, third);
                break;
            case 'Attack':
                attack(first, second, third);
                break;
            case 'Delete':
                toDelete(first);
                break;
        }
        line = input.shift();
    }

    console.log(`People count: ${count}`);
    for (let key of Object.keys(listObj)) {
        console.log(`${key} - ${listObj[key].hp} - ${listObj[key].eg}`);
    }

    function add (name, health, energy) {
        health = Number(health);
        energy = Number(energy);
        
        if (!listObj.hasOwnProperty(name)) {
            listObj[name] = { hp: health, eg: energy };
            count++;
        } else {
            listObj[name].hp += health;
        }
    }

    function attack (attacker, defender, damage) {
        damage = Number(damage);

        if (listObj.hasOwnProperty(attacker) && listObj.hasOwnProperty(defender)) {
            listObj[defender].hp -= damage;
            listObj[attacker].eg -= 1;

            if (listObj[defender].hp <= 0) {
                delete listObj[defender];
                console.log(`${defender} was disqualified!`);
                count--;
            }

            if (listObj[attacker].eg <= 0) {
                delete listObj[attacker];
                console.log(`${attacker} was disqualified!`);
                count--;
            }
        }
    }

    function toDelete (username) {
        if (username === 'All') {
            for (let key of Object.keys(listObj)) {
                delete listObj[key];
            }
            count = 0;
        } else {
            if (listObj.hasOwnProperty(username)) {
                delete listObj[username];
                count--;
            }
        }
    }
}

battleManager(["Add:Bonnie:3000:5",
"Add:Johny:4000:10",
"Delete:All",
"Add:Bonnie:3333:3",
"Add:Aleks:1000:70",
"Add:Tom:4000:1",
"Results"])

