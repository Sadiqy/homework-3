let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#',
    '$', '^', '?', ':', ',', ')', '(', '}',
    '{', ']', '[', '~', '-', '_', '.'];


let lowerCasedLetters = ['a','b','c','d','e','f','g',
                            'h','i','j','k','l','m','n',
                            'o','p','q','r','s','t','u',
                            'v','w','x','y','z'];

let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let upperCasedLetters = ['A','B','C','D','E','F',
                            'G','H','I','J','K','L',
                            'M','N','O','P','Q','R',
                            'S','T','U','V','W','X',
                            'Y','Z'];

function PasswordRequirements () {

    let length = parseInt(
        
        prompt("What would you like the length of your password to be?")
        );

        if (isNaN(length) === true) {

            alert('Please type in a number as your password length.');
            return;
        }

        if (length > 129) {

            alert("Sorry, your password length must be between 8 and 129 characrers.");
        }



        if (length < 8) {

            alert('Sorry, your password length must be between 8 and 129 characters.');

            return;
        }

        let containsNumbers = 
        confirm("click OK to add numbers.");

        let containsSpecialCharacters = 
        confirm("Click OK to add special characters.");

        let containsLowercasedLetters = 
        confirm("Click OK to add lowercased letters.");

        let containsUppercasedLetters = 
        confirm("Click OK to add Uppercased Letter.");

        if (
            containsSpecialCharacters === false &&

            containsNumbers === false &&

            containsUppercasedLetters === false &&

            containsLowercasedLetters === false
          ) {
            alert('Please select at least one character type');
            return;
          }
}

let generateBtn = document.querySelector('#generate');

function writePassword() {

    let password = PasswordRequirements();
    let passwordText = document.querySelector('#password');

    passwordText.value = password;
}

generateBtn.addEventListener('click', writePassword);

  