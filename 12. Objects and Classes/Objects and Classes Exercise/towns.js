function towns (arr) {
    let objects = [];

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i].split(' | ');
        let town = row[0];
        let latitude = parseFloat(row[1]).toFixed(2);
        let longitude = parseFloat(row[2]).toFixed(2);
        objects.push({town, latitude, longitude});
    }

    for (let el of objects) {
        console.log(el);
    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])