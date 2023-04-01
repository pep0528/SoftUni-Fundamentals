function heroesOfCodeAndLogicVll (input) {
    let heroNum = Number(input.shift());
    let heroes = {};
 
    while (heroNum > 0) {
        let [heroName, health, mana] = input.shift().split(' ');
        health = Number(health);
        mana = Number(mana);
        heroes[heroName] = { hp: health, mp: mana };
 
        heroNum--;
    }
 
    let command = input.shift();
 
    while (command !== 'End') {
        let tokens = command.split(' - ');
 
        switch (tokens[0]) {
            case 'CastSpell': castSpell(tokens[1], tokens[2], tokens[3]); break;
            case 'TakeDamage': takeDamage(tokens[1], tokens[2], tokens[3]); break;
            case 'Recharge': recharge(tokens[1], tokens[2]); break;
            case 'Heal': heal(tokens[1], tokens[2]); break;
        }
 
        command = input.shift();
    }
 
    function castSpell(heroName, mpNeeded, spellName) {
        mpNeeded = Number(mpNeeded);
 
        if (heroes[heroName].mp - mpNeeded >= 0) {
            heroes[heroName].mp -= mpNeeded;
            console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
        } else {
            console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
        }
 
    }
 
    function takeDamage(heroName, damage, attacker) {
        damage = Number(damage);
 
        if (heroes[heroName].hp - damage > 0) {
            heroes[heroName].hp -= damage;
            console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
        } else {
            delete heroes[heroName];
            console.log(`${heroName} has been killed by ${attacker}!`);
        }
    }
 
    function recharge(heroName, amount) {
        amount = Number(amount);
 
        if (heroes[heroName].mp + amount > 200) {
            let buff = 200 - heroes[heroName].mp;
            heroes[heroName].mp = 200;
            console.log(`${heroName} recharged for ${buff} MP!`);
        } else {
            heroes[heroName].mp += amount;
            console.log(`${heroName} recharged for ${amount} MP!`);
        }
    }
 
    function heal(heroName, amount) {
        amount = Number(amount);
 
        if (heroes[heroName].hp + amount > 100) {
            let buff = 100 - heroes[heroName].hp;
            heroes[heroName].hp = 100;
            console.log(`${heroName} healed for ${buff} HP!`);
        } else {
            heroes[heroName].hp += amount;
            console.log(`${heroName} healed for ${amount} HP!`);
        }
    }
 
    for (let key of Object.keys(heroes)) {
        console.log(key);
        console.log(`  HP: ${heroes[key].hp}`);
        console.log(`  MP: ${heroes[key].mp}`);
    }
}

heroesOfCodeAndLogicVll([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'])