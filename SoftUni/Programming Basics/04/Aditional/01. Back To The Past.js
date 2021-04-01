function data(input) {
    let money = Number(input[0]);
    let yearsToLive = Number(input[1]);


    /*LOGIC*/

    let yearsIvan = 18;
    for (let currentYear = 1800; currentYear <= yearsToLive; currentYear++) {
        if (currentYear % 2 === 0) {
            money -= 12000;
            yearsIvan+=1;
        } else {
            money -= (12000 + (yearsIvan * 50));
            yearsIvan+=1;
        }
        // yearsIvan++
    }

    if (money >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`)
    } else {
        money= Math.abs(money);
        console.log(`He will need ${money.toFixed(2)} dollars to survive.`)
    }

}
data([85888, 1813])
