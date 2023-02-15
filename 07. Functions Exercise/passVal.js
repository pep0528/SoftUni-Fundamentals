function passwordValidator (pass) {
    // pass must be between 6 -10 chars
    function length (pass) {
        if (pass.length >= 6 && pass.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    // pass must consist only of letters and digits
    function nonSpecChar (text) {
        for (let char of text) {
            let num = char.charCodeAt(0);
            let isLower = checkLowerCase(num);
            let isUpper = checkUpperCase(num);
            let isNumber = checkNumber(num);
        }
    }

    // numbers (48-57) [0-9]
    function checkNumber (num) {
        if (num >= 48 && num <= 57) {
            return true;
        } else {
            return false;
        }
    }

    //uppercase (65-90) [A-Z]
    function checkUpperCase (num) {
        if (num >= 65 && num <= 90) {
            return true;
        } else {
            return false;
        }
    }

    //lowercase (97-122) [a-z]
    function checkLowerCase (num) {
        if (num >= 97 && num <= 122) {
            return true;
        } else {
            return false;
        }
    }
    // pass must have at least 2 digits
    // print to console
}

passwordValidator('login')