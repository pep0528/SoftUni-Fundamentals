function arrayManipulations (input) {
    let arr = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add':
                add(firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum);
                break;
            case 'Insert':
                insert(firstNum, secondNum);
                break;
        }
    }

    function add (n) {
        arr.push(n);
    }

    function remove (n) {
        arr = arr.filter(el => el !== n);
    }

    function removeAt (index) {
        arr.splice(index, 1);
    }

    function insert (n, index) {
        arr.splice(index, 0, n);
    }

    console.log(arr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3'])