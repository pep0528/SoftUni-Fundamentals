function cutAndReverse (input) {
    let arr = input.split('').reverse().join('');
    let res = [];
    let res2 = [];

    for (let i = 0; i < arr.length / 2; i++) {
        res.push(arr[i]);
    }

    for (let y = arr.length / 2; y < arr.length; y++) {
        res2.push(arr[y]);
    }

    console.log(res2.join(''));
    console.log(res.join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')