function oddAndEvenSum (n) {
    n = n.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 0; i < n.length; i++) {
        if (Number(n[i]) % 2 === 0) {
            evenSum += Number(n[i]);
        } else {
            oddSum += Number(n[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(3495892137259234)