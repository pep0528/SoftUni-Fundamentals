function login (input) {
    let username = input[0];
    let password = "";

    for (let i = username.length - 1; i >= 0; i--) {
        password += username[i];
    }

    let incorrect = 0;

    for (let p = 1; p < input.length; p++) {
        let tempPass = input[p];

        if (tempPass === password) {
            console.log(`User ${username} logged in.`);
        } else {
            incorrect++;

            if (incorrect === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log("Incorrect password. Try again.");
        }
    }
}

login(['Acer','login','go','let me in','recA'])