function data(input){
let plastic = Number(input[0])+2;
let paint = Number(input[1])*1.1;
let ingredient = Number(input[2]);
let hours = Number(input[3]);

let sum = ((plastic*1.5)+(paint*14.5)+(ingredient*5)+0.4);
let workersPayment = (sum*0.3)*hours;

console.log(`Total expenses: ${((sum+workersPayment).toFixed(2))} lv.`);


}
data(["10",
"11",
"4",
"8"])


