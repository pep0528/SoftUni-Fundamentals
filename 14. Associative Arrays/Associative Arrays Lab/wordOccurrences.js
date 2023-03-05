function wordOccurrences (input) {
    let map = new Map();
    let words = 0;

    for (let el of input) {
        if (!map.has(el)) {
            words = 1;
        } else {
            words = map.get(el) + 1;
        }

        map.set(el, words);
    }

    let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

    for (let [word, times] of sorted) {
        console.log(`${word} -> ${times} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])