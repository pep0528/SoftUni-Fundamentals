function weaponsmith (input) {
    let weapon = input.shift().split('|');
    let line = input.shift();

    while (line !== 'Done') {
        let [command, first, second] = line.split(' ');

        if (command === 'Add') {
            add (first, second);
        } else if (command === 'Remove') {
            remove (first);
        } else if (command + ' ' + first === 'Check Even') {
            even (weapon);
        } else if (command + ' ' + first === 'Check Odd') {
            odd (weapon);
        }
        line = input.shift();
    }
    console.log(`You crafted ${weapon.join('')}!`);

    function add (particle, index) {
        if (index > 0 && index < weapon.length) {
            weapon.splice(index, 0, particle);
        }
    }

    function remove (index) {
        if (index => 0 && index <= weapon.length) {
            weapon.splice(index, 1);
        }
    }

    function even (word) {
        let result = [];
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                result.push(word[i]);
            }
        }
        console.log(result.join(' '));
    }

    function odd (word) {
        let result = [];
        for (let i = 0; i < word.length; i++) {
            if (i % 2 !== 0) {
                result.push(word[i]);
            }
        }
        console.log(result.join(' '));
    }
}

weaponsmith(["As|hb|ri|ng|er",
"Remove 10",
"Add lo 5",
"Check Odd",
"Done"])
