function chessBoard (n) {
    let currCol = 'black';
    let prevCol = '';
    console.log('<div class="chessboard">');

    for (let row = 0; row < n; row++) {
        console.log('\t<div>');

        for (let col = 0; col < n; col++) {
            console.log(`\t\t<span class="${currCol}"></span>`);
            prevCol = currCol;
            currCol = prevCol === 'black' ? 'white' : 'black';
        }

        console.log('\t</div>');

        if (n % 2 === 0) {
            prevCol = currCol;
            currCol = prevCol === 'black' ? 'white' : 'black';
        }
    }

    console.log('</div>');

}

chessBoard(3)