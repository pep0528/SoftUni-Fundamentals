function sequences (input) {
    input = input.map(el => JSON.parse(el));
    input.forEach(el => el.sort((a, b) => b - a));
    let result = [];

    for (let i = 0; i < input.length; i++) {
        let curr = input[i];
        let isUnique = true;

        for (let j = 0; j < result.length; j++) {
            let nextArr = result[j];
            
            if (nextArr.toString() === curr.toString()) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            result.push(curr);
        }
    }

    result.sort((a, b) => a.length - b.length);
    result.forEach(el => console.log(`[${el.join(', ')}]`));
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"])