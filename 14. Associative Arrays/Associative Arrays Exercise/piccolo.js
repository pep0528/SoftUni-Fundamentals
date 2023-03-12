function piccolo (input) {
    let vehicles = [];

    for (let char of input) {
        let [direction, num] = char.split(', ');

        if (direction === 'IN') {
            vehicles.push(num);
        } else if (direction === 'OUT') {
            if (vehicles.includes(num)) {
                let index = vehicles.indexOf(num);
                vehicles.splice(index, 1);
            }
        }    
    }

    if (vehicles.length > 0) {
        let sorted = vehicles.sort((a, b) => a.localeCompare(b));

        for (let n of sorted) {
            console.log(num);
        }
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])