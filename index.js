
function validatePassword(password1, password2) {
    if (password1 === password2) { // check if the two passwords are the same

        if (password1.length >= 8) { // check if the password is at least 8 characters
            
            // check if the password has at least one number
            for  (let a=0; a < password1.length; a++) {

                if (isNumber(password1.charAt(a))) { // check if a character is from is equal to 1:9
                    break;string0 = ''
                    string1 = 'abcd'
                    
                    
                    console.log(string1.length)
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

function reversePassword(password) { // function that reverses the password
    var reversed = '';

    for (let a=0; a<password.length; a++) {
        reversed = reversed + password[password.length-a-1] 
    }

    return reversed;

}

function storePassword(name, password1, password2) { // function that stores name and password to an object
    
    // check if the password is valid
    if (validatePassword(password1, password2)) {
        var passwordOutput = reversePassword(password1);
    } else {
        var passwordOutput = password1;
    }
    
    var objectOutput = {
        name: name,
        newpassword: passwordOutput
    }

    return(objectOutput)
}

console.log(validatePassword('helloworld', 'hello')) // returns false
console.log(validatePassword('hello', 'hello')) // returns false
console.log(validatePassword('hello1234', 'hello1234')) // returns false
console.log(validatePassword('Hello1234', 'Hello1234')) // returns true
console.log(validatePassword('HELLO1234', 'HELLO1234')) // returns false

console.log(storePassword("John", "Pass1234", "Pass1234"))
console.log(storePassword("John", "Pass123", "Pass12345"))

