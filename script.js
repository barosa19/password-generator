// Assignment code here
let letters = ["abcdefghijklmnopqrstuvwxyz"];
let arrayLetters = [...letters[0]];
let upperLetters = letters[0].toUpperCase();
let arrayUpperletters = [...upperLetters];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialC = ["!", "@", "#", "$", "%", "^", "&", "*"];
let randomPwd = [];

function generatePassword() {

  //LENGTH CONDITIONS
  let pwdlength = parseInt(prompt("Please indicate desired length of password"),10);

  if (Number.isNaN(pwdlength) || pwdlength < 8 || pwdlength > 128){
    alert("Please enter a number greater than 8 and less than 128");
    return null;
  }

  //UPPERCASE CONDITIONS
  let UseUpper = confirm("Include Uppercase?");
  if (UseUpper === true) {
    var indexU = Math.floor(Math.random() * arrayUpperletters.length);
    var randomU = arrayUpperletters[indexU];
    randomPwd.push.apply(randomPwd, arrayUpperletters)
    pwdlength --
  }
  else {
    randomU = ""
  };

  //LOWERCASE CONDITIONS
  let UseLower = confirm("Include Lowercase?");
  if (UseLower === true) {
    var indexL = Math.floor(Math.random() * arrayLetters.length);
    var randomL = arrayLetters[indexL];
    randomPwd.push.apply(randomPwd, arrayLetters)
    pwdlength --
  }
  else {
    randomL = ""
  };

  //NUMBER CONDITIONS
  let UseNumber = confirm("Include Numbers?");
  if (UseNumber === true) {
    var indexN = Math.floor(Math.random() * numbers.length);
    var randomN = numbers[indexN];
    randomPwd.push.apply(randomPwd, numbers)
    pwdlength --
  }
  else {
    randomN = ""
  };

  //SPECIAL CHARACTER CONDITIONS
  let UseSpecial = confirm("Include Special Characters?");
  if (UseSpecial === true) {
    var indexS = Math.floor(Math.random() * specialC.length);
    var randomS = specialC[indexS];
    randomPwd.push.apply(randomPwd, specialC)
    pwdlength --
  }
  else {
    randomS = ""
  };

  console.log(pwdlength)

  // TODO: Create For loop to select pwdlength characters from randomPWd array
  // TODO: Combine the randomU, randomL, randomN, and randomS to filtered random PWD
  // TODO: Create For loop to randomize the filtered random PWD 
  //Make that array to string by using .toString() and then .split yo eliminate ,
  //Use either .value or .textcontent

 // THIS IS FOR TESTING
  return randomU + randomL + randomN + randomS;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
