// Global Variables
let letters = ["abcdefghijklmnopqrstuvwxyz"];
let arrayLetters = [...letters[0]];
let upperLetters = letters[0].toUpperCase();
let arrayUpperletters = [...upperLetters];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialC = ["!", "@", "#", "$", "%", "^", "&", "*"];

function generatePassword() {
  let randomPwd = [];
  let arrayOfoptions = [];

  //LENGTH CONDITIONS
  let pwdlength = parseInt(prompt("Please indicate desired length of password"), 10);

  if (Number.isNaN(pwdlength) || pwdlength < 8 || pwdlength > 128) {
    alert("Please enter a number greater than 8 and less than 128");
    return null;
  }

  //UPPERCASE CONDITIONS
  let UseUpper = confirm("Include Uppercase?");
  if (UseUpper === true) {
    var indexU = Math.floor(Math.random() * arrayUpperletters.length);
    var randomU = arrayUpperletters[indexU];
    arrayOfoptions.push.apply(arrayOfoptions, arrayUpperletters)
    pwdlength--
  }
  else {
    randomU = ""
  };

  //LOWERCASE CONDITIONS
  let UseLower = confirm("Include Lowercase?");
  if (UseLower === true) {
    var indexL = Math.floor(Math.random() * arrayLetters.length);
    var randomL = arrayLetters[indexL];
    arrayOfoptions.push.apply(arrayOfoptions, arrayLetters)
    pwdlength--
  }
  else {
    randomL = ""
  };

  //NUMBER CONDITIONS
  let UseNumber = confirm("Include Numbers?");
  if (UseNumber === true) {
    var indexN = Math.floor(Math.random() * numbers.length);
    var randomN = numbers[indexN];
    arrayOfoptions.push.apply(arrayOfoptions, numbers)
    pwdlength--
  }
  else {
    randomN = ""
  };

  //SPECIAL CHARACTER CONDITIONS
  let UseSpecial = confirm("Include Special Characters?");
  if (UseSpecial === true) {
    var indexS = Math.floor(Math.random() * specialC.length);
    var randomS = specialC[indexS];
    arrayOfoptions.push.apply(arrayOfoptions, specialC)
    pwdlength--
  }
  else {
    randomS = ""
  };

  // Generates a random pwd array with desired pwd length
  for (var i = 0; i < pwdlength; i++) {
    var indexR = Math.floor(Math.random() * arrayOfoptions.length)
    var randomR = arrayOfoptions[indexR]
    randomPwd.splice(i, 0, randomR)
  }

  // Ensures user criteries are met
  // To add some more randomness hit this aray with another for loop
  randomPwd.push(randomU, randomL, randomN, randomS)

  // Converts the Array to string and removes commas
  let randomPwdS = randomPwd.toString()
  let randomPwdClean = randomPwdS.replace(/,/g, "")

  console.log(randomPwd)

  return randomPwdClean
}

// TODO: need to reset the arrayOfoptions array to empty

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
