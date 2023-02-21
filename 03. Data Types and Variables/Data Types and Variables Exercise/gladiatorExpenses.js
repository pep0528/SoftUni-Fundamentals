function gladiatorExpenses (defeats, helmet, sword, shield, armor) {
    let sum = 0;

    for (let i = 1; i <= defeats; i++) {
        if (i % 2 === 0) {
            sum += helmet;
        }

        if (i % 3 === 0) {
            sum += sword;
        }

        if (i % 6 === 0) {
            sum += shield;
        }

        if (i % 12 === 0) {
            sum += armor;
        }
    }

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}

gladiatorExpenses(23, 12.5, 21.5, 40, 200)