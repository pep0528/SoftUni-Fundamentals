function inventory (input) {
    let result = [];

    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        let hero = {
            name: name,
            level: level, 
            items: items.split(' , ')
        }
        result.push(hero);
    }

    result.sort((heroA, heroB) => heroA.level - heroB.level);

    for (let heroes of result) {
        console.log(`Hero: ${heroes.name}`);
        console.log(`level => ${heroes.level}`);
        console.log(`items => ${heroes.items}`);
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])
    