function storage (input) {
    let map = new Map();

    for (let char of input) {
        let tokens = char.split(' ');
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, +quantity);
        } else {
            let currQuant = map.get(product);
            let newQuant = currQuant += quantity;
            map.set(product, newQuant);
        }
    }

    for (let key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])