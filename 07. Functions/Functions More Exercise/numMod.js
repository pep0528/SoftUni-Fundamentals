function numberModification (num) {
    while (getAverage(num) < 5) {
        num += '9';
    }

    return num;

    function getSum (number) {
        let numStr = number.toString();
        let sum = 0;

        for (let i = 0; i < numStr.length; i++) {
            sum += Number(numStr[i]);
        }

        return sum;
    }

    function getAverage (n) {
        return getSum(n) / n.toString().length;
    } 
}

console.log(numberModification(5835))