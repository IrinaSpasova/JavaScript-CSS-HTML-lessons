// function data(input) {
//     let result = ``;
//     let counter = 0;
//     let counterC = 0;
//     let counterO = 0;
//     let counterN = 0;
//     let tempResult = ``;
//     let tempResultCount = 0;

//     while (input[counter] != "End") {

//         let symbol = input[counter].charCodeAt();
//         if ((symbol >= 65 && symbol <= 90) || (symbol >= 97 && symbol <= 122)) {
//             if ((symbol === 12 || symbol === 99) && counterC === 0) {
//                 counterC++;
//             } else if ((symbol === 79 || symbol === 111) && counterO === 0) {
//                 counterO++;
//             } else if ((symbol === 78 || symbol === 110) && counterN === 0) {
//                 counterN++;
//             } else {
//                 tempResult += String.fromCharCode(symbol);
//                 tempResultCount ++;
//             }

//         }

//         if (counterC === 1 && counterO === 1 && counterN === 1) {
//             if ( tempResultCount===1){
//                 result += tempResult;
//             }else {
//                 result += ` ` + tempResult;
//             } 
//             tempResult = ``;
//             counterC = 0;
//             counterO = 0;
//             counterN = 0;
//         }

//         counter++;
//     }

//     console.log(result);

// }
// data(["H", "n", "e", "l", "l", "o", "o", "c", "W", "c", "h", "o", "e", "r", "e", "z", "e", "End"])





function solve(input) {
    let inputLetter = input.shift();
  
    let counterLetterC = 0;
    let counterLetterN = 0;
    let counterLetterO = 0;
  
    let latinLetters = /[a-zA-Z]/;
  
    let currentWord = "";
    let finalWord = "";
  
    while (inputLetter != "End") {
      if (inputLetter.match(latinLetters)) {
        if (inputLetter == "c") {
          counterLetterC++;
        } else if (inputLetter == "n") {
          counterLetterN++;
        } else if (inputLetter == "o") {
          counterLetterO++;
        }
  
        if ((inputLetter != "c") && (inputLetter != "n") && (inputLetter != "o")) {
          currentWord += inputLetter;
        }
  
        if (inputLetter == "c" && counterLetterC > 1) {
          currentWord += inputLetter;
        } else if (inputLetter == "n" && counterLetterN > 1) {
          currentWord += inputLetter;
        } else if (inputLetter == "o" && counterLetterO > 1) {
          currentWord += inputLetter;
        } else {
          currentWord = currentWord;
        }
  
        if ((counterLetterC >= 1) && (counterLetterN >= 1) && (counterLetterO >= 1)) {
          finalWord += currentWord + " ";
          currentWord = "";
          counterLetterC = 0;
          counterLetterN = 0;
          counterLetterO = 0;
        }
      }
  
      inputLetter = input.shift();
    }
  
    console.log(finalWord);
  }