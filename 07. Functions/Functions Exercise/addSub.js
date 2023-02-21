function addAndSubtract (n1, n2, n3) {
    function sum (n1, n2) {
        return n1 + n2;
    }
    
    function subtract (n1, n2) {
        return n1 - n2;
    }
    
    let sum1 = sum(n1, n2);
    let result = subtract(sum1, n3);
    return result;
}

console.log(addAndSubtract(23, 6, 10));