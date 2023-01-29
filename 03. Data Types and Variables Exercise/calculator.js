function calculator (x, opr, y) {
    switch (opr) {
        case '+':
            console.log((x + y).toFixed(2));
            break;
        case '-':
            console.log((x - y).toFixed(2));
            break;
        case '/':
            console.log((x / y).toFixed(2));
            break;
        case '*':
            console.log((x * y).toFixed(2));
            break;
    }
}

calculator(25.5, '-', 3)