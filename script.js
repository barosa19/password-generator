// Assignment code here
let letters = ["abcdefghijklmnopqrstuvwxyz"];
let arrayLetters = [...letters[0]];
let upperLetters = letters[0].toUpperCase();
let arrayUpperletters = [...upperLetters];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialC = ["!", "@", "#", "$", "%", "^", "&", "*"];
let randomPwd = [];

//If true then randomly choose one of the characters from the list requested AND also append it to a new array. 
//Then I need to create a for loop to add a character from that new array until desired amount of characters are in a new array then from there I need to hit again with random and boom that final array !!! 
//Make that array to string by using .toString()
//And then .split yo eliminate ,
//Use either .value or .textcontent

function generatePassword() {

  //LENGTH CONDITIONS
  let pwdlength = prompt("Please indicate desired length of password")

  //UPPERCASE CONDITIONS
  let UseUpper = confirm("Include Uppercase?")
  if (UseUpper === true) {
    var indexU = Math.floor(Math.random() * arrayUpperletters.length);
    var randomU = arrayUpperletters[indexU];
  }
  else {
    randomU = ""
  }
  randomPwd.push(randomU)

  //LOWERCASE CONDITIONS
  let UseLower = confirm("Include Lowercase?")
  if (UseLower === true) {
    var indexL = Math.floor(Math.random() * arrayLetters.length);
    var randomL = arrayLetters[indexL];
  }
  else {
    randomL = ""
  }

  randomPwd.push(randomL)

  //NUMBER CONDITIONS
  let UseNumber = confirm("Include Numbers?")
  if (UseNumber === true) {
    var indexN = Math.floor(Math.random() * numbers.length);
    var randomN = numbers[indexN];
  }
  else {
    randomN = ""
  }

  randomPwd.push(randomN)

  //SPECIAL CHARACTER CONDITIONS
  let UseSpecial = confirm("Include Special Characters?")
  if (UseSpecial === true) {
    var indexS = Math.floor(Math.random() * specialC.length);
    var randomS = specialC[indexS];
  }
  else {
    randomS = ""
  }

  // TODO: HAVE TO ELIMINATE EMPTY STRINGS FROM ARRAY
  randomPwd.push(randomS)

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
