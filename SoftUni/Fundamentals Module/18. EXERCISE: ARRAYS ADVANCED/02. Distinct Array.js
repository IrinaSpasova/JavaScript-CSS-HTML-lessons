function distinct(input){
let resultArr = [];

for (let i = 0; i< input.length; i++){
    let currentNumber = input[i];

    if (resultArr.includes(currentNumber)===false){
// ili (!resultArr.includes(currentNumber)
resultArr.push(currentNumber);
    }
}

console.log((resultArr.join(` `)));
}
distinct([7, 8, 9, 7, 2, 3, 4, 1, 2]);