function diagonalAttack (arr) {
    let matrix = arr.map(
        row => row.split(' ').map(Number));

    let sumFirstDia = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumFirstDia = sumFirstDia + matrix[i][i];
    }

    let sumSecDia = 0;

    for (let j = 0; j < matrix.length; j++) {
        sumSecDia = sumSecDia + matrix[j][matrix.length -1 -j];
    }

    if (sumFirstDia == sumSecDia) {
        for (let x = 0; x < matrix.length; x++) {
            for (let y = 0; y < matrix.length; y++) {
                if (x != y && x != matrix.length -1 -y) {
                    matrix[x][y] = sumFirstDia;
                }
            }
        }

        printMatrix(matrix);
    } else {
        printMatrix(matrix);
    }

    function printMatrix(matrix) {
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '));
        }
    }
}

diagonalAttack
(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'])