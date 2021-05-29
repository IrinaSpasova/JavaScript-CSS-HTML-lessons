function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let counter = 0;

    helmetPriceCounter = 0;
    swordPriceCounter = 0;
    shieldPriceCounter = 0;
    armorPriceCounter = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        counter++;

        if (counter % 2 === 0) {
            helmetPriceCounter++;
        }
        if (counter % 3 === 0) {
            swordPriceCounter++;
        }
        if (counter % 2 === 0 && counter % 3 === 0) {
            shieldPriceCounter++;
            if (shieldPriceCounter % 2 === 0) {
                armorPriceCounter++;
            }
        }
        

    }
   
    let sum = (helmetPriceCounter * helmetPrice) + (swordPriceCounter * swordPrice) + (shieldPriceCounter * shieldPrice) + (armorPriceCounter * armorPrice);
    console.log(`Gladiator expenses: ${(sum).toFixed(2)} aureus`)
}

solve(7,
    2,
    3,
    4,
    5
)


/*function gladiatorExpenses(loses, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    expenses += (Math.floor(loses/2))*helmetPrice;
    expenses += (Math.floor(loses/3))*swordPrice;
    expenses += (Math.floor(loses/6))*shieldPrice;
    expenses += (Math.floor(loses/12))*armorPrice;
 
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}*/