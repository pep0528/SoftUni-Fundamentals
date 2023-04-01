function pirates (input) {
    let listObj = {};
    let command = input.shift();

    while (command != 'Sail') {
        let commandTowns = command.split('||');
        let town = commandTowns[0];
        let population = Number(commandTowns[1]);
        let gold = Number(commandTowns[2]);

        if (listObj.hasOwnProperty(town)) {
            listObj[town].population += population;
            listObj[town].gold += gold;
        } else {
            listObj[town] = {
                population: population,
                gold: gold
            };
        }
        command = input.shift();
    }
    command = input.shift();

    while (command != 'End') {
        let nextCommand = command.split('=>');

        if (nextCommand[0] == 'Plunder') {
            let town = nextCommand[1];
            let people = Number(nextCommand[2]);
            let gold = Number(nextCommand[3]);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            listObj[town].population -= people;
            listObj[town].gold -= gold;

            if ((listObj[town].population <= 0) || (listObj[town].gold <= 0)) {
                console.log(`${town} has been wiped off the map!`);
                delete listObj[town];
            }
        } else if (nextCommand[0] == 'Prosper') {
            let town = nextCommand[1];
            let gold = Number(nextCommand[2]);

            if (gold < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                listObj[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${listObj[town].gold} gold.`);
            }
        }
        command = input.shift();
    }

    let workArr = Object.entries(listObj);
    let sorted = workArr.sort((a, b) => {
        if (a[1].gold == b[1].gold) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].gold - a[1].gold;
        }
    });
    console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

    for (let kvp of sorted) {
        console.log(`${kvp[0]} -> Population: ${kvp[1].population} citizens, Gold: ${kvp[1].gold} kg`);
    }
}

pirates((["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]))