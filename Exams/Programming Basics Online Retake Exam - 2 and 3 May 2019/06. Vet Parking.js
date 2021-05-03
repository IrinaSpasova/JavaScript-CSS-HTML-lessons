function data(input){
let days = Number(input[0]);
let hours = Number(input[1]);

let sum =0;

for(let i=1; i<=days; i++){
    let sumForTheDay =0;
    for (let j=1; j<=hours; j++){
if(i%2 ===0){
    if(j%2===0){
        sumForTheDay+=1;
    }else{
        sumForTheDay+=2.5;
    }
}
if (i%2 !==0){
    if(j%2===0){
        sumForTheDay+=1.25;
    }else{
        sumForTheDay+=1;
    }
}
    }
    console.log(`Day: ${i} - ${sumForTheDay.toFixed(2)} leva`)
    sum+=sumForTheDay;
}
console.log(`Total: ${sum.toFixed(2)} leva`)

}
data(["5",
"2"]);

