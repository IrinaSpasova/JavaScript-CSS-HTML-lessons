function data(input){
let tax= Number(input[0]);


console.log((tax+(tax*0.6) +((tax*0.6)*0.8)+(((tax*0.6)*0.8)/4)+((((tax*0.6)*0.8)/4)/5)).toFixed(2))

}
data(["320"])