function schoolRegister (input) {
    let register = {};

    for (let line of input) {
        let tokens = line.split(', ');
        let grade = Number(tokens[1].split(': ')[1]) + 1;
        let name = tokens[0].split(': ')[1];
        let score = Number(tokens[2].split(': ')[1]);

        if (score > 3) {
            let student = {name, score};

            if (!register.hasOwnProperty(grade)) {
                register[grade] = [];
            }

            register[grade].push(student);
        }
    }

    let sorted = Object.keys(register).sort((a, b) => a - b);

    for (let grade of sorted) {
        let students = register[grade];
        console.log(`${grade} Grade`);
        console.log(`List of students: ${students.map(s => s.name).join(', ')}`);
        console.log(`Average annual score from last year: ${average(students.map(s => s.score)).toFixed(2)}`);
        console.log();
    }

    function average (arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
}

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])