function radioCrystals (arr) {
    let desiredThickness = arr[0];

    for (let i = 1; i < arr.length; i++) {
        let currentThickness = arr[i];
        console.log(`Processing chunk ${currentThickness} microns`);

        let cuts = 0;
        let laps = 0;
        let grinds = 0;
        let etches = 0;

        while (currentThickness !== desiredThickness) {
            while (cutting(currentThickness) >= desiredThickness) {
                currentThickness = cutting(currentThickness);
                cuts++;
            }

            if (cuts > 0) {
                console.log(`Cut x${cuts}`);
                console.log('Transporting and washing');
                currentThickness = transport(currentThickness);
            }

            while (lapping(currentThickness) >= desiredThickness) {
                currentThickness = lapping(currentThickness);
                laps++;
            }

            if (laps > 0) {
                console.log(`Lap x${laps}`);
                console.log('Transporting and washing');
                currentThickness = transport(currentThickness);
            }

            while (grinding(currentThickness) >= desiredThickness) {
                currentThickness = grinding(currentThickness);
                grinds++;
            }

            if (grinds > 0) {
                console.log(`Grind x${grinds}`);
                console.log('Transporting and washing');
                currentThickness = transport(currentThickness);
            }

            while (etching(currentThickness) >= desiredThickness - 1) {
                currentThickness = etching(currentThickness);
                etches++;
            }

            if (etches > 0) {
                console.log(`Etch x${etches}`);
                console.log('Transporting and washing');
                currentThickness = transport(currentThickness);
            }

            if (currentThickness < desiredThickness) {
                currentThickness = xRay(currentThickness);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${currentThickness} microns`);
    }

    //op cut (/4)
    function cutting (c) {
        let cut = c / 4;
        return cut;
    }

    //op lap (-20%)
    function lapping (l) {
        let lap = l - (0.2 * l);
        return lap;
    }

    //op grind (-20)
    function grinding (g) {
        let grind = g - 20;
        return grind;
    }

    //op etch (-2)
    function etching (e) {
        let etch = e - 2;
        return etch;
    }

    //op x-ray (+1)
    function xRay (x) {
        let xray = x + 1;
        return xray;
    }

    //op transport (Math.floor)
    function transport (t) {
        let wash = Math.floor(t);
        return wash;
    }
}

radioCrystals([1375, 50000])