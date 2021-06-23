function sum (input){
    let firstNum = Number(input.shift());
    let lastNum = Number(input.pop());
    
    console.log(firstNum+lastNum);
    }
    
    sum(['20', '30', '40'])

    /*  function solve(input) {
  input = input.map(Number);
  console.log(input[0] 
              + input.pop());
}

Да се има предвид, че ако масива е от 1 число това ще гърми!
За да го избегнем събираме index[0] i index.length-1.

п.п. Втората ф(х) хваща посочения по-горе граничен случай!
*/
