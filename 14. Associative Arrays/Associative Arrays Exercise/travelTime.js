function travelTime (input) {
    let result = {};

    for (let line of input) {
        let [state, city, price] = line.split(' > ').map(x => x.trim());
        city = city.charAt(0).toUpperCase() + city.splice(1);

        if (result.hasOwnProperty(state)) {
            result[state] = {};
        }

        if (!result[state].hasOwnProperty(city)) {
            result[state][city] = Number.POSITIVE_INFINITY;
        }

        if (result[state].hasOwnProperty(city)) {
            if (result[state][city] > Number(price)) {
                result[state][city] = Number(price);
            }
        }
    }

    let sortedStates = Object.keys(result).sort((a, b) => {
        'use strict';
        return a.toLowerCase().localeCompare(b.toLowerCase);
    });

    for (let state of sortedStates) {
        let innerRes = '';
        innerRes += (state + ' -> ');
        let sortedCitiesPrice = Object.keys(result[state]).sort((c1, c2) => {
            'use strict';
            return result[state][c1] - result[state][c2];
        });

        for (let obj of sortedCitiesPrice) {
            innerRes += (obj + ' -> ');
            innerRes += (result[state][obj + '']);
        }

        console.log(innerRes.trim());
    }
}

travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"])