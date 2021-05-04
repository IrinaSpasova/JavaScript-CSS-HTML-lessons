function data(input){
let time = Number(input[0]);
let count = Number(input[1]);
let length = Number(input[2]);

let sum = (time*0.15)+(count*length);

if (sum<=time){
    console.log(`You managed to finish the movie on time! You have ${(time-sum).toFixed(0)} minutes left!`)
}else{
    console.log(`Time is up! To complete the movie you need ${(sum-time).toFixed(0)} minutes.`)
}


}
data(["120",
"10",
"11"])
