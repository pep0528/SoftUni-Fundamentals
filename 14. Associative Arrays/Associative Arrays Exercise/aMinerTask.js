function aMinerTask (input) {
    let output = [];

    for (let el of input) {
        output.push(el);
    }

    let result = new Map();

    for (let i = 0; i < output.length; i += 2) {
        let resource = input[i];
        let quantity = parseInt(output[i + 1]);

        if (resource in result) {
            result[resource] += quantity;
        } else {
            result[resource] = quantity;
        }
    }

    for (let key in result) {
        if (result.hasOwnProperty(key)) {
            console.log(`${key} -> ${result[key]}`);
        }
    }
}

aMinerTask([
'Gold',
'155',
'Silver',
'10',
'Copper',
'17'])