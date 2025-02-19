const { validate } = require("uuid");

function validatePassword(password1, password2) {
    if (password1 === password2) { // check if the two passwords are the same

        if (password1.length >= 8) { // check if the password is at least 8 characters
            
            // check if the password has at least one number
            for  (let a=0; a < password1.length; a++) {

                if (isNumber(password1.charAt(a))) { // check if a character is from is equal to 1:9
                    break;
                } 

                if (a == password1.length-1) { // return false after last loop (no numbers in the string)
                    return false;
                }
            }

            // check if the password has at least one uppercase character
            for  (let a=0; a < password1.length; a++) {

                if (isNumber((password1.charAt(a)))) {
                    if (a == password1.length-1) { // return false after last loop (only numbers in the string)
                        return false;
                    }
        
                    continue;
                }
        
                if ((password1.charAt(a)).toUpperCase() === password1.charAt(a)) {
                    break; 
                }
        
                if (a == password1.length-1) { // return false after last loop (no uppercase characters in the string)
                    return false;
                }
            }

            // check if the password has at least one lowercase character
            for  (let a=0; a < password1.length; a++) {

                if (isNumber((password1.charAt(a)))) {
                    if (a == password1.length-1) { // return false after last loop (only numbers in the string)
                        return false;
                    }
        
                    continue;
                }
        
                if ((password1.charAt(a)).toLowerCase() === password1.charAt(a)) {
                    break; 
                }
        
                if (a == password1.length-1) { // return false after last loop (no uppercase characters in the string)
                    return false;
                }
            }

            return true; // return true if all requirements are checked

        } else {
            return false; // password is not at least 8 characters
    }
    } else {
        return false; // the two passwords are not the same
    }
};

function isNumber(x) { // function that checks if a string is numerical
    for (let b=0; b < 10; b++) { // check if a character is from is equal to 1:9
        if (x == b) {
            return true;
        }
    }

    return false;
}; 

