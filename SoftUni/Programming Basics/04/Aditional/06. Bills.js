function data(input){
let months = Number(input[0]);

/*LOGIC*/

let water = 0;
let internet =0;
let electricity=0;
let other = 0;
let average =0;
let monthsCount=0;
for(let i=1; i<=months; i++){
let electricityPerMonth = Number(input[i]);

water+=20;
internet+=15;
electricity+=electricityPerMonth;

let expenses=electricityPerMonth+35;
let otherPerMonth=expenses*1.2;
other+=otherPerMonth;

average+=expenses+otherPerMonth;
monthsCount++;
}



console.log(`Electricity: ${electricity.toFixed(2)} lv`);
console.log(`Water: ${water.toFixed(2)} lv`);
console.log(`Internet: ${internet.toFixed(2)} lv`);
console.log(`Other: ${other.toFixed(2)} lv`);
console.log(`Average: ${(average/monthsCount).toFixed(2)} lv`);

}
data([5,68.63,89.25,132.53,93.53,63.22])