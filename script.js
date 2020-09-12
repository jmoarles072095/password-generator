document.querySelector("#generate").addEventListener("click", writePassword);

var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];




function generatePassword() {
    var confirmLength = (prompt("How many characters would your new password be?, coose a number between 10 and 120"));
    if (confirmLength <= 9 || confirmLength >= 121) {
        alert("Password must be a minimun of 10 or maximum of 120 characters");
        var confirmLength = (prompt("How many characters would you like your password to contain?"));
    }

    var confirmSymbols = confirm("Will your new password contain Symbols?");
    var confirmNumbers = confirm("Will your new password contain Numbers?");
    var confirmLowerCase = confirm("Will your new password contain Lower Case letters?");
    var confirmUpperCase = confirm("Will your new password contain Upper Case letters?");
    if (confirmSymbols === false && confirmNumbers === false && confirmLowerCase === false && confirmUpperCase === false) {
        alert("You must choose at least one option to generate the best password ever");
        var confirmSymbols = confirm("Click OK to confirm if you would like to include symbols");
        var confirmNumbers = confirm("Click OK to confirm if you would like to include numbers");
        var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase letters");
        var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase letters");
    }

    var passwordCharacters = []

    if (confirmSymbols) {
        passwordCharacters = passwordCharacters + symbols
    }

    if (confirmNumbers) {
        passwordCharacters = passwordCharacters + numbers
    }

    if (confirmLowerCase) {
        passwordCharacters = passwordCharacters + lowerCase
    }

    if (confirmUpperCase) {
        passwordCharacters = passwordCharacters + upperCase
    }

    console.log(passwordCharacters)

    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
        randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
        console.log(randomPassword)
    }
    return randomPassword;
}


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}