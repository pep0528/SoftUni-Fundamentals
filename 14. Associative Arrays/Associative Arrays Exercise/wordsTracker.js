function wordsTracker (input) {
    let wordsNeeded = input.shift().split(' ');
    let counter = 0;
    let obj = [];

    for (let i = 0; i < wordsNeeded.length; i++) {
        input.forEach(el => {
            if (wordsNeeded[i] === el) {
                counter++;
            }
        });

        let word = wordsNeeded[i];
        let count = counter;
        obj.push({ word, count });
        counter = 0;
    }

    obj.sort((a, b) => b.count - a.count);

    for (let i = 0; i < obj.length; i++) {
        console.log(`${obj[i].word} - ${obj[i].count}`);
    }
}

wordsTracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])