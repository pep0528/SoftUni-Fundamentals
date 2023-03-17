function stringSubstring (word, text) {
    text = text.toLowerCase().split(' ');
    let isFound = false;
    
    for (let el of text) {
        if (el === word) {
            isFound = true;
            console.log(el);
            break;
        } 
    }

    if (!isFound) {
        console.log(`${word} not found!`);
    }
}

stringSubstring('python',
'JavaScript is the best programming language')