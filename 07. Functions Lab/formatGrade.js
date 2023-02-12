function formatGrade (grade) {
    let text = '';

    if (grade < 3.00) {
        text = 'Fail';
    } else if (grade < 3.50) {
        text = 'Poor';
    } else if (grade < 4.50) {
        text = 'Good';
    } else if (grade < 5.50) {
        text = 'Very good';
    } else {
        text = 'Excellent';
    }

    let output = grade < 3 ? '2' : grade.toFixed(2);

    console.log(`${text} (${output})`);
}

formatGrade(2.99)