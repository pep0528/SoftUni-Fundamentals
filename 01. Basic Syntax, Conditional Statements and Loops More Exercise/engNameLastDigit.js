function engNameLastDigit (input) {
    let n = Number(input[0]);
    let a = n % 10;
    
    if (a == 1) {
        console.log("one");
    } else if (a == 2) {
        console.log("two");
    } else if (a == 3) {
        console.log("three");
    } else if (a == 4) {
        console.log("four");
    } else if (a == 5) {
        console.log("five");
    } else if (a == 6) {
        console.log("six");
    } else if (a == 7) {
        console.log("seven");
    } else if (a == 8) {
        console.log("eight");
    } else if (a == 9) {
        console.log("nine");
    }

}

engNameLastDigit(["1643"])