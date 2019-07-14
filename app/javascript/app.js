'user strict';

let number, numberLength, output, numberArray,result ;

const romanNumerals =[["", "I", "II", "III", "IV", "V", "VI", "VII","VIII","IX" ],
                      ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX","LXXX","XC"],
                      ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC","DCCC","CM"],
                      ["", "M", "MM", "MMM", ""  , "",  ""  , ""   , ""    ,""]];

function convert() {

  number = document.getElementById('number').value;

  if (number < 3999 ) {
      numberArray = Array.from(number.toString()).reverse();
      numberLength = numberArray.length;
      result  ='';
      
      numberArray.forEach((item, index) => {
      result = romanNumerals[index][item] + result;
  });
    //console.log('result >>>>', result);
    document.getElementById('result').innerHTML = result;

  } else {
    document.getElementById('result').innerHTML = 'Sorry no results';
  }


}
  
