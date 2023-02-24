function guineaPig (input) {
    let food = Number(input.shift()) * 1000;
    let hay = Number(input.shift()) * 1000;
    let cover = Number(input.shift()) * 1000;
    let weigth = Number(input.shift()) * 1000;
    let goToStore = false;

    for (let day = 1; day <= 30; day++) {
        food = food - 300;

        if (day % 2 === 0) {
            hay -= food * 0.05;
        }

        if (day % 3 === 0) {
            cover -= weigth / 3;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            goToStore = true;
            break;
        }
    }

    return goToStore
        ? `Merry must go to the pet store!`
        : `Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`
}

console.log(guineaPig(['10', '5', '5.2', '1']))