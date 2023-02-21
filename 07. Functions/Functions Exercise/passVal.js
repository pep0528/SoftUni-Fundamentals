function passwordValidator (pass) {
    let validLength = checkLength(pass);
    let validSymbol = nonSpecialChars(pass);
    let validDigits = checkNumberOfDigits(pass);
    printResult(validLength, validSymbol, validDigits);

    // pass must be between 6-10 chars
    function checkLength (pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    // pass must consist of letters and nums
    function nonSpecialChars (text) {
        for (let char of text) {
            let num = char.charCodeAt(0);
            let isNumber = charNumbers(num);
            let isUpperCase = charUpperCase(num);
            let isLowerCase = charLowerCase(num);

            if (!isNumber && !isUpperCase && !isLowerCase) {
                return false;
            }
        }
        
        return true;
    }
    // nums 48-57
    function charNumbers (num) {
        if (num >= 48 && num <= 57) {
            return true;
        } else {
            return false;
        }
    }
    // uppercase 65-90
    function charUpperCase (num) {
        if (num >= 65 && num <= 90) {
            return true;
        } else {
            return false;
        }
    }
    // lowercase 97-122
    function charLowerCase (num) {
        if (num >= 97 && num <= 122) {
            return true;
        } else {
            return false;
        }
    }
    // pass must have at least 2 digits
    function checkNumberOfDigits (pass) {
        let counter = 0;
        for (let ch of pass) {
            let isNumber = charNumbers(ch.charCodeAt(0));

            if (isNumber) {
                counter++;
            }
        }

        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }
    // print result to console
    function printResult (length, symbol, digit) {
        if (!length) {
            console.log("Password must be between 6 and 10 characters");
        }

        if (!symbol) {
            console.log("Password must consist only of letters and digits");
        }

        if (!digit) {
            console.log("Password must have at least 2 digits");
        }

        if (length && symbol && digit) {
            console.log("Password is valid");
        }
    }
}

passwordValidator('login')