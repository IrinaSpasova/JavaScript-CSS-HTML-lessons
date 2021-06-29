function data(input) {
    let profit = 0;
    let days =Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let expectedPlunder =Number(input.shift());

    for (let i = 1; i <= days; i++) {
        profit += dailyPlunder;
        if (i % 3 === 0) {
            profit += dailyPlunder * 0.5;
        } 
        if (i % 5 === 0) {
           
            profit *= 0.7;
        } 
    }

    if (profit >= expectedPlunder) {
        console.log(`Ahoy! ${profit.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((profit/expectedPlunder)*100).toFixed(2)}% of the plunder.`);
    }
}




/*
Джъдж не го харесва, заради проверката.
Очевидно не влиза в нея. 


function data(days, dailyPlunder, expectedPlunder) {
    let profit = 0;

    for (let i = 1; i <= days; i++) {

        if (i % 3 === 0) {
            profit += dailyPlunder * 1.5;
        } else if (i % 5 === 0) {
            profit += dailyPlunder;
            profit *= 0.7;
        } else {
            profit += dailyPlunder;
        }
    }

    if (profit >= expectedPlunder) {
        console.log(`Ahoy! ${profit.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${((profit/expectedPlunder)*100).toFixed(2)}% of the plunder."`);
    }
}*/



data([10, 20, 380])