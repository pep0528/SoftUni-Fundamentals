function pointsValidation (arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];

    let point1 = pointOne(arr);
    let point2 = pointTwo(arr);
    let point3 = pointThree(arr);

    // print result

    if (point1 === Math.trunc(point1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (point2 === Math.trunc(point2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (point3 === Math.trunc(point3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    // check first point 

    function pointOne () {
        let one = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return one;
    }

    // check second point

    function pointTwo () {
        let two = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return two;
    }

    // check third point

    function pointThree () {
        let three = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
        return three;
    }
}

pointsValidation([3, 0, 0, 4])