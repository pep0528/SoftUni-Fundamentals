function train (input) {
    let arr = input.shift().split(' ').map(Number);
    let capacity = Number(input.shift())
    
    for (let i = 0; i < input.length; i++) {
        let [n, m] = input[i].split(' ');

        if (n === 'Add') {
            m = Number(m);
            arr.push(m);
        } else {
            n = Number(n);

            for (let j = 0; j < arr.length; j++) {
                if (arr[j] + n <= capacity) {
                    arr[j] += n;
                    break;
                }
            }
        }
    }

    console.log(arr.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75'])