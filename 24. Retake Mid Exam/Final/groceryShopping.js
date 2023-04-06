function groceryShopping (input) {
    let list = input.shift().split('|');
    let line = input.shift();

    while (line !== 'Shop!') {
        let [command, item, newItem] = line.split('%')

        switch (command) {
            case 'Important':
                important(item);
                break;
            case 'Add':
                add(item);
                break;
            case 'Swap':
                swap(item, newItem);
                break;
            case 'Remove':
                remove(item);
                break;
            case 'Reversed':
                reverse(list);
        }
        line = input.shift();
    }
    
    for (let i = 0; i < list.length; i++) {
        console.log((i + 1) + '. ' + list[i]);
    }

    function important (product) {
        if (list.includes(product)) {
            let index = list.indexOf(product);
            list.splice(index, 1);
            list.unshift(product);
        } else {
            list.unshift(product);
        }
    }

    function add (product) {
        if (list.includes(product)) {
            console.log('The product is already in the list.');
        } else {
            list.push(product);
        }
    }

    function swap (product, newP) {
        if (list.includes(product) && list.includes(newP)) {
            let index1 = list.indexOf(product);
            let index2 = list.indexOf(newP);
            list.splice(index1, 1, newP);
            list.splice(index2, 1, product);
        } else if (!list.includes(product)) {
            console.log(`Product ${product} missing!`);
        } else if (!list.includes(newP)) {
            console.log(`Product ${newP} missing!`);
        }
    }

    function remove (product) {
        if (list.includes(product)) {
            let index = list.indexOf(product);
            list.splice(index, 1);
        }
    }

    function reverse (list) {
        list.reverse();
    }
}

groceryShopping(["kiwi|paper|coffee",
"Add%coffee",
"Important%bread",
"Shop!"])


