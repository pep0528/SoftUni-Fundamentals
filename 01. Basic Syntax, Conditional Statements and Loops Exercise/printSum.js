function printSum (num1, num2) {
    let sum = 0;
    let buffNum = "";

    for (let i = num1; i <= num2; i++) {
        buffNum += i + " ";
        sum += i;
    }

    console.log(buffNum);
    console.log(`Sum: ${sum}`);
}

printSum(5, 10)