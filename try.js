
var string1 = '123123'

var y = false;


function validatePassword(password1, password2) {

    for  (let a=0; a < password1.length; a++) {

        if (isNumber((password1.charAt(a)))) {
            if (a == password1.length-1) { // return false after last loop (only numbers in the string)
                return false;
            }

            continue;
        }

        if ((password1.charAt(a)).toLowerCase() === password1.charAt(a)) {
            return true; 
        }

        if (a == password1.length-1) { // return false after last loop (no uppercase characters in the string)
            return false;
        }
    }


}

function isNumber(x) {
    for (let b=0; b < 10; b++) { // check if a character is from is equal to 1:9
        if (x == b) {
            return true;
        }
    }

    return false;
}

console.log(validatePassword(string1,string1))