function meetings (input) {
    let meetings = {};

    for (let char of input) {
        let [day, name] = char.split(' ');

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in meetings) {
        console.log(`${key} -> ${meetings[key]}`);
    }
}

meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])