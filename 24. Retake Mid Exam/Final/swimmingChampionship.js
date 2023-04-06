function swimmingChampionship (input) {
    let days = input[0];
    let pointsNeeded = input[1];
    let swimmers = input[2];
    let roomPerOne = input[3];
    let feePerOne = input[4];
    let expenses = (swimmers * roomPerOne * days) + (swimmers * feePerOne);
    let points = 0;
    isSuccess = false;
    let count = 0;
    let money = 0;

    for (let index = 5; index < input.length; index++) {
        let point = Number(input[index]);

        if (count >= 1) {
            point += point * 0.05;
        }
        points += point;
        count++;
    }

    if (points >= pointsNeeded) {
        isSuccess = true;
        money = expenses - (expenses * 0.25)
        console.log(`Money left to pay: ${money.toFixed(2)} BGN.`);
        console.log(`The championship was successful!`);
    } else {
        money = expenses - (expenses * 0.1)
        console.log(`Money left to pay: ${money.toFixed(2)} BGN.`);
        console.log(`The championship was not successful.`);
    }
}

swimmingChampionship(["3",
"500",
"5",
"100.9",
"50.1",
"100.5",
"301.0",
"80.0"])
