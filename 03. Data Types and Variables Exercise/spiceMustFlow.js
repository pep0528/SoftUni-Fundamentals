function spiceMustFlow (yield) {
    let totalExtract = 0;
    let days = 0;

    while (yield >= 100) {
        totalExtract += (yield - 26);
        yield -= 10;
        days++;
    }

    totalExtract -= 26;
    
    if (totalExtract < 0) {
        totalExtract = 0;
    }

    console.log(days);
    console.log(totalExtract);
}

spiceMustFlow(111)