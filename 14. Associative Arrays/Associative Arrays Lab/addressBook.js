function addressBook (input) {
    let book = {};

    for (let char of input) {
        let [name, address] = char.split(':');
        book[name] = address;
    }

    let sorted = Object.entries(book);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let res of sorted) {
        let name = res[0];
        let address = res[1];
        console.log(`${name} -> ${address}`);
    }
    
}

addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])