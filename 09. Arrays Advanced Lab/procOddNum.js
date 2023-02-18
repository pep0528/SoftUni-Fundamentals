function processOddNumbers (arr) {
    let result = arr 
        result.filter((num, i) => i % 2 == 1);
        result.map(x => 2 * x);
        result.reverse();
    
    return result.join(' ');
}

console.log(processOddNumbers([3, 0, 10, 4, 7, 3]))