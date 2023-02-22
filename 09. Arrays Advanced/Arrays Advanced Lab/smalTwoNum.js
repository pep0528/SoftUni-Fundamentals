function smallestTwoNumbers (arr) {
    let sorted = arr.sort((a, b) => {
        return a - b;
    });

    let newArr = sorted.splice(0, 2);
    console.log(newArr.join(' '));
}

smallestTwoNumbers([3, 0, 10, 4, 7, 3])