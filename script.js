// Global Variables
var letters = ["abcdefghijklmnopqrstuvwxyz"];
var arrayLetters = [...letters[0]];
var upperLetters = letters[0].toUpperCase();
var arrayUpperletters = [...upperLetters];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialC = ["!", "@", "#", "$", "%", "^", "&", "*"];

function generatePassword() {
  // Local Variables
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

  // Forces user to select one of the conditions
  if (UseUpper === false && UseLower === false && UseNumber === false && UseSpecial === false){
    alert("Please select atleast one condition");
    return null;
  }

  // Generates a random pwd array with desired pwd length
  for (var i = 0; i < pwdlength; i++) {
    var indexR = Math.floor(Math.random() * arrayOfoptions.length)
    var randomR = arrayOfoptions[indexR]
    randomPwd.splice(i, 0, randomR)
  }

  // FUnction shuffles randomPwd ater user criteria is pushed
  function arrShuffler (arr) {
    var j;
    var x;
    var i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x= arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }

  // Ensures user criteries are met
  randomPwd.push(randomU, randomL, randomN, randomS)
  let result =  arrShuffler(randomPwd);
  return result.join("");

  // Method without  arrShuffler
  /* let randomPwdS = randomPwd.toString()
  let randomPwdClean = randomPwdS.replace(/,/g, "") 
  return randomPwdClean */
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
