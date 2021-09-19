/*

first 


function magicMatrices(matrix) {
    let isTrue = true;
    for (let i = 0; i < matrix.length - 1; i++) {
        let sumROne = matrix[i].reduce((a, b) => a + b, 0);
        let sumRTwo = matrix[i + 1].reduce((a, b) => a + b, 0);
       
        let sumCOne = 0;
        let sumCTwo = 0;
        for (let j = 0; j < matrix.length; j++) {
            sumCOne += matrix[i][j];
            sumCTwo += matrix[i + 1][j];
        }

        if (sumROne !== sumRTwo || sumCOne !== sumCTwo) {
            isTrue= false;
            
           // return false;
        }
    }
console.log(isTrue);
   // return true;
    
}*/



function solve(matrix) {
    let equal = true;
debugger;
    let initialSumR = 0;
    let initialSumC = 0;
    for (let i = 0; i < matrix.length; i++) {
        initialSumR += matrix[0][i];
        initialSumC += matrix[i][0];
    }

    for (let row = 0; row < matrix.length; row++) {
        let currentRow = 0;
        let currentCol = 0;
        for (let col = 0; col < matrix.length; col++) {
            currentRow += matrix[row][col];
            currentCol += matrix[col][row];
        }

        if (currentRow != initialSumR || currentCol != initialSumC) {
            equal = false;
            break;
        }
    }
  
    return equal;
}
