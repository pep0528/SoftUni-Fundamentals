function schoolGrades (input) {
    input.sort();
    let map = new Map();

    for (let char of input) {
        let tokens = char.split(' ');
        let student = tokens[0];
        let grades = 0;
        let amount = 0;

        for (let i = 1; i < tokens.length; i++) {
            let grade = Number(tokens[i]);
            grades++;

            if (!map.has(student)) {
                map.set(student, []);
                amount += grade;
            } else {
                let currGrade = map.get(student);
                map.set(student, []);
                amount = currGrade += grade;
            }
        }

        map.set(student, amount / grades);
    }

    for (let key of map) {
        console.log(`${key[0]}: ${(key[1]).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])