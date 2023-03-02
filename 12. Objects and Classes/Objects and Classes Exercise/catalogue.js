function catalogue (input) {
    let result = {};

    for (let line of input) {
        let [name, price] = line.split(' : ');
        result[name] = Number(price);
    }

    let sort = Object.keys(result).sort((a, b) => a.localeCompare(b));
    let group = '';

    for (let key of sort) {
        let name = key;

        if (group !== name[0]) {
            group = name[0];
            console.log(`${group}`);
        }

        let price = result[key];
        console.log(`  ${name}: ${price}`);
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])