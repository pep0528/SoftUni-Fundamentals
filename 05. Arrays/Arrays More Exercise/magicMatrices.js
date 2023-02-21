function magicMatrices (arr) {
    let rowSum = row => arr[row]
        .reduce((a, b) => a + b);
    let colSum = col => arr.map(row => row[col])
        .reduce((a, b) => a + b);

        if (arr.length > 0) {
            let targetSum = rowSum(0);

            for (let i = 1; i < arr.length; i++) {
                let sumRow = rowSum(i);

                if (sumRow !== targetSum) {
                    console.log('false');
                }
            }

            for (let j = 0; j < arr[0].length; j++) {
                let sumCol = colSum(j);

                if (sumCol !== targetSum) {
                    console.log('false');
                }
            }
        }

        console.log('true');
}

magicMatrices([
[4, 5, 6],
[6, 5, 4], 
[5, 5, 5]
])