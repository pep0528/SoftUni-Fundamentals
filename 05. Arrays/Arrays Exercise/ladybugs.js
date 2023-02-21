function ladybugs (input) {
    let field = [];
    let size = Number(input[0]);

    for (let i = 0; i < size; i++) {
        field[i] = 0;
    }

    let indexOfLadybugs = input[1].split(' ');

    for (let i = 0; i < indexOfLadybugs.length; i++) {
        let index = indexOfLadybugs[i];

        if (field[index] !== undefined) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let commands = input[i].split(' ');
        let bugIndex = Number(commands[0]);
        let direction = commands[1];
        let flight = Number(commands[2]);

        if (bugIndex >= field.length || bugIndex < 0 || field[bugIndex] == 0) {
            continue;
        }

        field[bugIndex] = 0;
        let isFlying = true;

        if (direction === 'right') {
            while (isFlying) {
                if (field[bugIndex + flight] === 0) {
                    field[bugIndex + flight] = 1;
                    isFlying = false;
                } else if (field[bugIndex + flight] === 1) {
                    flight += flight;
                } else {
                    isFlying = false;
                }
            }
        } else {
            while (isFlying) {
                if (field[bugIndex - flight] === 0) {
                    field[bugIndex - flight] = 1;
                    isFlying = false;
                } else if (field[bugIndex - flight] === 1) {
                    flight += flight;
                } else {
                    isFlying = false;
                }
            }
        }
    }

    console.log(field.join(' '));
}

ladybugs([ 3, '0 1','0 right 1','2 right 1' ])