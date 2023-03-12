function cardGame (input) {
    let obj = {};
    let cardsMap = {
        p: {
            'J': 11,
            'Q': 12,
            'K': 13,
            'A': 14,
        },

        t: {
            'S': 4,
            'H': 3,
            'D': 2,
            'C': 1,
        }
    }

    input.forEach(line => {
        let [player, cards] = line.split(': ');

        if (!obj[player]) {
            obj[player] = new Set(cards.split(', '));
        } else {
            cards.split(', ').forEach((card) => {
                obj[player].add(card);
            })
        }
    });

    Object.keys(obj).forEach(key => {
        console.log(`${key}: ${totalPow(obj[key])}`);
    });

    function totalPow (cardSet) {
        let sum = 0;

        cardSet.forEach((card) => {
            let tokens = card.split('');
            let color = tokens.pop();
            let value = tokens.join('');
            let p = 0;

            if (!cardsMap.p[value]) {
                p = Number(value);
            } else {
                p = cardsMap.p[value];
            }

            sum += p * (cardsMap.t[color]);
        });

        return sum;
    }
}

cardGame([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD'])