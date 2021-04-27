function data(input){
let minutes = Number(input[0])*5;
let countWalking = Number(input[1]);
let calories = Number(input[2]);

if ((minutes*countWalking)>=calories/2){
    console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${(minutes*countWalking)}. `)
}else{
    console.log(`No, the walk for your cat is not enough. Burned calories per day: ${(minutes*countWalking)}.`)
}
}
data (["30",
"3",
"600"])
