function data(input){
let number = Number(input[0]);

/*LOGIC*/

let lastNum = number % 10; /*последна цифра*/
let middleNum = (number / 10) % 10; 
let firstNum = (number / 100) % 10; 
let result = 0;
for (let i = 1; i<=lastNum; i++){
    for( let j= 1; j<=middleNum; j++){
        for( let k=1; k<=firstNum; k++){
result = i*j*k;
console.log( `${i} * ${j} * ${k} = ${result};`)
        }
    }
}
}
data(["324"]);