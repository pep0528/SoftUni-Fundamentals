function messageEncrypter (input) {
    let numIndicates = Number(input.shift());
    let pattern = /^"([*@])(?<tag>[A-Za-z]{3,})$"/;
    //"*Request*: [I]|[s]|[i]|"

    for (let line of input) {
        let matches = line.match(pattern);

        if (matches > 0) {
            //word1 = word1.charCodeAt(0)
            //word2 = word2.charCodeAt(0)
            //word3 = word3.charCodeAt(0)
            //console.log(`${tag}: ${word1} ${word2} ${word3}`)
        } else {
            console.log('Valid message not found!');
        }
    }
}

messageEncrypter(["3",
"*Request*: [I]|[s]|[i]|",
"*Taggy@: [73]|[73]|[73]|",
"Should be valid @Taggy@: [v]|[a]|[l]|"])
