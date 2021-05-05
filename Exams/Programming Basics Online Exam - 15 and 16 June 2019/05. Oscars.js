function data(input){
let name= input[0];
let startingPoints = Number(input[1]);
let count= Number(input[2])

for(let i=3; i<=count*2+1; i+=2){   /* +1, за разлика от предишната адача, понеже тук броим от третата част на масива, и за да ги изброим докрай четните- прибавяме 1)*/
let nameJuryMember = input[i].length;
let evaluation = Number(input[i+1]); 
let points = (nameJuryMember*evaluation)/2;
startingPoints+=points;
if(startingPoints>=1250.5){
    console.log(`Congratulations, ${name} got a nominee for leading role with ${startingPoints.toFixed(1)}!`);
    return;
}
}

console.log(`Sorry, ${name} you need ${(1250.5-startingPoints).toFixed(1)} more!`)

    
}
data(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
