function bitcoinMining (array) {
    let bitcoin = 11949.16;
    let gold = 67.51;
    let totalSum = 0;
    let day = 0;
    let firstDay = 0;
    let purchasedBit = 0;
    let countBit = 0;
    let sumBit = 0;

    for (let index = 0; index < array.length; index++) {
        day++;
        let component = array[index];

        if (day % 3 == 0) {
            component = component * 0.7;
        }

        let oneDayEarn = component * gold;
        totalSum += oneDayEarn;

        if (totalSum >= bitcoin) {
            countBit++;
            purchasedBit = Math.floor(totalSum / bitcoin);
            totalSum = totalSum - (bitcoin * purchasedBit);
            sumBit += purchasedBit;
        }

        if (countBit == 1) {
            firstDay = day;
        }
    }

    console.log(`Bought bitcoins: ${sumBit}`);

    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }

    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300])