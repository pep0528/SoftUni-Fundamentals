function equalNeighbours (matrix) {
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];

        for (let j = 0; j < row.length; j++) {
            let col = row[j];

            if (i !== matrix.length - 1) {
                if (col === row[j + 1]) {
                    count++;
                }

                if (col === matrix[i + 1][j]) {
                    count++;
                }
            } else if (col === row[j + 1] || col === matrix[i][j + 1]) {
                count++;
            }
        }
    }

    console.log(count);
}

equalNeighbours
([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])