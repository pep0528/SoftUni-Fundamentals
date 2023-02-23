function gladiatorInventory (input) {
    let arr = input.shift().split(' ');
    
    for (let i = 0; i < input.length; i++) {
        let [com, equip] = input[i].split(' ');

        if (com === 'Buy') {
            if (arr.includes(equip)) {
                continue;
            } else {
                arr.push(equip);
            }
        } else if (com === 'Trash') {
            if (arr.includes(equip)) {
                let index = arr.indexOf(equip);
                arr.splice(index, 1);
            } else {
                continue;
            }
        } else if (com === 'Repair') {
            if (arr.includes(equip)) {
                let index = arr.indexOf(equip);
                arr.splice(index, 1);
                arr.push(equip);
            } else {
                continue;
            }
        } else if (com === 'Upgrade') {
            let tokens = equip.split('-');

            if (arr.includes(tokens[0])) {
                let index = arr.indexOf(tokens[0]);
                arr.splice(index + 1, 0, `${tokens[0]}:${tokens[1]}`);
            } else {
                continue;
            }
        }
    }

    console.log(arr.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'])