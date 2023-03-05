function phoneBook (input) {
    let book = {};
    
    for (let char in input) {
        let token = input[char].split(' ');
        let name = token[0];
        let num = token[1];
        book[name] = num;
    }

    for (let key in book) {
        console.log(key + ' -> ' + book[key]);
    }
}

phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'])