function race (input) {
    let racers = input.shift().split(', ');
    let line = input.shift();
    let result = {}

    while (line !== 'end of race') {
        let names = /[A-Za-z]/g;
        let name = line.match(names).join('');
        let digits = /[0-9]/g;
        let distance = line.match(digits).join('');
        let fullDistance = 0;

        for (let i = 0; i < distance.length; i++) {
            let digit = Number(distance[i]);
            fullDistance += digit;
        }

        if (racers.includes(name)) {
            if (!result.hasOwnProperty(name)) {
                result[name] = fullDistance;
            } else {
                result[name] += fullDistance;
            }
        }
        line = input.shift();
    }
    let arr = [];

    for (char in result) {
        arr.push([char, result[char]]);
    }

    arr.sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${arr[0][0]}`);
    console.log(`2nd place: ${arr[1][0]}`);
    console.log(`3rd place: ${arr[2][0]}`);
}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race'])