function schoolGrades (input) {
    let list = input.reduce((acc, curr, index) => {
        let [name, ...grades] = curr.split(' ');
        grades = grades.map((g) => Number(g));
        let currStudent = acc.find((s) => s.name === name);

        if (currStudent) {
            currStudent.grades.push(...grades);
        } else {
            currStudent = {
                name, 
                grades,
                average: 0,
            };

            acc.push(currStudent);

        }

        const totalGrades = currStudent.grades.reduce((acc, curr) => {
            acc += curr;
            return acc;
        }, 0);

        currStudent.average = (totalGrades / currStudent.grades.length).toFixed(2);
        return acc;
    }, []);

    list = list.sort((a, b) => a.name.localeCompare(b.name));
    list.forEach((stu) => console.log(`${stu.name}: ${stu.average}`));
}

schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])