function data(input){
let budget = Number(input[0]);

let counter=1;

while(input[counter] !="ACTION"){
let names= input[counter].length;
if(names>15){
    budget*=0.80;
    counter++;
}else{
    budget-=Number(input[counter+1]);
    counter+=2;
}
if(budget<0){
    console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
    return;
}
}
console.log(`We are left with ${budget.toFixed(2)} leva.`)

}
data(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"]);

