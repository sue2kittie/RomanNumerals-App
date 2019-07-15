"user strict";

/* *
 * Declare variables
 * */

let number, numberLength, numberArray, result;

/* *
 * Declaring Roman Numerals array of ones, tens, hundreds and thousands
 * */

const romanNumerals = [
  ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
  ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["", "M", "MM", "MMM", "", "", "", "", "", ""]
];

/* *
 * function the gets the input number and checks if it's less than 3999
 * then it passes it to convert function. Otherwise it promptes a message
 * */

function getNumber() {
  number = document.getElementById("number").value;
  if (number < 3999) {
    convert(number);
    document.getElementById("result").innerHTML = result;
  } else {
    document.getElementById("result").innerHTML = "Please enter a valid number";
  }
}

/* *
 * Function that converts a number to Roman Numerals
 * It reversed and changes a number to an array
 * Then it will match the index and the value of the corresponding place in Roman Numerals array.
 * */

function convert(number) {
  numberArray = Array.from(number.toString()).reverse();
  numberLength = numberArray.length;
  result = "";

  numberArray.forEach((item, index) => {
    result = romanNumerals[index][item] + result;
  });
  return result;
}

module.exports = convert;
