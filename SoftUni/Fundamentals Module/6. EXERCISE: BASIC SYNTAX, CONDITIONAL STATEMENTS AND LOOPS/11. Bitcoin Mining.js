function data(input) {
    let counterDays = 0;
    let countBitcoins = 0;
    let firstBitcoin = 0;
    let sum = 0;
    let counter = 0;

    for (let i = 0; i <= input.length - 1; i++) {
        let amountGold = Number(input[i]);
        let currentSum = amountGold * 67.51;
        counterDays++;
        if (counterDays % 3 === 0) {
            currentSum *= 0.7;
        }
        sum += currentSum;
        if (sum >= 11949.16) {
            let j = 11949.16;
            while (j <= sum) {
                countBitcoins++;
                if (countBitcoins === 1) {
                    firstBitcoin += counterDays;
                }
                sum -= 11949.16;
                counter++;
            }
        }

    }
    console.log(`Bought bitcoins: ${countBitcoins}`);
    if (countBitcoins !== 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`);
    }
    console.log(`Left money: ${sum.toFixed(2)} lv.`);
}

data([50, 100])