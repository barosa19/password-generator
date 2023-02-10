// Assignment code here
let letters = ["abcdefghijklmnopqrstuvwxyz"];
let arrayLetters = [...letters[0]];
let upperLetters = letters[0].toUpperCase();
let arrayUpperletters = [...upperLetters];
let numbers = [0,1,2,3,4,5,6,7,8,9];
let specialC = ["!","@","#","$","%","^","&","*"];
let randomPassword = [];

//If true then randomly choose one of the characters from the list requested AND also append it to a new array. 
//Then I need to create a for loop to add a character from that new array until desired amount of characters are in a new array then from there I need to hit again with random and boom that final array !!! 
//Make that array to string by using .toString()
//And then .split yo eliminate ,
//Use either .value or .textcontent

function generatePassword(){

  /* let length = prompt("Please indicate desired length of password"); */

  let UseUpper = confirm ("Include Uppercase?")
  if (UseUpper===true){
    var indexU = Math.floor(Math.random()*arrayUpperletters.length);
    var randomU = arrayUpperletters[indexU];
  }

/*   let UseLower = confirm ("Include Lowercase?")
  let UseNumber = confirm ("Include Numbers?")
  let UseSpecial = confirm ("Include Special Characters?") */
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
