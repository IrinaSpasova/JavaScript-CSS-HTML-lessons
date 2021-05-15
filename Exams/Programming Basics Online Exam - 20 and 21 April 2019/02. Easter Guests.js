function data(input){
let gests = Number(input[0]);
let budget = Number(input[1]);


let easterCake = Math.ceil(gests/3);
let eggs = gests*2;
if (budget>=((easterCake*4)+(eggs*0.45))){
    console.log(`Lyubo bought ${easterCake} Easter bread and ${eggs} eggs.`);
    console.log(`He has ${(budget-((easterCake*4)+(eggs*0.45))).toFixed(2)} lv. left.`)
}else{
    console.log(`Lyubo doesn't have enough money.`);
    console.log(`He needs ${Math.abs(budget-((easterCake*4)+(eggs*0.45))).toFixed(2)} lv. more.`);
}
}
data(["10","35"])

