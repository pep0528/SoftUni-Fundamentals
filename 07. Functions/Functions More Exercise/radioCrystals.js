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
            while (currentThickness / 4 >= desiredThickness) {
                currentThickness = cutting(currentThickness);
                cuts++;
            }

            if (cuts > 0) {
                console.log(`Cut x${cuts}`);
                console.log('Transporting and washing');
                currentThickness = Math.floor(currentThickness);
            }

            while (currentThickness - currentThickness * 0.2 >= desiredThickness) {
                currentThickness = lapping(currentThickness);
                laps++;
            }

            if (laps > 0) {
                console.log(`Lap x${laps}`);
                console.log('Transporting and washing');
                currentThickness = Math.floor(currentThickness);
            }

            while (currentThickness - 20 >= desiredThickness) {
                currentThickness = grinding(currentThickness);
                grinds++;
            }

            if (grinds > 0) {
                console.log(`Grind x${grinds}`);
                console.log('Transporting and washing');
                currentThickness = Math.floor(currentThickness);
            }

            while (currentThickness - 2 >= desiredThickness) {
                currentThickness = etching(currentThickness);
                etches++;
            }

            if (etches > 0) {
                console.log(`Etch x${etches}`);
                console.log('Transporting and washing');
                currentThickness = Math.floor(currentThickness);
            }

            if (currentThickness < desiredThickness) {
                currentThickness = xRay(currentThickness);
                console.log(`X-ray x1`);
            }
        }

        console.log(`Finished crystal ${desiredThickness} microns`);

        // op cut (crystal / 4)

        function cutting (c) {
            let cut = c / 4;
            return cut;
        }

        // op lap (crystal - crystal * 0.2)

        function lapping (l) {
            let lap = l * 0.2;
            return lap;
        }

        // op grind (crystal - 20)

        function grinding (g) {
            let grind = g - 20;
            return grind;
        }

        // op etch (crystal - 2)

        function etching (e) {
            let etch = e - 2;
            return etch;
        }

        // op x-ray (crystal + 1 [do it once])

        function xRay (x) {
            let xRays = x + 1;
            return xRays;
        }
    }
}

radioCrystals([1375, 50000])