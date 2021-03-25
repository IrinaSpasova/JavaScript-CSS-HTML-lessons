function data(input) {
    let chrysanthemums = Number(input[0]);
    let roses = Number(input[1]);
    let tulips = Number(input[2]);
    let season = input[3];
    let holyday = input[4];

    /*LOGIC*/

   
    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    if (season === "Spring" || season === "Summer") {
        chrysanthemumsPrice = 2*chrysanthemums;
        rosesPrice = 4.1*roses;
        tulipsPrice = 2.5*tulips;
    }
    if (season === "Autumn" || season === "Winter") {
        chrysanthemumsPrice = 3.75*chrysanthemums;
        rosesPrice = 4.5*roses;
        tulipsPrice = 4.15*tulips;   
    }
    let price = chrysanthemumsPrice+ rosesPrice+tulipsPrice;
if (holyday === "Y"){
    price*=1.15;
}
if (season === "Spring" && tulips>7){
    price*=0.95;
}
if(season==="Winter" && roses>=10){
    price *= 0.90;
}
if ( chrysanthemums+roses+tulips > 20){
    price *=0.80;
}
console.log((price+2).toFixed(2));
}
data(["3","10","9","Winter","N"])