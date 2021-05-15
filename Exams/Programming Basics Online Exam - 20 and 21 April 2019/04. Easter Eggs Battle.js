function data(input){
let countEggsOne = Number(input[0]);
let countEggsTwo = Number(input[1]);

let counter = 2;

while (input[counter] != "End of battle"){
    let winner = input[counter];
    if (winner == "one"){
        countEggsTwo--;        
    } else if(winner == "two"){
        countEggsOne--;
    }

    if (countEggsOne === 0){
console.log(`Player one is out of eggs. Player two has ${countEggsTwo} eggs left.`);
return;
    }else if (countEggsTwo === 0){
        console.log(`Player two is out of eggs. Player one has ${countEggsOne} eggs left.`);
        return;
    }
    counter++;
}
console.log(`Player one has ${countEggsOne} eggs left.`);
console.log(`Player two has ${countEggsTwo} eggs left.`);
}
data(["5",
"4",
"one",
"two",
"one",
"two",
"two",
"End of battle"])
