function experienceGaining (arr) {
    let desiredXP = arr[0];
    let battles = arr[1];
    let XP = 0;
    let battleCount = 0;
    let isUnlocked = false;

    for (let i = 2; i < arr.length; i++) {
        let currentXP = arr[i];
        battleCount++;

        if (battleCount % 3 === 0) {
            currentXP += currentXP * 0.15;
        }

        if (battleCount % 5 === 0) {
            currentXP -= currentXP * 0.1;
        }

        if (battleCount % 15 === 0) {
            currentXP += currentXP * 0.15;
        }

        XP += currentXP;

        if (XP >= desiredXP) {
            isUnlocked = true;
            break;
        }
    }

    if (isUnlocked) {
        console.log(`Player successfully collected his needed experience for ${battleCount} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(desiredXP - XP).toFixed(2)} more needed.`);
    }
}

experienceGaining([400, 5, 50, 100, 200, 100, 20])