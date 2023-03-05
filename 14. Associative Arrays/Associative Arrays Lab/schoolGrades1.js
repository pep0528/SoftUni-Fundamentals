function schoolGrades (input) {
    let result = {};

    for (let char of input) {
        let tokens = char.split(' ');
        let student = tokens[0];
        
        for (let i = 1; i < tokens.length - 1; i++) {
            let grades = tokens[i];

            if (!result.hasOwnProperty(student)) {
                result[student] = grades;
            } else {
                grades.forEach(el => {
                    result[student].push(el);
                })
            }
        }
    }

    let output = Object.entries(result).sort((a, b) => {
        avg(a[1]) - avg(b[1]);
    })

    for (let [key, value] of output) {
        console.log(`${key}: ${value.join(', ')}`);
    }

    function avg (array) {
        let sum = 0;

        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }

        return sum / array.length;
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])