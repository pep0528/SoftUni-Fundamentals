function oddOccurrences (input) {
    let lower = input.split(' ').map(el => el.toLowerCase());
    let obj = new Map();

    for (let first of lower) {
        let count = 0;

        for (let second of lower) {
            if (first === second) {
                count++;
            }
        }

        obj.set(first, count);
    }

    let filtered = Array.from(obj.entries()).filter(([word, count]) => count % 2 == 1);
    let result = [];

    for (let [word, num] of filtered) {
        result.push(word);
    }

    console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')