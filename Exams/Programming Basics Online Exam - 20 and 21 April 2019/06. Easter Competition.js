function data(input) {
    
    let counter = 1;
    let name = "";
    let points = 0;
    

for(let i = 1; i<=Number(input[0]); i++){
    let currentName = input[counter];
    counter++;
    let counterPoints=0;
    while(input[counter] !="Stop"){
        let currentPoints = Number(input[counter]);
        counterPoints+=currentPoints;
        counter++;
    }
    console.log(`${currentName} has ${counterPoints} points.`);
    if(counterPoints>points){
        name=currentName;
        points=counterPoints;
    console.log(`${name} is the new number 1!`);
    
    }
    counter++;
}
console.log(`${name} won competition with ${points} points!`);
}
data(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])
